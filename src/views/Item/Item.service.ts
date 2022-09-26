import { NftRepository } from '$core/repository/nft/nft.repository';
import { MarketplaceService } from '$core/web3/marketplace.service';
import { ItemStore } from './store/item.store';

class ItemService {
  public async fetchItem(contract: string, tokenId: number): Promise<void> {
    try {
      const res = await NftRepository.single(contract, tokenId);
      const marketItem = await MarketplaceService.getMarketItem(tokenId);

      ItemStore.set({ ...res, ...marketItem });
    } catch (e) {
      console.error(e);
    }
  }

  public async buyItem(contract: string, tokenId: number, price: string): Promise<void> {
    try {
      const res = await MarketplaceService.createMarketSale(contract, tokenId, price);

      console.log(res);
    } catch (e) {
      throw new Error(`Can't buy Item`);
    }
  }
}

export const itemService = new ItemService();
