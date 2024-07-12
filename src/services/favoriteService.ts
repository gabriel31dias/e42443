
import api from '../Api';
import { Product } from '../types';

export const fetchFavorites = async (): Promise<Product[]> => {
  const { data } = await api.get('/favorites');
  return data;
};

export const addFavorite = async (product: Product): Promise<boolean> => {
  try {
    const response = await api.post('/favorites', {
      product_id: product.id,
    });
    return response.status === 200;
  } catch (error) {
    console.error('Error adding favorite:', error);
    return false;
  }
};

export const removeFavorite = async (productId: number): Promise<boolean> => {
  try {
    const response = await api.delete('/favorites', {
      data: {
        product_id: productId,
      },
    });
    return response.status === 200;
  } catch (error) {
    console.error('Error removing favorite:', error);
    return false;
  }
};
