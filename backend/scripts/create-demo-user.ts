import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const email = 'UserTest@gmail.com';
  const existing = await prisma.user.findUnique({ where: { email } });
  if (!existing) {
    await prisma.user.create({
      data: {
        email,
        name: 'Demo User',
        phone: '1234567890',
        employeeId: 'EMP-DEMO',
        role: 'EMPLOYEE'
      }
    });
    console.log('✅ Demo user created');
  } else {
    console.log('ℹ️ Demo user already exists');
  }
}

main().catch(console.error).finally(() => prisma.$disconnect());
