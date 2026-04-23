const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  // ─── Admin user (password-based, hidden login) ───
  const adminHash = await bcrypt.hash('admin@123', 10);

  const admin = await prisma.user.upsert({
    where: { email: 'admin@refentra.com' },
    update: { passwordHash: adminHash, role: 'ADMIN', isVerified: true },
    create: {
      email: 'admin@refentra.com',
      phone: '+91 90000 00001',
      employeeId: 'EMP-ADMIN-001',
      name: 'Refentra Admin',
      department: 'Human Resources',
      role: 'ADMIN',
      passwordHash: adminHash,
      isVerified: true,
    },
  });
  console.log('Admin user created/updated:', admin.email);

  // ─── Test Employee user (OTP-based, no password) ───
  const testUser = await prisma.user.upsert({
    where: { email: 'UserTest@gmail.com' },
    update: { isVerified: true, passwordHash: adminHash }, 
    create: {
      email: 'UserTest@gmail.com',
      phone: '+91 98765 00001',
      employeeId: 'EMP-TEST-001',
      name: 'Test Employee',
      department: 'Engineering',
      role: 'EMPLOYEE',
      passwordHash: adminHash,
      isVerified: true,
    },
  });
  console.log('Test employee created/updated:', testUser.email);

  // ─── Demo Positions ───
  const positions = [
    { title: 'Senior Frontend Engineer', department: 'Engineering', location: 'Bangalore' },
    { title: 'Backend Developer', department: 'Engineering', location: 'Hyderabad' },
    { title: 'Product Manager', department: 'Product', location: 'Mumbai' },
    { title: 'UX Designer', department: 'Design', location: 'Bangalore' },
    { title: 'DevOps Engineer', department: 'Engineering', location: 'Remote' },
    { title: 'Data Analyst', department: 'Analytics', location: 'Pune' },
  ];

  for (const pos of positions) {
    const id = `pos-${pos.title.toLowerCase().replace(/\s+/g, '-')}`;
    await prisma.position.upsert({
      where: { id },
      update: {},
      create: { id, ...pos, isActive: true },
    });
  }
  console.log('Demo positions seeded');
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
