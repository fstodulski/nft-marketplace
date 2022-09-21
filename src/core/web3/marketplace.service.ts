import { formatEther, parseEther } from 'ethers/lib/utils';
import { GetContractViaInfura, GetContractViaMetamask } from './contract';
import type { FetchMarketItemParsed, FetchMarketItemsRaw } from '$core/models/marketplace.models';
import { BigNumber } from 'ethers';
import { ConfettiWrapperStore } from '$components/ConfettiWrapper/ConfettiWrapper.store';

export class MarketplaceService {
  public static async getMarketItem(tokenId: number): Promise<unknown> {
    try {
      const _contract = await GetContractViaMetamask();

      return await _contract.getMarketItem(tokenId);
    } catch (e) {
      console.error(e);
    }
  }

  public static async createMarketItem(
    nftContract: string,
    tokenId: number,
    price: string
  ): Promise<void> {
    try {
      const _contract = await GetContractViaMetamask();

      const req = await _contract.createMarketItem(nftContract, tokenId, parseEther(price), {
        value: parseEther('0.1')
      });
    } catch (e) {
      console.error(e);
    }
  }

  public static async fetchMarketItems(): Promise<Array<FetchMarketItemParsed>> {
    try {
      const _contract = await GetContractViaInfura();
      const res = (await _contract.fetchMarketItems()) as Array<FetchMarketItemsRaw>;

      return res.map(
        (marketItem): FetchMarketItemParsed => ({
          owner: marketItem.owner,
          nftContract: marketItem.nftContract,
          seller: marketItem.seller,
          itemId: BigNumber.from(marketItem.itemId._hex).toNumber(),
          price: formatEther(marketItem.price._hex)
        })
      );
    } catch (e) {
      console.error(e);
      throw new Error(`Can't fetch Market Items`);
    }
  }

  public static async subscribeOnMarketItemCreated(): Promise<unknown> {
    const _contract = await GetContractViaMetamask();
    return _contract.on(
      'MarketItemCreated',
      (itemId, nftContract, tokenId, msgSender, marketContract, price) => {
        ConfettiWrapperStore.set({
          isOpen: true
        });

        return {
          itemId,
          nftContract,
          tokenId,
          msgSender,
          price
        };
      }
    );
  }
}
