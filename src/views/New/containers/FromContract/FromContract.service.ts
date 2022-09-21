import { WalletService } from '$core/web3/wallet.service';
import { MarketplaceService } from '$core/web3/marketplace.service';

const allowMarketPlace = async (nftContract: string, tokenId: number): Promise<any> => {
  try {
    return await WalletService.approveContract(nftContract, tokenId);
  } catch (e) {
    throw new Error('Cant allow Marketplace');
  }
};

const isMarketplaceApproved = async (nftContract: string, tokenId: number): Promise<string> => {
  try {
    return await WalletService.isMarketplaceApproved(nftContract, tokenId);
  } catch (e) {
    throw new Error(`Can't check if Marketplace is allowed`);
  }
};

const createMarketItem = async (
  nftContract: string,
  tokenId: number,
  price: string
): Promise<any> => {
  try {
    const req = await MarketplaceService.createMarketItem(nftContract, tokenId, price);
  } catch (e) {
    console.error(e);
  }
};

export const FromContractService = {
  allowMarketPlace,
  isMarketplaceApproved,
  createMarketItem
};
