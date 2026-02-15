/*
  Warnings:

  - You are about to drop the `ProductMedia` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProductMedia" DROP CONSTRAINT "ProductMedia_productid_fkey";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "threeD_model" TEXT NOT NULL DEFAULT '';

-- DropTable
DROP TABLE "ProductMedia";
