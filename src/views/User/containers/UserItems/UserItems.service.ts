import { UserItemsStore } from './store/user-items.store';
import { NftRepository } from '$core/repository/nft/nft.repository';
import { ModalEnum, ModalStore } from '$components/Modal/modal.store';
import { BigNumber } from 'ethers';

const fetchOwnedNFTs = async (owner: string): Promise<void> => {
  try {
    const res = await NftRepository.byOwner(owner);

    const filteredItems = res.filter((item) => item.description && item.title && !item.error);

    const parsedItems = filteredItems.map(async (item) => {
      const data = await NftRepository.single(
        item.contract.address,
        BigNumber.from(item.id.tokenId).toNumber()
      );

      return {
        ...item,
        ...data
      };
    });

    const ownedNfts = await Promise.all([...parsedItems]);
    UserItemsStore.set({
      ownedNfts
    });
  } catch (e) {
    ModalStore.update((store) => ({
      ...store,
      [ModalEnum.WalletNotConnected]: {
        isOpen: true
      }
    }));
  }
};

export const UserItemsService = {
  fetchOwnedNFTs
};
