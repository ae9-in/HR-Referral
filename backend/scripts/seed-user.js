const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash('user123', 10);
  
  await prisma.user.create({
    data: {
      email: 'employee@refentra.com',
      name: 'Standard Employee',
      phone: '4445556666',
      employeeId: 'EMP-999',
      passwordHash,
      role: 'EMPLOYEE',
    },
  });

  console.log('✅ Standard user created.');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
