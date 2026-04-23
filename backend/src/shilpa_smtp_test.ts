import * as nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
import { resolve } from 'path';

// Use the root .env
dotenv.config({ path: resolve(__dirname, '../../../../.env') });

async function main() {
  console.log('--- SMTP TEST START (INTERNAL) ---');
  console.log(`Host: ${process.env.SMTP_HOST}`);
  console.log(`User: ${process.env.SMTP_USER}`);
  console.log(`Pass: ${process.env.SMTP_PASS?.substring(0, 4)}****`);

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  
  try {
    await transporter.verify();
    console.log('✅ SMTP Connection Verified!');
    
    const info = await transporter.sendMail({
      from: '"Refentra Auth" <shilpak2k23@gmail.com>',
      to: 'shilpak2k23@gmail.com',
      subject: 'Refentra OTP Test (Internal)',
      html: '<h1>Your 6-Digit OTP: 654321</h1><p>Test successful.</p>',
    });
    
    console.log('✉️ Email SENT:', info.messageId);
  } catch (err: any) {
    console.error('❌ SMTP FAILED:', err.message);
  }
}

main().catch(console.error);
