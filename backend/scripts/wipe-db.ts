import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  console.log('🗑️ Wiping database...');
  
  // Order matters due to foreign key constraints
  await prisma.statusLog.deleteMany({});
  await prisma.referral.deleteMany({});
  await prisma.otpVerification.deleteMany({});
  await prisma.user.deleteMany({});
  // Keeping Positions as they are reference data
  
  console.log('✅ Database wiped successfully.');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
