import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 gradient-gold rounded-full flex items-center justify-center">
                <span className="text-white font-bold font-serif text-sm">ML</span>
              </div>
              <h3 className="text-xl font-serif font-bold">Mini Luxuries</h3>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Your premier destination for authentic luxury perfumes in Egypt. We bring you the finest fragrances from world-renowned brands.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors">All Perfumes</Link></li>
              <li><Link href="/products?category=women" className="text-gray-400 hover:text-white transition-colors">Women&apos;s Fragrances</Link></li>
              <li><Link href="/products?category=men" className="text-gray-400 hover:text-white transition-colors">Men&apos;s Fragrances</Link></li>
              <li><Link href="/products?category=unisex" className="text-gray-400 hover:text-white transition-colors">Unisex Fragrances</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">Customer Service</h4>
            <ul className="space-y-2">
              <li><Link href="/shipping" className="text-gray-400 hover:text-white transition-colors">Shipping Info</Link></li>
              <li><Link href="/returns" className="text-gray-400 hover:text-white transition-colors">Returns & Exchanges</Link></li>
              <li><Link href="/size-guide" className="text-gray-400 hover:text-white transition-colors">Size Guide</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Cairo, Egypt</p>
                  <p className="text-gray-400">New Cairo, 5th Settlement</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <p className="text-gray-400">+20 10 1234 5678</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <p className="text-gray-400">info@miniluxuries.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Sunday - Thursday: 9AM - 8PM</p>
                  <p className="text-gray-400">Friday - Saturday: 10AM - 6PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment & Shipping */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h5 className="font-semibold mb-3 text-gold">We Accept</h5>
              <div className="flex space-x-4">
                <div className="bg-white p-2 rounded">
                  <span className="text-black font-bold text-sm">Visa</span>
                </div>
                <div className="bg-white p-2 rounded">
                  <span className="text-black font-bold text-sm">MC</span>
                </div>
                <div className="bg-white p-2 rounded">
                  <span className="text-black font-bold text-sm">COD</span>
                </div>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-3 text-gold">Delivery Partners</h5>
              <div className="flex space-x-4">
                <div className="bg-red-600 text-white px-3 py-1 rounded text-sm">
                  Aramex
                </div>
                <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
                  DHL
                </div>
                <div className="bg-green-600 text-white px-3 py-1 rounded text-sm">
                  Bosta
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Mini Luxuries. All rights reserved. | Made with ❤️ in Egypt
          </p>
        </div>
      </div>
    </footer>
  );
}