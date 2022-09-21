import { writable } from 'svelte/store';

type ConfettiWrapperStore = {
  isOpen: boolean;
};

const INITIAL_STATE: ConfettiWrapperStore = {
  isOpen: false
};
export const ConfettiWrapperStore = writable<ConfettiWrapperStore>(INITIAL_STATE);
