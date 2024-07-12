import React from 'react';
import { Product } from '../types';


interface ProductCardProps {
  product: Product;
  isFavorite: boolean;
  onToggleFavorite: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isFavorite,
  onToggleFavorite,
}) => {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={product.images[0].src} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text">${product.price}</p>
          <button
            onClick={() => onToggleFavorite(product)}
            className={`btn ${
              isFavorite ? 'btn-danger' : 'btn-outline-secondary'
            }`}
          >
            {isFavorite ? 'Unfavorite' : 'Favorite'}
          </button>
        </div>
      </div>any
    </div>
  );
};

export default ProductCard;
