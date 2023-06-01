/*
  Warnings:

  - Added the required column `bairro` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rua` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "bairro" TEXT NOT NULL,
ADD COLUMN     "rua" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Cidades" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Cidades_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Animais" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "ultimaLocalizacao" TEXT NOT NULL,

    CONSTRAINT "Animais_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cidades_name_key" ON "Cidades"("name");

-- AddForeignKey
ALTER TABLE "Cidades" ADD CONSTRAINT "Cidades_id_fkey" FOREIGN KEY ("id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Animais" ADD CONSTRAINT "Animais_id_fkey" FOREIGN KEY ("id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
