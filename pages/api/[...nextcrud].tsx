import NextCrud, { PrismaAdapter } from '@premieroctet/next-crud'
import { Users, Animal, PrismaClient  } from "@prisma/client";

const prisma = new PrismaClient();

const handler = async (req: any, res: any) => {
  const nextCrudHandler = await NextCrud({
    adapter: new PrismaAdapter<Users | Animal, any>({
      prismaClient: prisma,
    }),
  })
  return nextCrudHandler(req, res)
}
export default handler