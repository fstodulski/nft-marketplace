import type { RequestEvent, RequestHandler } from '@sveltejs/kit';
import { prisma } from '$core/api/prisma-client';

export const POST: RequestHandler = async ({ request }: RequestEvent) => {
  const body = await request.json();

  console.log(body);

  const marketItem = await prisma.marketItem.create({
    data: {
      itemId: body.itemId,
      nftContract: body.nftContract,
      seller: body.seller,
      owner: body.owner,
      price: body.price
    }
  });

  return new Response(JSON.stringify({ data: marketItem }));
};
