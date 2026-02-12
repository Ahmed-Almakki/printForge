/*
  Warnings:

  - You are about to drop the column `pdatedAt` on the `Users` table. All the data in the column will be lost.
  - Added the required column `UpdatedAt` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Users" DROP COLUMN "pdatedAt",
ADD COLUMN     "UpdatedAt" TIMESTAMP(3) NOT NULL;
