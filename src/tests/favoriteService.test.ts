import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Product } from '../types';
import { fetchFavorites, addFavorite, removeFavorite } from '../services/favoriteService';
import api from '../Api';

const mock = new MockAdapter(api);

describe('favoriteService', () => {
  afterEach(() => {
    mock.reset();
  });

  it('fetchFavorites should return favorite products', async () => {
    const favoritesFromApi: Product[] = [
      {
        id: 4543367512203,
        title: 'Boné preto',
        description: 'Boné preto',
        price: 40.00,
        image: 'https://cdn.shopify.com/s/files/1/0332/3176/5643/products/Screen_Shot_2020-02-12_at_17.34.55.png?v=1581539900',
        images: []
      }
    ];

    mock.onGet('/favorites').reply(200, favoritesFromApi);

    const result = await fetchFavorites();
    expect(result).toEqual(favoritesFromApi);
  });

  it('addFavorite should return true on success', async () => {
    const product: Product = {
      id: 4543367512203,
      title: 'Boné preto',
      description: 'Boné preto',
      price: 40.00,
      image: 'https://cdn.shopify.com/s/files/1/0332/3176/5643/products/Screen_Shot_2020-02-12_at_17.34.55.png?v=1581539900',
      images: []
    };

    mock.onPost('/favorites', { product_id: product.id }).reply(200);

    const result = await addFavorite(product);
    expect(result).toBe(true);
  });

  it('removeFavorite should return true on success', async () => {
    const productId = 4543367512203;

    mock.onDelete('/favorites', { data: { product_id: productId } }).reply(200);

    const result = await removeFavorite(productId);
    expect(result).toBe(true);
  });
});
