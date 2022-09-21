import { alchemyClient } from '$core/http/http-client';
import type { GetNftsResponse } from '$core/models/get-nfts.model';
import type { GetNFTResponse } from '$core/models/get-nft.model';

export class NftRepository {
  public static async byOwner(address: string): Promise<any> {
    try {
      const req = await alchemyClient.get<GetNftsResponse>('/getNFTs', {
        params: {
          owner: address,
          pageSize: 24,
          filters: ['SPAM']
        }
      });

      console.log(req);

      return req.data.ownedNfts;
    } catch (e) {
      console.error(e);
    }
  }

  public static async single(contractAddress: string, tokenId: string): Promise<any> {
    try {
      const req = await alchemyClient.get<GetNFTResponse>('/getNFTMetadata', {
        params: {
          contractAddress,
          tokenId
        }
      });

      return req.data;
    } catch (e) {
      console.error(e);
    }
  }
}
