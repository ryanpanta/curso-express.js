/*
  Warnings:

  - You are about to alter the column `progresso` on the `Matricula` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `Matricula` MODIFY `progresso` DOUBLE NOT NULL;
