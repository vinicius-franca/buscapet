const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function listAnimals() {
  try {
    const animals = await prisma.animal.findMany();
    return animals;
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

async function getCityName(cidadeId) {
  try {
    const cidade = await prisma.cidade.findOne({
      where: {
        id: cidadeId,
      },
    });

    return cidade ? cidade.name : '';
  } catch (error) {
    throw error;
  }
}

module.exports = {
  listAnimals,
  getCityName,
};