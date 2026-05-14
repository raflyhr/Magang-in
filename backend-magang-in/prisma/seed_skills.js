import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const commonSkills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Vue.js', 'Angular', 
    'Node.js', 'Express', 'Python', 'Django', 'Flask', 
    'SQL', 'PostgreSQL', 'MongoDB', 'PHP', 'Laravel', 
    'UI/UX Design', 'Figma', 'Problem Solving', 'Teamwork',
    'Flutter', 'Android Studio', 'Go', 'Docker', 'AWS'
  ];

  for (const name of commonSkills) {
    await prisma.skill.upsert({
      where: { name },
      update: {},
      create: { name }
    });
  }
  console.log('Seeding Master Skills finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
