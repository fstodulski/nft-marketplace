import type { NFTMetadata } from '$core/models/get-nfts.model';
import { writable } from 'svelte/store';

interface HotBidsStore {
  hotBids: NFTMetadata[];
}

const INITIAL_STATE: HotBidsStore = {
  hotBids: []
};
export const HotBidsStore = writable<HotBidsStore>(INITIAL_STATE);
