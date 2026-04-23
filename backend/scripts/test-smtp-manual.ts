import * as nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config({ path: resolve(__dirname, '.env') });

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: Number(process.env.SMTP_PORT) || 587,
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function main() {
  console.log('--- SMTP TEST START ---');
  console.log(`Host: ${process.env.SMTP_HOST}`);
  console.log(`User: ${process.env.SMTP_USER}`);
  
  try {
    await transporter.verify();
    console.log('✅ SMTP Connection Verified!');
    
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || '"Refentra Auth" <shilpak2k23@gmail.com>',
      to: 'shilpak2k23@gmail.com',
      subject: 'Refentra OTP Test',
      html: '<h1>Your 6-Digit OTP: 123456</h1>',
    });
    
    console.log('✉️ Email SENT:', info.messageId);
  } catch (err: any) {
    console.error('❌ SMTP FAILED:', err.message);
    if (err.stack) console.error(err.stack);
  }
}

main().catch(console.error);
