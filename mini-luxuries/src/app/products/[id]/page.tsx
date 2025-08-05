import { products } from '@/data/products';
import ProductDetailClient from './ProductDetailClient';

// Generate static params for all products (server component)
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default function ProductDetailPage() {
  return <ProductDetailClient />;
}