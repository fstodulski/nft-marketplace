import type { BigNumber } from 'ethers';

interface MarketItem {
  nftContract: string;
  owner: string;
  seller: string;
}

export interface MarketItemsRaw extends MarketItem {
  itemId: {
    _hex: BigNumber;
  };
  price: {
    _hex: BigNumber;
  };
}

export interface MarketItemParsed extends MarketItem {
  itemId: number;
  price: string;
}
