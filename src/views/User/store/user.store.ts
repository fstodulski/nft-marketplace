import { writable } from 'svelte/store';

interface UserStore {
  id: string;
  address: string;
  name: string;
  imageURL: string;
}
const INITIAL_STATE: UserStore | undefined = undefined;

export const UserStore = writable<UserStore>(INITIAL_STATE);
