import { ethers } from 'ethers';
import { CONTRACT } from '../constants/contract';
import { WalletService } from './wallet.service';

export const GetContractViaMetamask = async () => {
  const provider = await WalletService.metamaskProvider();

  if (provider) {
    return new ethers.Contract(CONTRACT.address, CONTRACT.abi, await provider.getSigner());
  }
};

export const GetContractViaInfura = async () => {
  return new ethers.Contract(CONTRACT.address, CONTRACT.abi, await WalletService?.infuraProvider());
};
