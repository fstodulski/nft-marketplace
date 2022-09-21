import { MarketplaceService } from '$core/web3/marketplace.service';
import { NftRepository } from '$core/repository/nft/nft.repository';
import { HotBidsStore } from './store/HotBids.store';

const getHotBids = async (): Promise<void> => {
  try {
    const res = await MarketplaceService.fetchMarketItems();

    const items = res.map(async (item) => {
      return await NftRepository.single(item.nftContract, item.itemId.toString());
    });

    const hotBids = await Promise.all([...items]);

    HotBidsStore.set({
      hotBids
    });
  } catch (e) {
    throw new Error(`Can't Fetch HotBids`);
  }
};

export const HotBidsService = {
  getHotBids
};
