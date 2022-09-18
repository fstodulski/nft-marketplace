import type { OwnedNft } from '$core/models/get-nfts.model';
import { writable } from 'svelte/store';

interface UserItemsStore {
  ownedNfts: OwnedNft[];
}

const INITIAL_STATE: UserItemsStore = {
  ownedNfts: []
};

export const UserItemsStore = writable<UserItemsStore>(INITIAL_STATE);
