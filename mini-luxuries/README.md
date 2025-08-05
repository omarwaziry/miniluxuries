# Mini Luxuries 🌟

A luxury perfume ecommerce website built for the Egyptian market, offering authentic designer fragrances with a modern, sophisticated user experience.

## ✨ Features

- **🏠 Beautiful Homepage** - Stunning hero section with featured products and company values
- **🛍️ Product Catalog** - Complete product listing with advanced filtering and search
- **🔍 Product Details** - Detailed product pages with fragrance notes and related products
- **🛒 Shopping Cart** - Full cart functionality with quantity management
- **📱 Responsive Design** - Optimized for all devices from mobile to desktop
- **🎨 Luxury Branding** - Gold color scheme with elegant typography
- **🇪🇬 Egyptian Context** - Pricing in EGP, local delivery options, Cairo-based store

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Playfair Display, Inter)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mini-luxuries
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Pages

### Homepage (`/`)
- Hero section with brand story
- Featured fragrances showcase
- Company values and guarantees
- Category navigation
- Newsletter signup

### Products (`/products`)
- Complete product catalog
- Search and filter functionality
- Category filtering (Men, Women, Unisex)
- Price range filtering
- Sort options (Name, Price, Rating)

### Product Detail (`/products/[id]`)
- High-quality product images
- Detailed product information
- Fragrance notes breakdown
- Customer reviews and ratings
- Related products
- Add to cart functionality

### Shopping Cart (`/cart`)
- Cart items management
- Quantity updates
- Price calculations
- Shipping information
- Recommended products

### About (`/about`)
- Company story and values
- Featured brands
- Store location and contact info
- Why choose Mini Luxuries

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── about/             # About page
│   ├── cart/              # Shopping cart page
│   ├── products/          # Products listing and detail pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Homepage hero section
│   └── ProductCard.tsx    # Product display card
├── data/                  # Data and utilities
│   └── products.ts        # Product data and helper functions
└── types/                 # TypeScript type definitions
    └── index.ts           # Interface definitions
```

## 🎨 Design System

### Colors
- **Primary Gold**: `#D4AF37` - Main brand color
- **Dark Gold**: `#B8941F` - Hover and accent states
- **Light Gold**: `#F5E6A3` - Backgrounds and highlights
- **Cream**: `#FAF7F0` - Section backgrounds

### Typography
- **Display**: Playfair Display (serif) - Headings and luxury text
- **Body**: Inter (sans-serif) - Body text and UI elements

### Components
- Rounded corners for modern feel
- Subtle shadows for depth
- Smooth hover transitions
- Gold gradient buttons
- Elegant product cards

## 🛍️ Product Data

The website features authentic luxury perfumes including:

- **Chanel** - Coco Mademoiselle, Bleu de Chanel
- **Dior** - Sauvage
- **YSL** - Black Opium
- **Lancôme** - La Vie Est Belle
- **Creed** - Aventus
- **Paco Rabanne** - One Million
- **Carolina Herrera** - Good Girl
- **Calvin Klein** - CK One
- **Thierry Mugler** - Alien

Each product includes:
- High-quality imagery
- Detailed descriptions
- Fragrance note breakdowns
- Pricing in Egyptian Pounds
- Stock availability
- Customer ratings

## 🇪🇬 Egyptian Market Features

- **Currency**: All prices displayed in Egyptian Pounds (EGP)
- **Shipping**: Free shipping on orders over 2000 EGP
- **Delivery**: Fast delivery across Egypt, same-day in Cairo
- **Location**: Physical store in New Cairo, 5th Settlement
- **Support**: Local phone number and Arabic-friendly design
- **Payment**: Visa, Mastercard, and Cash on Delivery options

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Deploy to Vercel
```bash
vercel --prod
```

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment-specific configuration:

```env
# Add your environment variables here
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Tailwind Configuration
The project uses a custom Tailwind configuration with:
- Custom color palette
- Extended font families
- Custom utility classes
- Responsive breakpoints

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

Key responsive features:
- Mobile-first navigation
- Collapsible product filters
- Optimized product grids
- Touch-friendly interactions

## 🎯 Future Enhancements

- **User Authentication** - Login/register functionality
- **Wishlist** - Save favorite products
- **Reviews System** - Customer product reviews
- **Search Analytics** - Advanced search with autocomplete
- **Payment Integration** - Real payment processing
- **Inventory Management** - Real-time stock updates
- **Arabic Language** - RTL support for Arabic users
- **Advanced Filtering** - By brand, scent family, occasion

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

**Mini Luxuries**
- 📍 New Cairo, 5th Settlement, Cairo, Egypt
- 📞 +20 10 1234 5678
- 📧 info@miniluxuries.com
- 🌐 [www.miniluxuries.com](https://miniluxuries.com)

---

*Made with ❤️ in Egypt for fragrance lovers everywhere*
