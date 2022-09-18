import { writable } from 'svelte/store';

interface WalletStore {
  address: string | undefined;
}

const INITIAL_STATE: WalletStore = {
  address: undefined
};
export const WalletStore = writable<WalletStore>(INITIAL_STATE);
