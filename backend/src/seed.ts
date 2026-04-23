import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash('admin123', 10);
  const empPasswordHash = await bcrypt.hash('pass123', 10);

  // 1. Create Positions
  const positions = [
    { title: 'Software Engineer', department: 'Engineering' },
    { title: 'Senior Software Engineer', department: 'Engineering' },
    { title: 'Product Manager', department: 'Product' },
    { title: 'UI/UX Designer', department: 'Design' },
    { title: 'Data Analyst', department: 'Data' },
  ];

  for (const pos of positions) {
    await prisma.position.upsert({
      where: { id: pos.title.toLowerCase().replace(/ /g, '-') },
      update: {},
      create: {
        id: pos.title.toLowerCase().replace(/ /g, '-'),
        title: pos.title,
        department: pos.department,
      },
    });
  }

  // 2. Create Users
  await prisma.user.upsert({
    where: { email: 'admin@refentra.com' },
    update: {},
    create: {
      email: 'admin@refentra.com',
      name: 'HR Admin',
      phone: '9876543210',
      employeeId: 'EMP001',
      passwordHash,
      role: 'ADMIN',
    },
  });

  await prisma.user.upsert({
    where: { email: 'arjun@refentra.com' },
    update: {},
    create: {
      email: 'arjun@refentra.com',
      name: 'Arjun Mehta',
      phone: '9876543211',
      employeeId: 'EMP002',
      passwordHash: empPasswordHash,
      role: 'EMPLOYEE',
    },
  });

  // Demo user for UI testing
  await prisma.user.upsert({
    where: { email: 'UserTest@gmail.com' },
    update: {},
    create: {
      email: 'UserTest@gmail.com',
      name: 'Test Demo User',
      phone: '1234567890',
      employeeId: 'EMP999',
      passwordHash: null,
      role: 'EMPLOYEE',
    },
  });

  console.log('✅ Seed data created');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
