/*
  Warnings:

  - You are about to drop the column `userId` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Product` table. All the data in the column will be lost.
  - Added the required column `userid` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userid` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_userId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_userId_fkey";

-- AlterTable
ALTER TABLE "Account" DROP COLUMN "userId",
ADD COLUMN     "userid" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "userId",
ADD COLUMN     "userid" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userid_fkey" FOREIGN KEY ("userid") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_userid_fkey" FOREIGN KEY ("userid") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
