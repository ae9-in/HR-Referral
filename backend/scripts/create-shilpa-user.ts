import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const email = 'shilpak2k23@gmail.com';
  const existing = await prisma.user.findUnique({ where: { email } });
  if (!existing) {
    await prisma.user.create({
      data: {
        email,
        name: 'Shilpa K',
        phone: '9845012345',
        employeeId: 'EMP-0001',
        role: 'EMPLOYEE'
      }
    });
    console.log('✅ User shilpak2k23@gmail.com created successfully');
  } else {
    console.log('ℹ️ User shilpak2k23@gmail.com already exists in database');
  }
}

main().catch(console.error).finally(() => prisma.$disconnect());
