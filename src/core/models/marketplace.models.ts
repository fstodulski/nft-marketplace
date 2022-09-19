import type { BigNumber } from 'ethers';

interface FetchMarketItem {
  nftContract: string;
  owner: string;
  seller: string;
}

export interface FetchMarketItemsRaw extends FetchMarketItem {
  itemId: {
    _hex: BigNumber;
  };
  price: {
    _hex: BigNumber;
  };
}

export interface FetchMarketItemParsed extends FetchMarketItem {
  itemId: number;
  price: string;
}
