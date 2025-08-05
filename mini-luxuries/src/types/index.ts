export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: 'men' | 'women' | 'unisex';
  image: string;
  images: string[];
  inStock: boolean;
  fragrance_notes: {
    top: string[];
    middle: string[];
    base: string[];
  };
  size: string;
  rating: number;
  reviewCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    governorate: string;
    postalCode: string;
  };
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
  shippingAddress: User['address'];
}