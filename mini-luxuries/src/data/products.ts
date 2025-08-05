import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Black Opium',
    brand: 'Yves Saint Laurent',
    price: 2500,
    originalPrice: 3200,
    description: 'A seductive and addictive fragrance with notes of black coffee, white flowers, and vanilla.',
    category: 'women',
    image: '/perfumes/black-opium.jpg',
    images: ['/perfumes/black-opium.jpg', '/perfumes/black-opium-2.jpg'],
    inStock: true,
    fragrance_notes: {
      top: ['Pink Pepper', 'Orange Blossom', 'Pear'],
      middle: ['Coffee', 'Jasmine', 'Bitter Almond'],
      base: ['Vanilla', 'Patchouli', 'Cedar']
    },
    size: '90ml',
    rating: 4.8,
    reviewCount: 245
  },
  {
    id: '2',
    name: 'Sauvage',
    brand: 'Dior',
    price: 2800,
    description: 'Fresh and sophisticated with bergamot and pepper, inspired by wide-open spaces.',
    category: 'men',
    image: '/perfumes/sauvage.jpg',
    images: ['/perfumes/sauvage.jpg', '/perfumes/sauvage-2.jpg'],
    inStock: true,
    fragrance_notes: {
      top: ['Calabrian Bergamot', 'Pepper'],
      middle: ['Sichuan Pepper', 'Lavender', 'Pink Pepper'],
      base: ['Ambroxan', 'Cedar', 'Labdanum']
    },
    size: '100ml',
    rating: 4.9,
    reviewCount: 532
  },
  {
    id: '3',
    name: 'Coco Mademoiselle',
    brand: 'Chanel',
    price: 3200,
    description: 'An elegant and sophisticated fragrance with sparkling citrus and white flowers.',
    category: 'women',
    image: '/perfumes/coco-mademoiselle.jpg',
    images: ['/perfumes/coco-mademoiselle.jpg', '/perfumes/coco-mademoiselle-2.jpg'],
    inStock: true,
    fragrance_notes: {
      top: ['Orange', 'Mandarin', 'Orange Blossom'],
      middle: ['Mimosa', 'Jasmine', 'Rose'],
      base: ['Patchouli', 'White Musk', 'Vanilla']
    },
    size: '100ml',
    rating: 4.7,
    reviewCount: 389
  },
  {
    id: '4',
    name: 'Bleu de Chanel',
    brand: 'Chanel',
    price: 2900,
    description: 'An unexpected, timeless fragrance for the man who defies convention.',
    category: 'men',
    image: '/perfumes/bleu-de-chanel.jpg',
    images: ['/perfumes/bleu-de-chanel.jpg', '/perfumes/bleu-de-chanel-2.jpg'],
    inStock: true,
    fragrance_notes: {
      top: ['New Caledonian Sandalwood', 'Cedar', 'Lemon'],
      middle: ['Nutmeg', 'Ginger', 'Jasmine'],
      base: ['Incense', 'White Musk', 'Iso E Super']
    },
    size: '100ml',
    rating: 4.6,
    reviewCount: 423
  },
  {
    id: '5',
    name: 'La Vie Est Belle',
    brand: 'Lancôme',
    price: 2600,
    originalPrice: 3100,
    description: 'A unique olfactory signature scent with iris, patchouli, and gourmand notes.',
    category: 'women',
    image: '/perfumes/la-vie-est-belle.jpg',
    images: ['/perfumes/la-vie-est-belle.jpg', '/perfumes/la-vie-est-belle-2.jpg'],
    inStock: true,
    fragrance_notes: {
      top: ['Black Currant', 'Pear'],
      middle: ['Iris', 'Jasmine', 'Orange Blossom'],
      base: ['Praline', 'Vanilla', 'Patchouli']
    },
    size: '75ml',
    rating: 4.5,
    reviewCount: 312
  },
  {
    id: '6',
    name: 'One Million',
    brand: 'Paco Rabanne',
    price: 2200,
    description: 'A fresh, spicy, and leathery fragrance for the modern man.',
    category: 'men',
    image: '/perfumes/one-million.jpg',
    images: ['/perfumes/one-million.jpg', '/perfumes/one-million-2.jpg'],
    inStock: true,
    fragrance_notes: {
      top: ['Grapefruit', 'Mint', 'Blood Mandarin'],
      middle: ['Cinnamon', 'Spicy Notes', 'Rose'],
      base: ['Leather', 'Wood', 'Patchouli']
    },
    size: '100ml',
    rating: 4.4,
    reviewCount: 267
  },
  {
    id: '7',
    name: 'Good Girl',
    brand: 'Carolina Herrera',
    price: 2700,
    description: 'A modern fragrance that captures the duality of today\'s woman.',
    category: 'women',
    image: '/perfumes/good-girl.jpg',
    images: ['/perfumes/good-girl.jpg', '/perfumes/good-girl-2.jpg'],
    inStock: false,
    fragrance_notes: {
      top: ['Almond', 'Coffee'],
      middle: ['Tuberose', 'Jasmine'],
      base: ['Tonka Bean', 'Cocoa', 'Sandalwood']
    },
    size: '80ml',
    rating: 4.6,
    reviewCount: 189
  },
  {
    id: '8',
    name: 'Aventus',
    brand: 'Creed',
    price: 4500,
    description: 'A sophisticated and contemporary scent perfect for the modern gentleman.',
    category: 'men',
    image: '/perfumes/aventus.jpg',
    images: ['/perfumes/aventus.jpg', '/perfumes/aventus-2.jpg'],
    inStock: true,
    fragrance_notes: {
      top: ['Blackcurrant', 'Italian Bergamot', 'Apple', 'Pineapple'],
      middle: ['Moroccan Jasmine', 'Patchouli', 'Pink Pepper', 'Birch'],
      base: ['Indian Sandalwood', 'Musk', 'Oakmoss', 'Ambergris']
    },
    size: '120ml',
    rating: 4.9,
    reviewCount: 756
  },
  {
    id: '9',
    name: 'CK One',
    brand: 'Calvin Klein',
    price: 1200,
    description: 'A refreshing unisex fragrance that broke boundaries.',
    category: 'unisex',
    image: '/perfumes/ck-one.jpg',
    images: ['/perfumes/ck-one.jpg', '/perfumes/ck-one-2.jpg'],
    inStock: true,
    fragrance_notes: {
      top: ['Lemon', 'Mandarin', 'Papaya', 'Bergamot'],
      middle: ['Nutmeg', 'Violet', 'Orris Root', 'Jasmine'],
      base: ['Sandalwood', 'Amber', 'Musk', 'Cedar']
    },
    size: '100ml',
    rating: 4.2,
    reviewCount: 445
  },
  {
    id: '10',
    name: 'Alien',
    brand: 'Thierry Mugler',
    price: 2400,
    originalPrice: 2800,
    description: 'An extraordinary fragrance for extraordinary women.',
    category: 'women',
    image: '/perfumes/alien.jpg',
    images: ['/perfumes/alien.jpg', '/perfumes/alien-2.jpg'],
    inStock: true,
    fragrance_notes: {
      top: ['Jasmine'],
      middle: ['Cashmeran Wood', 'Amber'],
      base: ['White Amber']
    },
    size: '60ml',
    rating: 4.3,
    reviewCount: 298
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: 'men' | 'women' | 'unisex'): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.rating >= 4.5).slice(0, 6);
};