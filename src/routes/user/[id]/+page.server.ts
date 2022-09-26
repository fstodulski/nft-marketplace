import type { Load } from '@sveltejs/kit';
import axios from 'axios';

export const load: Load = async ({ params }) => {
  const res = await axios.get(`http://127.0.0.1:5173/api/user/single`, {
    params: {
      address: params.id
    }
  });

  console.log(res.data);

  return res.data;
};
