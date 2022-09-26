import type { NFTItem } from './nft-item.models';
import type { MarketItemParsed } from './marketplace.models';

export type ItemModel = Partial<NFTItem> & Partial<MarketItemParsed>;
