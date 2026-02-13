/*
  Warnings:

  - Added the required column `categoryid` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "categoryid" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductInfo" (
    "id" SERIAL NOT NULL,
    "productid" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "likes" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductInfo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryid_fkey" FOREIGN KEY ("categoryid") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductInfo" ADD CONSTRAINT "ProductInfo_productid_fkey" FOREIGN KEY ("productid") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
