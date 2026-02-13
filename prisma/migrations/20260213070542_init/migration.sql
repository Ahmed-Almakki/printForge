/*
  Warnings:

  - Added the required column `shortDescription` to the `ProductInfo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProductInfo" ADD COLUMN     "shortDescription" VARCHAR(200) NOT NULL;
