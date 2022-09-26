import type { MarketItemParsed, MarketItemsRaw } from '../models/marketplace.models';
import { BigNumber } from 'ethers';
import { formatEther } from 'ethers/lib/utils';

export const marketItemParser = (data: MarketItemsRaw): MarketItemParsed => ({
  owner: data.owner,
  nftContract: data.nftContract,
  seller: data.seller.toLowerCase(),
  itemId: BigNumber.from(data.itemId._hex).toNumber(),
  price: formatEther(data.price._hex)
});
