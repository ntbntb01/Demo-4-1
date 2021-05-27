import axios from 'axios'
export const instance = axios.create({
  baseURL: 'https://api.thecoffeehouse.com/api/v2/menu',
  timeout: 60000, // 1min
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
});
export const getProduct = (params) => instance.get('/v2/menu', params)