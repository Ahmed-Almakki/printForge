/*
  Warnings:

  - You are about to drop the `_ProductInfoToTag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ProductInfoToTag" DROP CONSTRAINT "_ProductInfoToTag_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductInfoToTag" DROP CONSTRAINT "_ProductInfoToTag_B_fkey";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "video_url" VARCHAR(200);

-- DropTable
DROP TABLE "_ProductInfoToTag";

-- CreateTable
CREATE TABLE "ProductMedia" (
    "id" SERIAL NOT NULL,
    "productid" INTEGER NOT NULL,
    "image_url" TEXT NOT NULL,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductMedia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProductInfoTags" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ProductInfoTags_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ProductInfoTags_B_index" ON "_ProductInfoTags"("B");

-- AddForeignKey
ALTER TABLE "ProductMedia" ADD CONSTRAINT "ProductMedia_productid_fkey" FOREIGN KEY ("productid") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductInfoTags" ADD CONSTRAINT "_ProductInfoTags_A_fkey" FOREIGN KEY ("A") REFERENCES "ProductInfo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductInfoTags" ADD CONSTRAINT "_ProductInfoTags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
