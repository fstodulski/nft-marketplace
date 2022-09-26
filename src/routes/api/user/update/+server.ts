import type { RequestEvent, RequestHandler } from '@sveltejs/kit';
import { prisma } from '$core/api/prisma-client';
import { error } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request, url }: RequestEvent) => {
  const { data } = await request.json();

  const userWallet = url.searchParams.get('address');

  if (userWallet !== data.address) {
    return error(400, 'Not allowed');
  }

  const user = await prisma.user.update({
    where: {
      address: data.address
    },
    data: {
      name: data.name
    }
  });

  if (user) {
    return new Response(JSON.stringify(user));
  }

  return error(400, 'Bad Request');
};
