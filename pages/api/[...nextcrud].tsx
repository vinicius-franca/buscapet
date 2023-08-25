import NextCrud, { PrismaAdapter } from '@premieroctet/next-crud'
import { Users, Animal, PrismaClient, ModelName } from "@prisma/client";

const prisma = new PrismaClient();

const handler = async (req: any, res: any) => {
  const nextCrudHandler = await NextCrud({
    adapter: new PrismaAdapter<Users | Animal, ModelName>({
      prismaClient: prisma,
    }),
  })
  return nextCrudHandler(req, res)
}
export default handler