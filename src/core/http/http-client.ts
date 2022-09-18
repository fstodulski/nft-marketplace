import axios from 'axios';

export const alchemyClient = axios.create({
  method: 'GET',
  baseURL: 'https://eth-goerli.g.alchemy.com/v2/OXBqNI7klBtbwLOU7yAdpcfo07zEoNt8'
});
