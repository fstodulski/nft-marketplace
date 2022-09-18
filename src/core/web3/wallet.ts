import { ethers } from 'ethers';

const provider = () => {
  if (typeof window !== 'undefined') {
    return new ethers.providers.Web3Provider(window.ethereum);
  }
};

export const Wallet = {
  provider
};
