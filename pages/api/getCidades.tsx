import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const cidades = await prisma.cidade.findMany();
    res.status(200).json(cidades);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar dados no banco de dados.' });
  } finally {
    await prisma.$disconnect();
  }
}