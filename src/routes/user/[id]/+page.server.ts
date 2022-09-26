import type { Load } from '@sveltejs/kit';
import { httpClient } from '$core/http/http-client';
import { error } from '@sveltejs/kit';

export const load: Load = async ({ params }) => {
  const res = await httpClient.get(`/user/single`, {
    params: {
      address: params.id
    }
  });

  if (res.data) {
    return {
      user: res.data
    };
  }
  return error(404, 'could not find');
};
