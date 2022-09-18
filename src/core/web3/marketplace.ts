import { ethers } from 'ethers';
import { CONTRACT } from '../constants/contract';
import { Wallet } from './wallet';

const _contract = new ethers.Contract(CONTRACT.address, CONTRACT.abi, Wallet.provider());

const getMarketItem = async (tokenId: number) => {
  try {
    const req = await _contract.getMarketItem(tokenId);
  } catch (e) {
    console.error(e);
  }
};

export const Marketplace = {
  getMarketItem
};
