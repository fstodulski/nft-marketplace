import type { Contract, ContractMetadata } from './contract.model';

export interface NFTItemMetadata {
  animation_url: string;
  description: string;
  external_url: string;
  id: number;
  image: string;
  name: string;
}

interface NFTItemMedia {
  gateway: string;
  raw: string;
}

export interface NFTItem {
  contract: Contract;
  contractMetadata: ContractMetadata;
  description: string;
  error?: string;
  price?: string;
  id: {
    tokenId: string;
    tokenMetadata: {
      tokenType: string;
    };
  };
  media: Array<NFTItemMedia>;
  metadata: NFTItemMetadata;
  timeLastUpdated: string;
  title: string;
  tokenUri: NFTItemMedia;
}
