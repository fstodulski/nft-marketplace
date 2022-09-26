import { writable } from 'svelte/store';
import type { NFTItem } from '$core/models/nft-item.models';

interface UserItemsStore {
  ownedNfts: NFTItem[];
}

const INITIAL_STATE: UserItemsStore = {
  ownedNfts: []
};

export const UserItemsStore = writable<UserItemsStore>(INITIAL_STATE);
