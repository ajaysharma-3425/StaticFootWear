// types/index.ts
export interface Product {
  id: string;
  name: string;
  article: string;
  price: number;
  category: 'men' | 'women' | 'kids';
  subCategory?: string; // e.g., 'sports', 'casual'
  images: string[];
  description: string;
  sizes?: string[];
  isFeatured?: boolean;
  colors?: { name: string; hex: string }[];
}