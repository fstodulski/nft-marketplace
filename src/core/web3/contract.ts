import { ethers } from 'ethers';
import { CONTRACT } from '../constants/contract';
import { Wallet } from './wallet';

export const GetContract = async () => {
  return new ethers.Contract(CONTRACT.address, CONTRACT.abi, await Wallet.provider()?.getSigner());
};
