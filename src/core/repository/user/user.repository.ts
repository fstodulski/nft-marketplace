import type { User } from '@prisma/client';
import { httpClient } from '../../http/http-client';

export class UserRepository {
  public static async login(address: string): Promise<void> {
    try {
      const req = await httpClient.post('/user/add', {
        address
      });
    } catch (e) {
      console.error(e);
    }
  }

  public static async topSellers(): Promise<Array<User>> {
    try {
      const req = await httpClient.get('/user/top-sellers');

      return req.data;
    } catch (e) {
      console.error(e);

      return [];
    }
  }
}
