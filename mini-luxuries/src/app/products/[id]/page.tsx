'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { getProductById, products } from '@/data/products';
import { Star, Heart, Share2, Minus, Plus, ShoppingBag, Shield, Truck, RotateCcw } from 'lucide-react';
import Link from 'next/link';

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = getProductById(productId);
  
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isInWishlist, setIsInWishlist] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you&apos;re looking for doesn&apos;t exist.</p>
          <Link 
            href="/products"
            className="inline-flex items-center px-6 py-3 gradient-gold text-white rounded-lg hover:shadow-md transition-all"
          >
            Browse All Products
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id && (p.brand === product.brand || p.category === product.category))
    .slice(0, 4);

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-gold">Home</Link></li>
            <li>/</li>
            <li><Link href="/products" className="hover:text-gold">Products</Link></li>
            <li>/</li>
            <li><Link href={`/products?category=${product.category}`} className="hover:text-gold capitalize">{product.category}</Link></li>
            <li>/</li>
            <li className="text-gray-800">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div>
            <div className="relative aspect-square bg-white rounded-lg shadow-md overflow-hidden mb-4">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-80 bg-gradient-to-b from-amber-100 to-amber-200 rounded-lg flex items-center justify-center shadow-md">
                  <div className="text-center">
                    <div className="text-lg font-semibold text-gray-700 mb-2">{product.brand}</div>
                    <div className="text-sm text-gray-600">{product.name}</div>
                  </div>
                </div>
              </div>
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col space-y-2">
                {!product.inStock && (
                  <span className="bg-red-500 text-white text-sm px-3 py-1 rounded">Out of Stock</span>
                )}
                {product.originalPrice && (
                  <span className="bg-red-500 text-white text-sm px-3 py-1 rounded">
                    -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </span>
                )}
              </div>

              {/* Action buttons */}
              <div className="absolute top-4 right-4 flex flex-col space-y-2">
                <button
                  onClick={() => setIsInWishlist(!isInWishlist)}
                  className={`p-3 rounded-full shadow-md transition-colors ${
                    isInWishlist ? 'bg-red-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Heart className="w-5 h-5" />
                </button>
                <button className="p-3 bg-white text-gray-600 rounded-full shadow-md hover:bg-gray-50 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Image thumbnails */}
            <div className="flex space-x-2">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center ${
                    selectedImage === index ? 'ring-2 ring-gold' : ''
                  }`}
                >
                  <span className="text-xs text-gray-600">{index + 1}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div>
            <div className="mb-4">
              <p className="text-gold font-medium mb-2">{product.brand}</p>
              <h1 className="text-3xl font-serif font-bold text-gray-800 mb-4">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-gray-800">
                  {product.price.toLocaleString()} EGP
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    {product.originalPrice.toLocaleString()} EGP
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Description</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Fragrance Notes */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Fragrance Notes</h3>
              <div className="space-y-3">
                <div>
                  <span className="font-medium text-gray-700">Top Notes: </span>
                  <span className="text-gray-600">{product.fragrance_notes.top.join(', ')}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Heart Notes: </span>
                  <span className="text-gray-600">{product.fragrance_notes.middle.join(', ')}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Base Notes: </span>
                  <span className="text-gray-600">{product.fragrance_notes.base.join(', ')}</span>
                </div>
              </div>
            </div>

            {/* Size */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Size</h3>
              <span className="inline-block bg-gray-100 px-4 py-2 rounded-lg text-gray-800">
                {product.size}
              </span>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="p-2 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="p-2 hover:bg-gray-50"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                
                <button
                  disabled={!product.inStock}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-semibold transition-all ${
                    product.inStock
                      ? 'gradient-gold text-white hover:shadow-lg'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <ShoppingBag className="w-5 h-5" />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <Shield className="w-6 h-6 text-gold" />
                <div>
                  <div className="font-medium text-gray-800">Authentic</div>
                  <div className="text-sm text-gray-600">100% Original</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <Truck className="w-6 h-6 text-gold" />
                <div>
                  <div className="font-medium text-gray-800">Fast Delivery</div>
                  <div className="text-sm text-gray-600">2-3 Days</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <RotateCcw className="w-6 h-6 text-gold" />
                <div>
                  <div className="font-medium text-gray-800">Easy Returns</div>
                  <div className="text-sm text-gray-600">7 Day Return</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-3xl font-serif font-bold text-gray-800 mb-8 text-center">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </div>

      <Footer />
    </div>
  );
}