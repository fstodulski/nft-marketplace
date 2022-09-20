import { Contract, ethers } from 'ethers';
import { WalletStore } from '../store/wallet';
import { CONTRACT } from '../constants/contract';

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

const approveContract = async (nftContractAddress: string, tokenId: number) => {
  const abi = ['function approve(address _approved, uint256 _tokenId) external payable'];
  const signer = await provider()?.getSigner();
  const contract = new Contract(nftContractAddress, abi, signer);

  try {
    const req = await contract.approve(CONTRACT.address, tokenId);
  } catch (e) {
    console.error(e);
  }
};

const isMarketplaceApproved = async (
  nftContractAddress: string,
  tokenId: number
): Promise<string> => {
  const abi = ['function getApproved(uint256 _tokenId) external view returns (address)'];

  const signer = await provider()?.getSigner();
  const contract = new Contract(nftContractAddress, abi, signer);

  try {
    return await contract.getApproved(tokenId);
  } catch (e) {
    throw Error('Cant check if contract is allowed');
  }
};

export const Wallet = {
  provider,
  isMarketplaceApproved,
  approveContract,
  connectWallet
};
