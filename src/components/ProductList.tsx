import React, { useState, useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import ProductCard from './ProductCard';
import { Product } from '../types';
import { fetchProducts } from '../services/productService';
import { fetchFavorites, addFavorite, removeFavorite } from '../services/favoriteService';

const ProductList = () => {
  const [favorites, setFavorites] = useState<Product[]>([]);
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery<Product[]>('products', fetchProducts);

  useEffect(() => {
    const loadFavorites = async () => {
      const favoriteProducts = await fetchFavorites();
      setFavorites(favoriteProducts);
    };
    loadFavorites();
  }, []);

  const toggleFavorite = async (product: Product) => {
    const isFavorited = favorites.some((fav) => fav.id === product.id);

    if (isFavorited) {
      const success = await removeFavorite(product.id);
      if (success) {
        setFavorites((prevFavorites) =>
          prevFavorites.filter((fav) => fav.id !== product.id)
        );
      }
    } else {
      const success = await addFavorite(product);
      if (success) {
        setFavorites((prevFavorites) => [...prevFavorites, product]);
      }
    }

    const updatedFavorites = await fetchFavorites();
    setFavorites(updatedFavorites);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div className="row">
      {data?.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isFavorite={favorites.some((fav) => fav.id === product.id)}
          onToggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
};

export default ProductList;
