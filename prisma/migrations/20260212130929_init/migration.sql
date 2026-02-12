/*
  Warnings:

  - You are about to drop the column `UpdatedAt` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `UpdatedAt` on the `Users` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Account" DROP COLUMN "UpdatedAt",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "UpdatedAt",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
