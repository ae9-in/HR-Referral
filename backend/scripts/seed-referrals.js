const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.findUnique({ where: { email: 'admin@refentra.com' } });
  const employee = await prisma.user.findUnique({ where: { email: 'employee@refentra.com' } });
  
  if (!admin || !employee) {
    console.error('Users not found, please ensure they exist');
    return;
  }

  const positions = await prisma.position.findMany();
  if (positions.length === 0) {
    console.error('No positions found');
    return;
  }

  const pos1 = positions[0].id;
  const pos2 = positions[positions.length - 1].id;

  await prisma.referral.createMany({
    data: [
      {
        candidateName: 'Alice Johnson',
        candidateEmail: 'alice.johnson@example.com',
        candidatePhone: '555-0100',
        positionId: pos1,
        referredById: employee.id,
        status: 'NEW',
        notes: 'Great software engineer with 5 years experience.',
      },
      {
        candidateName: 'Bob Smith',
        candidateEmail: 'bob.smith@example.com',
        candidatePhone: '555-0101',
        positionId: pos2,
        referredById: employee.id,
        status: 'CONTACTED',
        notes: 'Good product management skills.',
      },
      {
        candidateName: 'Charlie Davis',
        candidateEmail: 'charlie.d@example.com',
        candidatePhone: '555-0102',
        positionId: pos1,
        referredById: admin.id,
        status: 'SELECTED',
        notes: 'Excellent coding test results.',
      },
      {
        candidateName: 'Diana Prince',
        candidateEmail: 'diana.p@example.com',
        candidatePhone: '555-0103',
        positionId: pos2,
        referredById: employee.id,
        status: 'REJECTED',
        notes: 'Not a good fit for this specific team.',
      },
      {
        candidateName: 'Evan Wright',
        candidateEmail: 'evan.w@example.com',
        candidatePhone: '555-0104',
        positionId: pos1,
        referredById: employee.id,
        status: 'NEW',
        notes: 'Recent grad, very enthusiastic.',
      }
    ]
  });

  console.log('✅ Dummy referrals added.');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
