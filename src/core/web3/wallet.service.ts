import { Contract, ethers } from 'ethers';
import { WalletStore } from '../store/wallet';
import { CONTRACT } from '../constants/contract';

export class WalletService {
  public static async metamaskProvider() {
    if (typeof window !== 'undefined') {
      return new ethers.providers.Web3Provider(window.ethereum);
    }
  }

  public static async infuraProvider() {
    if (typeof window !== 'undefined') {
      return new ethers.providers.InfuraProvider(
        import.meta.env.VITE_ETHEREUM_NETWORK,
        import.meta.env.VITE_INFURA_API_KEY
      );
    }
  }

  public static async connectWallet() {
    const provider = await WalletService.metamaskProvider();
    if (typeof provider !== 'undefined') {
      const [address] = await provider.send('eth_requestAccounts', []);

      WalletStore.set({
        address
      });

      return;
    }
    console.log('Cant connect wallet');
  }

  public static async approveContract(nftContractAddress: string, tokenId: number) {
    const abi = ['function approve(address _approved, uint256 _tokenId) external payable'];
    const signer = (await WalletService.metamaskProvider())?.getSigner();
    const contract = new Contract(nftContractAddress, abi, signer);

    try {
      const req = await contract.approve(CONTRACT.address, tokenId);
      console.log(req);
    } catch (e) {
      console.error(e);
    }
  }

  public static async isMarketplaceApproved(nftContractAddress: string, tokenId: number) {
    const abi = ['function getApproved(uint256 _tokenId) external view returns (address)'];

    const provider = await WalletService.metamaskProvider();
    const signer = await provider?.getSigner();
    const contract = new Contract(nftContractAddress, abi, signer);

    try {
      return await contract.getApproved(tokenId);
    } catch (e) {
      throw Error('Cant check if contract is allowed');
    }
  }
}
