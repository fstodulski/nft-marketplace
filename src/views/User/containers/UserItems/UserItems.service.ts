import { UserItemsStore } from './store/user-items.store';
import { NftRepository } from '$core/repository/nft/nft.repository';
import { ModalEnum, ModalStore } from '$components/Modal/modal.store';

const fetchOwnedNFTs = async (owner: string): Promise<void> => {
  try {
    const res = await NftRepository.byOwner(owner);

    UserItemsStore.set({
      ownedNfts: res
    });
  } catch (e) {
    ModalStore.update((store) => ({
      ...store,
      [ModalEnum.WalletNotConnected]: {
        isOpen: true
      }
    }));
    console.error(e);
  }
};

export const UserItemsService = {
  fetchOwnedNFTs
};
