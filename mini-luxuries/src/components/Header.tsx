'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, Menu, X, Heart, User } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItemsCount] = useState(3); // This would come from cart context

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-black text-white text-sm py-2">
        <div className="container mx-auto px-4 text-center">
          <p>Free shipping on orders over 2000 EGP across Egypt 🚚</p>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 gradient-gold rounded-full flex items-center justify-center">
              <span className="text-white font-bold font-serif">ML</span>
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold text-gray-800">Mini Luxuries</h1>
              <p className="text-xs text-gray-500">Premium Perfumes</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gold transition-colors font-medium">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-gold transition-colors font-medium">
              All Perfumes
            </Link>
            <Link href="/products?category=women" className="text-gray-700 hover:text-gold transition-colors font-medium">
              Women
            </Link>
            <Link href="/products?category=men" className="text-gray-700 hover:text-gold transition-colors font-medium">
              Men
            </Link>
            <Link href="/products?category=unisex" className="text-gray-700 hover:text-gold transition-colors font-medium">
              Unisex
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gold transition-colors font-medium">
              About
            </Link>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search className="w-5 h-5 text-gray-600" />
            </button>

            {/* Wishlist */}
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Heart className="w-5 h-5 text-gray-600" />
            </button>

            {/* Account */}
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <User className="w-5 h-5 text-gray-600" />
            </button>

            {/* Cart */}
            <Link href="/cart" className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ShoppingBag className="w-5 h-5 text-gray-600" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-gold transition-colors font-medium py-2">
                Home
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-gold transition-colors font-medium py-2">
                All Perfumes
              </Link>
              <Link href="/products?category=women" className="text-gray-700 hover:text-gold transition-colors font-medium py-2">
                Women
              </Link>
              <Link href="/products?category=men" className="text-gray-700 hover:text-gold transition-colors font-medium py-2">
                Men
              </Link>
              <Link href="/products?category=unisex" className="text-gray-700 hover:text-gold transition-colors font-medium py-2">
                Unisex
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-gold transition-colors font-medium py-2">
                About
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}