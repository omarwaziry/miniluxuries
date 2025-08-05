import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-cream to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-gold rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-gold rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-gold rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-24 h-24 border-2 border-gold rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="flex items-center space-x-2 text-gold">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Premium Fragrances</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-gray-800 leading-tight">
                Discover Your
                <span className="text-gold block">Signature</span>
                Scent
              </h1>
              
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg">
                Indulge in the finest collection of authentic luxury perfumes. From timeless classics to modern masterpieces, find your perfect fragrance at Mini Luxuries.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/products/"
                className="inline-flex items-center justify-center px-8 py-4 gradient-gold text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 group"
              >
                Shop Collection
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="/about/"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gold text-gold font-semibold rounded-lg hover-gold transition-all duration-300"
              >
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800">50+</div>
                <div className="text-sm text-gray-600">Premium Brands</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800">1000+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800">24h</div>
                <div className="text-sm text-gray-600">Fast Delivery</div>
              </div>
            </div>
          </div>

          {/* Right Content - Product Showcase */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Featured Perfume Bottles */}
              <div className="space-y-4">
                <div className="w-full h-40 bg-gradient-to-b from-purple-200 to-purple-300 rounded-lg shadow-lg flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-sm font-semibold text-gray-700">Chanel</div>
                    <div className="text-xs text-gray-600">Coco Mademoiselle</div>
                  </div>
                </div>
                
                <div className="w-full h-32 bg-gradient-to-b from-blue-200 to-blue-300 rounded-lg shadow-lg flex items-center justify-center transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-sm font-semibold text-gray-700">Dior</div>
                    <div className="text-xs text-gray-600">Sauvage</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 mt-8">
                <div className="w-full h-32 bg-gradient-to-b from-pink-200 to-pink-300 rounded-lg shadow-lg flex items-center justify-center transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-sm font-semibold text-gray-700">YSL</div>
                    <div className="text-xs text-gray-600">Black Opium</div>
                  </div>
                </div>
                
                <div className="w-full h-40 bg-gradient-to-b from-amber-200 to-amber-300 rounded-lg shadow-lg flex items-center justify-center transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-sm font-semibold text-gray-700">Creed</div>
                    <div className="text-xs text-gray-600">Aventus</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gold bg-opacity-20 rounded-full flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-gold" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gold bg-opacity-20 rounded-full flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-gold" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
}