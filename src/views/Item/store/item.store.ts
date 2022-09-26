import { writable } from 'svelte/store';
import type { ItemModel } from '$core/models/item.model';
import type { HttpStoreModel } from '$core/models/http-store.model';

type ItemStore = ItemModel & {
  userImageUrl?: string;
} & HttpStoreModel;
const INITIAL_STATE: ItemStore | undefined = undefined;

export const ItemStore = writable<ItemStore>(INITIAL_STATE);
