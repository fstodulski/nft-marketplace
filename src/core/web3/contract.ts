import { ethers } from 'ethers';
import { CONTRACT } from '../constants/contract';
import { WalletService } from './wallet';

export const GetContractViaMetamask = async () => {
  return new ethers.Contract(
    CONTRACT.address,
    CONTRACT.abi,
    await WalletService.metamaskProvider()?.getSigner()
  );
};

export const GetContractViaInfura = async () => {
  return new ethers.Contract(CONTRACT.address, CONTRACT.abi, await WalletService?.infuraProvider());
};
