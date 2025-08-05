import Link from 'next/link';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative aspect-square overflow-hidden">
        {/* Product Image */}
        <Link href={`/products/${product.id}/`}>
          <div className="relative w-full h-full bg-gray-100">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-40 bg-gradient-to-b from-amber-100 to-amber-200 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-xs text-gray-600 font-medium">{product.brand}</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col space-y-1">
          {!product.inStock && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">Out of Stock</span>
          )}
          {discountPercentage > 0 && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">-{discountPercentage}%</span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
            <Heart className="w-4 h-4 text-gray-600" />
          </button>
          {product.inStock && (
            <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
              <ShoppingBag className="w-4 h-4 text-gray-600" />
            </button>
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="mb-2">
          <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
          <Link href={`/products/${product.id}/`}>
            <h3 className="font-semibold text-gray-800 hover:text-gold transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-2">
            {product.rating} ({product.reviewCount})
          </span>
        </div>

        {/* Size */}
        <p className="text-sm text-gray-500 mb-2">{product.size}</p>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-800">
              {product.price.toLocaleString()} EGP
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {product.originalPrice.toLocaleString()} EGP
              </span>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          className={`w-full mt-3 py-2 px-4 rounded-md font-medium transition-colors ${
            product.inStock
              ? 'bg-black text-white hover:bg-gray-800'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
          disabled={!product.inStock}
        >
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
}