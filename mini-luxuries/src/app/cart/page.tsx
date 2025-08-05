'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { products } from '@/data/products';
import { CartItem } from '@/types';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CartPage() {
  // Mock cart items - in a real app, this would come from context/state management
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { product: products[0], quantity: 2 },
    { product: products[1], quantity: 1 },
    { product: products[4], quantity: 1 },
  ]);

  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(productId);
      return;
    }
    
    setCartItems(items =>
      items.map(item =>
        item.product.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const removeItem = (productId: string) => {
    setCartItems(items => items.filter(item => item.product.id !== productId));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const shipping = subtotal >= 2000 ? 0 : 150; // Free shipping over 2000 EGP
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
              <ShoppingBag className="w-12 h-12 text-gray-400" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">
              Discover our amazing fragrances and start building your collection.
            </p>
            <Link
              href="/products/"
              className="inline-flex items-center px-6 py-3 gradient-gold text-white rounded-lg hover:shadow-lg transition-all"
            >
              Start Shopping
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif font-bold text-gray-800 mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800">
                  Cart Items ({cartItems.length})
                </h2>
              </div>
              
              <div className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="p-6 flex items-center space-x-4">
                    {/* Product Image */}
                    <div className="w-20 h-24 bg-gradient-to-b from-amber-100 to-amber-200 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                      <span className="text-xs text-gray-600 font-medium">{item.product.brand}</span>
                    </div>
                    
                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <Link href={`/products/${item.product.id}/`}>
                        <h3 className="text-lg font-semibold text-gray-800 hover:text-gold transition-colors">
                          {item.product.name}
                        </h3>
                      </Link>
                      <p className="text-gray-600">{item.product.brand}</p>
                      <p className="text-sm text-gray-500">{item.product.size}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <span className="text-lg font-bold text-gray-800">
                          {item.product.price.toLocaleString()} EGP
                        </span>
                        {item.product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            {item.product.originalPrice.toLocaleString()} EGP
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-2 hover:bg-gray-50 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-4 py-2 font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-2 hover:bg-gray-50 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                    
                    {/* Item Total */}
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-800">
                        {(item.product.price * item.quantity).toLocaleString()} EGP
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">{subtotal.toLocaleString()} EGP</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {shipping === 0 ? (
                      <span className="text-green-600">Free</span>
                    ) : (
                      `${shipping} EGP`
                    )}
                  </span>
                </div>
                
                {shipping === 0 && (
                  <div className="text-sm text-green-600">
                    🎉 You qualify for free shipping!
                  </div>
                )}
                
                {shipping > 0 && subtotal < 2000 && (
                  <div className="text-sm text-gray-600">
                    Add {(2000 - subtotal).toLocaleString()} EGP more for free shipping
                  </div>
                )}
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>{total.toLocaleString()} EGP</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <button className="w-full gradient-gold text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all">
                  Proceed to Checkout
                </button>
                
                <Link
                  href="/products/"
                  className="w-full block text-center border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
              
              {/* Security Features */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="text-sm text-gray-600 space-y-2">
                  <div className="flex items-center space-x-2">
                    <span>🔒</span>
                    <span>Secure checkout</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>🚚</span>
                    <span>Fast delivery across Egypt</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>↩️</span>
                    <span>7-day return policy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Recommended Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-serif font-bold text-gray-800 mb-8 text-center">
            Complete Your Collection
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.slice(0, 4).map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gray-100 flex items-center justify-center">
                  <div className="w-24 h-32 bg-gradient-to-b from-amber-100 to-amber-200 rounded-lg flex items-center justify-center shadow-sm">
                    <span className="text-xs text-gray-600 font-medium">{product.brand}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{product.brand}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-800">{product.price.toLocaleString()} EGP</span>
                    <button className="px-3 py-1 bg-black text-white text-sm rounded hover:bg-gray-800 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}