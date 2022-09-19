import type { Contract } from './contract.model';

export interface GetNftsResponse {
  ownedNfts?: NFTMetadata[];
  totalCount?: number;
  blockHash?: string;
}

export interface NFTMetadata {
  contract?: Contract;
  id?: ID;
  title?: string;
  description?: string;
  tokenURI?: TokenURI;
  media?: TokenURI[];
  metadata?: Metadata;
  timeLastUpdated?: Date;
  contractMetadata?: ContractMetadata;
}

export interface ContractMetadata {
  name?: string;
  symbol?: string;
  totalSupply?: string;
  tokenType?: string;
}

export interface ID {
  tokenID?: string;
  tokenMetadata?: TokenMetadata;
}

export interface TokenMetadata {
  tokenType?: string;
}

export interface TokenURI {
  raw?: string;
  gateway?: string;
}

export interface Metadata {
  name?: string;
  description?: string;
  id?: string;
  image?: string;
  externalURL?: string;
  attributes?: Attribute[];
}

export interface Attribute {
  value?: string;
  traitType?: string;
}
