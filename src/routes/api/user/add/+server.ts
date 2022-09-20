import type { RequestEvent, RequestHandler } from '@sveltejs/kit';
import { prisma } from '$core/utils/prisma-client';

export const GET: RequestHandler = async ({ params }: RequestEvent) => {
  const res = await prisma.user.findMany();

  return new Response(
    JSON.stringify({
      data: res
    })
  );
};