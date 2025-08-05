import Hero from '@/components/Hero';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { getFeaturedProducts } from '@/data/products';
import { Star, Shield, Truck, Award } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <Hero />

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">
              Featured Fragrances
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our most popular perfumes, carefully selected for their exceptional quality and captivating scents.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link 
              href="/products/"
              className="inline-flex items-center px-8 py-3 gradient-gold text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">
              Why Choose Mini Luxuries?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We&apos;re committed to bringing you authentic luxury fragrances with exceptional service across Egypt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">100% Authentic</h3>
              <p className="text-gray-600">
                All our perfumes are sourced directly from authorized distributors, ensuring authenticity.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Free shipping across Egypt on orders over 2000 EGP with same-day delivery in Cairo.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                Curated collection of luxury brands including Chanel, Dior, YSL, and more.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Service</h3>
              <p className="text-gray-600">
                Our fragrance experts help you find the perfect scent for every occasion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find the perfect fragrance for every preference and personality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/products/" className="group">
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-pink-200 to-rose-300 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-serif font-bold text-gray-800 mb-2">For Her</h3>
                    <p className="text-gray-600">Elegant & Sophisticated</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Shop Women&apos;s Fragrances
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/products/" className="group">
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-200 to-indigo-300 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-serif font-bold text-gray-800 mb-2">For Him</h3>
                    <p className="text-gray-600">Bold & Confident</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Shop Men&apos;s Fragrances
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/products/" className="group">
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-green-200 to-teal-300 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-serif font-bold text-gray-800 mb-2">Unisex</h3>
                    <p className="text-gray-600">Universal Appeal</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Shop Unisex Fragrances
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 gradient-gold">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-4">
            Stay in the Loop
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Be the first to know about new arrivals, exclusive offers, and fragrance tips.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button className="px-6 py-3 bg-white text-gold font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
