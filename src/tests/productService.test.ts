import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import env from '../environments';
import { fetchProducts } from '../services/productService';

const mock = new MockAdapter(axios);
const baseUrl = env.baseURLApi;

describe('productService', () => {
  afterEach(() => {
    mock.reset();
  });

  it('fetchProducts should return products data with "Boné preto" title', async () => {
    const productsFromApi = [
      {
        id: 4543367512203,
        title: 'Boné preto',
        body_html: 'Boné preto',
        vendor: 'Send4 Avaliação',
        product_type: '',
        created_at: '2020-02-12T15:38:20-05:00',
        handle: 'bone-preto',
        updated_at: '2022-05-11T09:00:08-04:00',
        published_at: '2020-02-12T15:36:12-05:00',
        template_suffix: '',
        published_scope: 'web',
        tags: '',
        status: 'active',
        admin_graphql_api_id: 'gid://shopify/Product/4543367512203',
        variants: [
          {
            id: 32280781881483,
            product_id: 4543367512203,
            title: 'Default Title',
            price: '40.00',
            sku: 'bonepreto',
            position: 1,
            inventory_policy: 'deny',
            compare_at_price: null,
            fulfillment_service: 'manual',
            inventory_management: null,
            option1: 'Default Title',
            option2: null,
            option3: null,
            created_at: '2020-02-12T15:38:20-05:00',
            updated_at: '2023-10-27T18:26:15-04:00',
            taxable: false,
            barcode: '',
            grams: 0,
            weight: 0,
            weight_unit: 'kg',
            inventory_item_id: 33948418474123,
            inventory_quantity: -8,
            old_inventory_quantity: -8,
            requires_shipping: true,
            admin_graphql_api_id: 'gid://shopify/ProductVariant/32280781881483',
            image_id: null
          }
        ],
        options: [
          {
            id: 5906019844235,
            product_id: 4543367512203,
            name: 'Title',
            position: 1,
            values: ['Default Title']
          }
        ],
        images: [
          {
            id: 14254560444555,
            alt: null,
            position: 1,
            product_id: 4543367512203,
            created_at: '2020-02-12T15:38:20-05:00',
            updated_at: '2020-02-12T15:38:20-05:00',
            admin_graphql_api_id: 'gid://shopify/ProductImage/14254560444555',
            width: 383,
            height: 384,
            src: 'https://cdn.shopify.com/s/files/1/0332/3176/5643/products/Screen_Shot_2020-02-12_at_17.34.55.png?v=1581539900',
            variant_ids: []
          }
        ],
        image: {
          id: 14254560444555,
          alt: null,
          position: 1,
          product_id: 4543367512203,
          created_at: '2020-02-12T15:38:20-05:00',
          updated_at: '2020-02-12T15:38:20-05:00',
          admin_graphql_api_id: 'gid://shopify/ProductImage/14254560444555',
          width: 383,
          height: 384,
          src: 'https://cdn.shopify.com/s/files/1/0332/3176/5643/products/Screen_Shot_2020-02-12_at_17.34.55.png?v=1581539900',
          variant_ids: []
        }
      }
    ];

    mock.onGet(`${baseUrl}/products`).reply(200, { products: productsFromApi });

    const result = await fetchProducts();
    const productTitles = result.map(product => product.title);
    expect(productTitles).toContain('Boné preto');
  });
});
