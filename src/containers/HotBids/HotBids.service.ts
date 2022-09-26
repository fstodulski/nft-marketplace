import { MarketplaceService } from '$core/web3/marketplace.service';
import { HotBidsStore } from './store/HotBids.store';

const getHotBids = async (): Promise<void> => {
  try {
    const hotBids = await MarketplaceService.fetchMarketItems();

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
