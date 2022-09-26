import { alchemyClient } from '$core/http/http-client';
import type { NFTItem } from '$core/models/nft-item.models';

export class NftRepository {
  public static async byOwner(address: string): Promise<Array<NFTItem>> {
    try {
      const req = await alchemyClient.get<{ ownedNfts: Array<NFTItem> }>('/getNFTs', {
        params: {
          owner: address,
          pageSize: 24,
          filters: ['SPAM']
        }
      });

      return req.data.ownedNfts;
    } catch (e) {
      console.error(e);
      throw new Error(`Can't fetch nft by owner`);
    }
  }

  public static async single(contractAddress: string, tokenId: number): Promise<NFTItem> {
    try {
      const req = await alchemyClient.get<NFTItem>('/getNFTMetadata', {
        params: {
          contractAddress,
          tokenId
        }
      });

      return req.data;
    } catch (e) {
      throw new Error(`Can't get single NFT item`);
    }
  }
}
