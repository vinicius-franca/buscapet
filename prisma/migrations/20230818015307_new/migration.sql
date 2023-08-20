/*
  Warnings:

  - Added the required column `passsowrd` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Cidades" DROP CONSTRAINT "Cidades_id_fkey";

-- AlterTable
ALTER TABLE "Animais" ADD COLUMN     "encontrado" BOOLEAN;

-- AlterTable
ALTER TABLE "Cidades" ADD COLUMN     "usersId" INTEGER;

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "passsowrd" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Mensagens" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "animaisId" INTEGER,

    CONSTRAINT "Mensagens_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Cidades" ADD CONSTRAINT "Cidades_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mensagens" ADD CONSTRAINT "Mensagens_id_fkey" FOREIGN KEY ("id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mensagens" ADD CONSTRAINT "Mensagens_animaisId_fkey" FOREIGN KEY ("animaisId") REFERENCES "Animais"("id") ON DELETE SET NULL ON UPDATE CASCADE;
