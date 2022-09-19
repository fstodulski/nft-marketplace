import { parseEther } from 'ethers/lib/utils';
import { GetContract } from './contract';

const getMarketItem = async (tokenId: number) => {
  try {
    const _contract = await GetContract();
    const req = await _contract.getMarketItem(tokenId);
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

    console.log(req);
  } catch (e) {
    console.error(e);
  }
};

const fetchMarketItems = async () => {
  try {
    const _contract = await GetContract();

    const req = await _contract.fetchMarketItems();

    console.log(req);
  } catch (e) {
    console.error(e);
  }
};

export const Marketplace = {
  getMarketItem,
  fetchMarketItems,
  createMarketItem
};
