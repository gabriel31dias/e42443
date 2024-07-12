import api from '../Api';
import { Product } from '../types';

export const fetchProducts = async (): Promise<Product[]> => {
  const { data } = await api.get('/products');
  return data.products;
};
