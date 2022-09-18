import type { OwnedNft } from './get-nfts.model';

export interface GetNFTResponse extends OwnedNft {
  balance?: string;
  error?: string;
}

export interface ID {
  tokenMetadata?: TokenMetadata;
}

export interface TokenMetadata {
  tokenType?: string;
}

export interface Media {
  raw?: string;
  gateway?: string;
  thumbnail?: string;
  format?: string;
  bytes?: number;
}

export interface Metadata {
  image?: string;
  externalURL?: string;
  backgroundColor?: string;
  name?: string;
  description?: string;
  attributes?: Attribute[];
}

export interface Attribute {
  value?: string;
  traitType?: string;
}

export interface TokenURI {
  raw?: string;
  gateway?: string;
}
