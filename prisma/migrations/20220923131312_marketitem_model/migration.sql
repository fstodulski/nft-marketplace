-- CreateTable
CREATE TABLE "MarketItem" (
    "id" TEXT NOT NULL,
    "itemId" INTEGER NOT NULL,
    "nftContract" TEXT NOT NULL,
    "seller" TEXT NOT NULL,
    "owner" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "MarketItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MarketItem_itemId_key" ON "MarketItem"("itemId");

-- CreateIndex
CREATE UNIQUE INDEX "MarketItem_seller_key" ON "MarketItem"("seller");

-- CreateIndex
CREATE UNIQUE INDEX "MarketItem_owner_key" ON "MarketItem"("owner");
