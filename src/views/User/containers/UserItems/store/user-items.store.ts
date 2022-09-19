import type { NFTMetadata } from '$core/models/get-nfts.model';
import { writable } from 'svelte/store';

interface UserItemsStore {
  ownedNfts: NFTMetadata[];
}

const INITIAL_STATE: UserItemsStore = {
  ownedNfts: []
};

export const UserItemsStore = writable<UserItemsStore>(INITIAL_STATE);
