import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Award, Users, Heart, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif font-bold text-gray-800 mb-6">
            About Mini Luxuries
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your premier destination for authentic luxury perfumes in Egypt. We bring you the finest fragrances 
            from world-renowned brands, delivered with passion and expertise across the beautiful land of the Pharaohs.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in the heart of Cairo, Mini Luxuries began as a passion project to make authentic 
                  luxury fragrances accessible to everyone in Egypt. We believe that a beautiful scent is 
                  not just an accessory—it&apos;s an expression of personality, a memory maker, and a confidence booster.
                </p>
                <p>
                  Our journey started when our founders, fragrance enthusiasts themselves, noticed the lack 
                  of authentic luxury perfumes at reasonable prices in the Egyptian market. They set out to 
                  bridge this gap, partnering directly with authorized distributors to bring you genuine 
                  products from the world&apos;s most prestigious perfume houses.
                </p>
                <p>
                  Today, Mini Luxuries serves customers across Egypt, from the bustling streets of Cairo 
                  to the serene shores of Alexandria, and everywhere in between. We&apos;re proud to be part 
                  of your fragrance journey, helping you discover scents that tell your unique story.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gold to-amber-200 rounded-lg shadow-xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-32 h-40 bg-white bg-opacity-20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-serif font-bold">ML</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold">Est. 2020</h3>
                  <p>Cairo, Egypt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do at Mini Luxuries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Authenticity</h3>
              <p className="text-gray-600">
                We guarantee 100% authentic products sourced directly from authorized distributors. 
                No compromises on quality, ever.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Customer First</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. From personalized recommendations to after-sales 
                support, we&apos;re here for you.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Passion</h3>
              <p className="text-gray-600">
                We&apos;re fragrance lovers serving fragrance lovers. Our passion for perfumes drives 
                us to curate only the finest selections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">Why Choose Mini Luxuries?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We&apos;re more than just an online perfume store—we&apos;re your fragrance partners in Egypt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-gold mb-2">100%</div>
              <div className="font-semibold text-gray-800 mb-2">Authentic</div>
              <div className="text-sm text-gray-600">All products verified and genuine</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-gold mb-2">24H</div>
              <div className="font-semibold text-gray-800 mb-2">Fast Delivery</div>
              <div className="text-sm text-gray-600">Same-day delivery in Cairo</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-gold mb-2">50+</div>
              <div className="font-semibold text-gray-800 mb-2">Premium Brands</div>
              <div className="text-sm text-gray-600">Curated luxury collection</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-gold mb-2">7</div>
              <div className="font-semibold text-gray-800 mb-2">Day Returns</div>
              <div className="text-sm text-gray-600">Hassle-free return policy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Brands */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">Featured Brands</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We proudly carry fragrances from the world&apos;s most prestigious perfume houses.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['Chanel', 'Dior', 'YSL', 'Lancôme', 'Creed', 'Tom Ford', 'Hermès', 'Guerlain', 'Paco Rabanne', 'Calvin Klein', 'Hugo Boss', 'Versace'].map((brand) => (
              <div key={brand} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="text-lg font-semibold text-gray-800">{brand}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">Visit Our Store</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience our fragrances in person at our flagship store in New Cairo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Our Location</h3>
                  <p className="text-gray-600">
                    New Cairo, 5th Settlement<br />
                    Cairo, Egypt
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Phone</h3>
                  <p className="text-gray-600">+20 10 1234 5678</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
                  <p className="text-gray-600">info@miniluxuries.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Store Hours</h3>
                  <div className="text-gray-600">
                    <p>Sunday - Thursday: 9:00 AM - 8:00 PM</p>
                    <p>Friday - Saturday: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gold to-amber-300 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-serif font-bold mb-4">Ready to Find Your Signature Scent?</h3>
              <p className="mb-6">
                Visit our store for a personalized fragrance consultation, or browse our complete 
                collection online with fast delivery across Egypt.
              </p>
                             <div className="space-y-3">
                 <Link 
                   href="/products/" 
                   className="block w-full bg-white text-gold py-3 px-6 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors"
                 >
                   Shop Online
                 </Link>
                 <a 
                   href="tel:+201012345678" 
                   className="block w-full border-2 border-white text-white py-3 px-6 rounded-lg font-semibold text-center hover:bg-white hover:text-gold transition-colors"
                 >
                   Call Us Now
                 </a>
               </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}