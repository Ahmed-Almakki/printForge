/*
  Warnings:

  - You are about to drop the `_ProductInfoTags` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ProductInfoTags" DROP CONSTRAINT "_ProductInfoTags_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductInfoTags" DROP CONSTRAINT "_ProductInfoTags_B_fkey";

-- DropTable
DROP TABLE "_ProductInfoTags";

-- CreateTable
CREATE TABLE "_ProductInfoToTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ProductInfoToTag_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ProductInfoToTag_B_index" ON "_ProductInfoToTag"("B");

-- AddForeignKey
ALTER TABLE "_ProductInfoToTag" ADD CONSTRAINT "_ProductInfoToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "ProductInfo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductInfoToTag" ADD CONSTRAINT "_ProductInfoToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
