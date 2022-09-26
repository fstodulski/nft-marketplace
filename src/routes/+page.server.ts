import type { Load } from '@sveltejs/kit';
import { UserRepository } from '$core/repository/user/user.repository';
import { error } from '@sveltejs/kit';

export const load: Load = async () => {
  const res = await UserRepository.topSellers();

  if (res.length > 0) {
    return {
      topSellers: res
    };
  }

  return error(500, 'Cant fetch top sellers');
};
