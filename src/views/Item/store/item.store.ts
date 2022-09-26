import { writable } from 'svelte/store';
import type { NFTItem } from '$core/models/nft-iitem.models';
import type { MarketItemParsed } from '$core/models/marketplace.models';

type ItemStore = NFTItem &
  MarketItemParsed & {
    userImageUrl?: string;
  };
const INITIAL_STATE: ItemStore | undefined = undefined;
export const ItemStore = writable<ItemStore>(INITIAL_STATE);
