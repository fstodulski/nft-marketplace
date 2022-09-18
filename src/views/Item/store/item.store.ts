import { writable } from 'svelte/store';
import type { GetNFTResponse } from '$core/models/get-nft.model';

type ItemStore = GetNFTResponse;

const INITIAL_STATE: ItemStore | undefined = undefined;
export const ItemStore = writable<ItemStore>(INITIAL_STATE);
