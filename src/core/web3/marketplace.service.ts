import { parseEther } from 'ethers/lib/utils';
import { GetContractViaInfura, GetContractViaMetamask } from './contract';
import type { MarketItemParsed, MarketItemsRaw } from '$core/models/marketplace.models';
import type { Contract } from 'ethers';
import { ConfettiWrapperStore } from '$components/ConfettiWrapper/ConfettiWrapper.store';
import { NftRepository } from '../repository/nft/nft.repository';
import { marketItemParser } from '../utils/marketitem-parser';

export class MarketplaceService {
  public static async getMarketItem(tokenId: number): Promise<MarketItemParsed> {
    try {
      const _contract = await GetContractViaInfura();

      const item: MarketItemsRaw = await _contract.getMarketItem(tokenId);

      return marketItemParser(item);
    } catch (e) {
      throw new Error(`Can't fetch item`);
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

      const tx = req.wait();

      console.log(tx);
    } catch (e) {
      console.error(e);
    }
  }

  public static async fetchMarketItems(
    customContractProvider?: Contract
  ): Promise<Array<NFTMetadata>> {
    try {
      const _contract = customContractProvider || (await GetContractViaInfura());

      const res = (await _contract.fetchMarketItems()) as Array<FetchMarketItemsRaw>;

      const parsedMetadata = res.map(marketItemParser);

      const items = parsedMetadata.map(async (item) => {
        const data = await NftRepository.single(item.nftContract, item.itemId.toString());
        return {
          ...item,
          ...data
        };
      });

      return await Promise.all([...items]);
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

  public static async createMarketSale(
    nftContractAddress: string,
    tokenId: number,
    price: string
  ): Promise<void> {
    const _contract = await GetContractViaMetamask();

    console.log(nftContractAddress, tokenId, price);
    const res = await _contract.createMarketSale(nftContractAddress, tokenId, {
      value: parseEther(price)
    });
  }
}
