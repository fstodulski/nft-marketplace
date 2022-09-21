import { writable } from 'svelte/store';

interface Modal {
  isOpen?: boolean;
  title?: string;
}

export enum ModalEnum {
  WalletNotConnected = 'WalletNotConnected',
  WrongNetwork = 'WrongNetwork'
}

export type ModalStore = Partial<Record<keyof typeof ModalEnum, Modal>>;

const INITIAL_STATE: ModalStore = {
  [ModalEnum.WrongNetwork]: {},
  [ModalEnum.WalletNotConnected]: {}
};
export const ModalStore = writable<ModalStore>(INITIAL_STATE);
