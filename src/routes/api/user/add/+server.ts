import type { RequestEvent, RequestHandler } from '@sveltejs/kit';
import { prisma } from '$core/api/prisma-client';

export const POST: RequestHandler = async ({ request }: RequestEvent) => {
  const body = await request.json();

  const user = await prisma.user.findUnique({
    where: {
      address: body.address
    }
  });
  if (!user) {
    const res = await prisma.user.create({
      data: {
        address: body.address,
        imageUrl: '',
        name: 'John Snow'
      }
    });

    console.log(res);
  }

  return new Response(
    JSON.stringify({
      data: {
        success: true
      }
    })
  );
};
