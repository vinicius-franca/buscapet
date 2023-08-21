import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req:any, res:any) {
    const {
        name,
        email,
        bairro,
        rua,
        password,
        cidadeId,
        uf
     } = req.body;

    try {
        const newUser = await prisma.users.create({
            data: {
                name,
                email,
                bairro,
                rua,
                password,
                cidadeId,
                uf
            },
        });

        res.status(201).json({ user: newUser, error: null });
    } catch (error: any) {
        res.status(500).json({ error: error.message, user: null });
    }
}