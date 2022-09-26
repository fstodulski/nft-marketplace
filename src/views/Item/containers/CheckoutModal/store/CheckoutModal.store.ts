import { writable } from 'svelte/store';
import type { ItemModel } from '$core/models/item.model';

export interface CheckoutModalStore {
  isOpen?: boolean;
  item?: ItemModel;
}

export const INITIAL_STATE: CheckoutModalStore = {
  isOpen: false
};

export const CheckoutModalStore = writable<CheckoutModalStore>(INITIAL_STATE);
