import type { RequestEvent, RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params }: RequestEvent) => {
  const { id } = params;

  return new Response(JSON.stringify({ data: ' dupa' }));
};
