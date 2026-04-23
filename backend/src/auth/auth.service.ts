import { Injectable, UnauthorizedException, ConflictException, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaClient,
    private jwtService: JwtService, 
    private config: ConfigService
  ) {}

  /* ─── ADMIN & USER: Password-based login ─── */
  async validateUser(email: string, pass: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user || !user.passwordHash) return null;
    
    // Check if verified
    if (!user.isVerified) {
      throw new UnauthorizedException('Please verify your email before logging in.');
    }

    const match = await bcrypt.compare(pass, user.passwordHash);
    if (match) {
      const { passwordHash, otp, otpExpiry, ...result } = user;
      return result;
    }
    return null;
  }

  /* ─── USER SIGNUP: collects data and sends OTP ─── */
  async registerUser(data: { name: string; email: string; phone: string; password?: string }) {
    const existing = await this.prisma.user.findUnique({ where: { email: data.email } });
    if (existing) {
      if (existing.isVerified) {
        throw new ConflictException('An account with this email already exists.');
      }
      // If user exists but not verified, we'll just update it and re-send OTP
    }

    const passwordHash = data.password ? await bcrypt.hash(data.password, 10) : null;
    
    // Auto-generate an employee ID
    const count = await this.prisma.user.count();
    const employeeId = `EMP-${String(count + 1).padStart(4, '0')}`;

    const user = await this.prisma.user.upsert({
      where: { email: data.email },
      update: {
        name: data.name,
        phone: data.phone,
        passwordHash,
        isVerified: true, // Auto-verify
      },
      create: {
        email: data.email,
        phone: data.phone,
        name: data.name,
        employeeId,
        passwordHash,
        role: 'EMPLOYEE',
        isVerified: true, // Auto-verify
      },
    });

    // Generate JWT for immediate login
    const payload = { sub: user.id, role: user.role, email: user.email };
    return {
      message: 'Registration successful',
      accessToken: this.jwtService.sign(payload),
      refreshToken: this.jwtService.sign(payload, { expiresIn: '7d' } as any),
      user: { 
        id: user.id, 
        email: user.email, 
        name: user.name, 
        role: user.role, 
        isVerified: true 
      },
    };
  }

  /* ─── SHARED: Send OTP for Verification/Login ─── */
  async sendOtp(email: string) {
    if (!email || !email.includes('@')) {
      throw new BadRequestException('Invalid email address.');
    }

    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new BadRequestException('No account found for this email.');
    }

    // Rate limit: check if OTP was sent less than 30 seconds ago
    const recentOtp = await this.prisma.otpVerification.findFirst({
      where: {
        email,
        used: false,
        createdAt: { gt: new Date(Date.now() - 30 * 1000) },
      },
      orderBy: { createdAt: 'desc' },
    });

    if (recentOtp) {
      throw new BadRequestException('Please wait 30 seconds before requesting another OTP.');
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpHash = await bcrypt.hash(otp, 10);
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes

    await this.prisma.otpVerification.updateMany({
      where: { email, used: false },
      data: { used: true },
    });

    await this.prisma.otpVerification.create({
      data: { email, otpHash, expiresAt },
    });

    await this.prisma.user.update({
      where: { email },
      data: { otp, otpExpiry: expiresAt },
    });

    console.log(`\n📧 OTP for ${email}: ${otp}\n`);

    // REAL SMTP
    const smtpUser = this.config.get<string>('SMTP_USER');
    const smtpPass = this.config.get<string>('SMTP_PASS');
    const smtpHost = this.config.get<string>('SMTP_HOST');
    const smtpPort = this.config.get<string>('SMTP_PORT');
    const smtpFrom = this.config.get<string>('SMTP_FROM') || '"Refentra Auth" <noreply@refentra.com>';

    if (smtpUser && smtpUser !== 'your-email@gmail.com') {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: Number(smtpPort) || 587,
          secure: Number(smtpPort) === 465,
          auth: { user: smtpUser, pass: smtpPass },
        });

        await transporter.sendMail({
          from: smtpFrom,
          to: email,
          subject: 'Verify your Refentra Account',
          html: this.createEmailTemplate(otp),
        });
        return { success: true, message: 'OTP sent to your email.' };
      } catch (err: any) {
        console.error('SMTP Error:', err.message);
        throw new BadRequestException('Email service error.');
      }
    }

    // ETHEREAL FALLBACK
    try {
      const testAccount = await nodemailer.createTestAccount();
      const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: { user: testAccount.user, pass: testAccount.pass },
      });

      const info = await transporter.sendMail({
          from: '"Refentra Dev-Mode" <no-reply@ethereal.email>',
          to: email,
          subject: 'Verify your Refentra Account',
          html: this.createEmailTemplate(otp),
      });

      return { 
        demo: true, 
        otp, 
        previewUrl: nodemailer.getTestMessageUrl(info), 
        message: `OTP [${otp}] sent via Ethereal.` 
      };
    } catch (err: any) {
      return { demo: true, otp, message: 'OTP (Console): ' + otp };
    }
  }

  private createEmailTemplate(otp: string) {
    return `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
        <h2 style="color: #2B1D1C;">Refentra Account Verification</h2>
        <p>Your one-time verification code is:</p>
        <div style="background: #ECCEB6; padding: 30px; text-align: center; border-radius: 16px; margin: 30px 0;">
          <h1 style="color: #861C1C; font-size: 56px; letter-spacing: 12px; margin: 0;">${otp}</h1>
        </div>
        <p style="font-size: 12px; color: #718096;">If you did not initiate this request, please ignore this email.</p>
      </div>
    `;
  }

  /* ─── VERIFY OTP: Activates user and logs them in ─── */
  async verifyOtp(email: string, otp: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) throw new UnauthorizedException('Invalid identifier.');

    const otpRecord = await this.prisma.otpVerification.findFirst({
      where: { email, used: false },
      orderBy: { createdAt: 'desc' },
    });

    if (!otpRecord || otpRecord.expiresAt < new Date()) {
      throw new UnauthorizedException('OTP invalid or expired.');
    }

    const isMatch = await bcrypt.compare(otp, otpRecord.otpHash);
    if (!isMatch) throw new UnauthorizedException('Invalid OTP.');

    // Activate the user
    await this.prisma.user.update({
      where: { email },
      data: { isVerified: true, otp: null, otpExpiry: null },
    });

    await this.prisma.otpVerification.update({
      where: { id: otpRecord.id },
      data: { used: true },
    });

    // Generate JWT
    const payload = { sub: user.id, role: user.role, email: user.email };
    return {
      accessToken: this.jwtService.sign(payload),
      refreshToken: this.jwtService.sign(payload, { expiresIn: '7d' } as any),
      user: { 
        id: user.id, 
        email: user.email, 
        name: user.name, 
        role: user.role, 
        isVerified: true 
      },
    };
  }

  /* ─── FINAL LOGIN RESPONSE ─── */
  async adminLogin(user: any) {
    const payload = { sub: user.userId || user.id, role: user.role, email: user.email };
    return {
      accessToken: this.jwtService.sign(payload),
      refreshToken: this.jwtService.sign(payload, { expiresIn: '7d' } as any),
      user: { ...user },
    };
  }

  async login(user: any) {
    return this.adminLogin(user);
  }
}
