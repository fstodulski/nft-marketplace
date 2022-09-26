import type { RequestEvent, RequestHandler } from '@sveltejs/kit';
import { prisma } from '$core/api/prisma-client';
import { error } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ url }: RequestEvent) => {
  const address = url.searchParams.get('address');

  if (!address) {
    throw error(404, 'Not found');
  }

  const user = await prisma.user.findUnique({
    where: {
      address
    }
  });

  if (user) {
    return new Response(JSON.stringify(user));
  }

  return new Response(JSON.stringify(undefined));
};
