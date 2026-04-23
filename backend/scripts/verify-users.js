const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.user.updateMany({
    data: {
      isVerified: true,
    },
  });
  console.log('✅ All users are now verified.');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
