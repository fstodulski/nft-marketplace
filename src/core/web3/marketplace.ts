import { formatEther, parseEther } from 'ethers/lib/utils';
import { GetContract } from './contract';
import type { FetchMarketItemParsed, FetchMarketItemsRaw } from '$core/models/marketplace.models';
import { BigNumber } from 'ethers';

const getMarketItem = async (tokenId: number) => {
  try {
    const _contract = await GetContract();
    return await _contract.getMarketItem(tokenId);
  } catch (e) {
    console.error(e);
  }
};

const createMarketItem = async (
  nftContract: string,
  tokenId: number,
  price: string
): Promise<void> => {
  try {
    const _contract = await GetContract();
    const req = await _contract.createMarketItem(nftContract, tokenId, parseEther(price), {
      value: parseEther('0.1')
    });
  } catch (e) {
    console.error(e);
  }
};

const fetchMarketItems = async (): Promise<Array<FetchMarketItemParsed>> => {
  try {
    const _contract = await GetContract();
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
};

export const Marketplace = {
  getMarketItem,
  fetchMarketItems,
  createMarketItem
};
