import type { RequestHandler } from '@sveltejs/kit';
import { MarketplaceService } from '$core/web3/marketplace.service';

export const GET: RequestHandler = async () => {
  const items = await MarketplaceService.fetchMarketItems();

  console.log(items);

  return new Response(JSON.stringify({ data: 'dupa' }));
};
