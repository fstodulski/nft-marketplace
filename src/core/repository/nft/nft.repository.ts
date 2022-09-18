import { alchemyClient } from '$core/http/http-client';
import type { GetNftsResponse } from '$core/models/get-nfts.model';
import type { GetNFTResponse } from '$core/models/get-nft.model';

const byOwner = async (address: string): Promise<any> => {
  try {
    const req = await alchemyClient.get<GetNftsResponse>('/getNFTs', {
      params: {
        owner: address,
        pageSize: 24,
        filters: ['SPAM']
      }
    });

    return req.data.ownedNfts;
  } catch (e) {
    console.error(e);
  }
};

const single = async (contractAddress: string, tokenId: string): Promise<any> => {
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
};
export const NftRepository = {
  byOwner,
  single
};
