import axios from 'axios';
import type { User } from '@prisma/client';

export class UserRepository {
  public static async login(address: string): Promise<void> {
    try {
      const req = await axios.post('/api/user/add', {
        address
      });
    } catch (e) {
      console.error(e);
    }
  }

  public static async topSellers(): Promise<Array<User>> {
    try {
      const req = await axios.get('/api/user/top-sellers');

      return req.data;
    } catch (e) {
      console.error(e);

      return [];
    }
  }
}
