const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const path = require('path');

// Use the root .env
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

async function main() {
  console.log('--- SMTP JS TEST START ---');
  console.log(`Host: ${process.env.SMTP_HOST}`);
  console.log(`User: ${process.env.SMTP_USER}`);

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
      from: process.env.SMTP_FROM || '"Refentra Auth" <shilpak2k23@gmail.com>',
      to: 'shilpak2k23@gmail.com',
      subject: 'Refentra OTP Test (Internal JS)',
      html: '<h1>Your 6-Digit OTP: 999111</h1><p>Test successful via JS script.</p>',
    });
    
    console.log('✉️ Email SENT:', info.messageId);
  } catch (err) {
    console.error('❌ SMTP FAILED:', err.message);
  }
}

main().catch(console.error);
