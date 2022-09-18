import { ethers } from 'ethers';
import { WalletStore } from '../store/wallet';

const provider = () => {
  if (typeof window !== 'undefined') {
    return new ethers.providers.Web3Provider(window.ethereum);
  }
};

const connectWallet = async () => {
  const [account] = await provider()?.send('eth_requestAccounts', []);

  WalletStore.set({
    address: account
  });
};

export const Wallet = {
  provider,
  connectWallet
};
