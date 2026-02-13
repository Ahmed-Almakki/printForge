-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "name_ar" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProductInfoToTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ProductInfoToTag_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_key" ON "Tag"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_ar_key" ON "Tag"("name_ar");

-- CreateIndex
CREATE INDEX "_ProductInfoToTag_B_index" ON "_ProductInfoToTag"("B");

-- AddForeignKey
ALTER TABLE "_ProductInfoToTag" ADD CONSTRAINT "_ProductInfoToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "ProductInfo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductInfoToTag" ADD CONSTRAINT "_ProductInfoToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
