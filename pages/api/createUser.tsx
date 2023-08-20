import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req:any, res:any) {
    const {
        name,
        email,
        bairro,
        rua,
        password,
        cidade,
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
                cidade,
                uf
            },
        });

        res.json({ user: newUser, error: null });
    } catch (error) {
        res.json({ error: error.message, user: null });
    }
}