const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash('admin123', 10);
  
  await prisma.user.create({
    data: {
      email: 'admin@refentra.com',
      name: 'HR Admin',
      phone: '9876543210',
      employeeId: 'EMP001',
      passwordHash,
      role: 'ADMIN',
    },
  });
  
  const positions = [
    { id: 'software-engineer', title: 'Software Engineer', department: 'Engineering' },
    { id: 'product-manager', title: 'Product Manager', department: 'Product' },
  ];
  
  for (const pos of positions) {
    await prisma.position.create({ data: pos });
  }

  console.log('✅ Admin and initial positions created.');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
