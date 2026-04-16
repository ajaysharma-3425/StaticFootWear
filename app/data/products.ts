import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'mens-running-shoe-1',
    name: "Men's Running Shoes",
    article: 'OX-2026-BLK',
    price: 1999,
    category: 'men',
    subCategory: 'casual',
    images: ['/images/men.jpg'],
    description: 'Lightweight and breathable running casual shoes.',
    sizes: ['7', '8', '9', '10'],
    isFeatured: true,
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'Fire Brick', hex: '#B22222' },
      { name: 'Navy Blue', hex: '#1A237E' }
    ]
  },
  {
    id: 'mens-running',
    name: "Men's Nike Running Shoes",
    article: 'OX-2026-Nike',
    price: 4999,
    category: 'men',
    subCategory: 'casual',
    images: ['/images/men.jpg'],
    description: 'Lightweight and breathable running casual shoes.',
    sizes: ['7', '8', '9', '10'],
    isFeatured: true,
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'Fire Brick', hex: '#B22222' },
      { name: 'Navy Blue', hex: '#1A237E' }
    ]
  },
  {
    id: 'womens-casual-shoe-1',
    name: "Women's Casual Sneakers",
    article: 'OX-2026-BLK',
    price: 1499,
    category: 'women',
    subCategory: 'casual',
    images: ['/images/womens.jpg'],
    description: 'Comfortable everyday sneakers.',
    sizes: ['5', '6', '7', '8'],
    isFeatured: true,
  },
  {
    id: 'womens-heels-1',
    name: "Women's Platform Chappals",
    article: 'Designer Chappals',
    price: 600,
    category: 'women',
    subCategory: 'heels',
    images: ['/images/heels.png'],
    description: 'Comfortable Chappals.',
    sizes: ['37', '38', '39', '40', '41'],
    isFeatured: true,
    colors: [
      { name: 'Grey', hex: '#808080' },
      { name: 'Chicku', hex: '#D2B48C' },

    ]
  },
  {
    id: 'womens-heels-2',
    name: "Women's Hills Chappals",
    article: 'Designer Chappals',
    price: 770,
    category: 'women',
    subCategory: 'heels',
    images: ['/images/heels-3.png'],
    description: 'Hills Chappals.',
    sizes: ['37', '38', '39', '40', '41'],
    isFeatured: true,
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'Chicku', hex: '#D2B48C' },

    ]
  },
  {
    id: 'womens-flats-1',
    name: "Women's Flat Chappals",
    article: 'Prem Chappals',
    price: 550,
    category: 'women',
    subCategory: 'flats',
    images: ['/images/flats_1.png'],
    description: 'Flat Chappals.',
    sizes: ['40', '41', '42'],
    isFeatured: true,
    colors: [
      { name: 'Purple', hex: '#A020F0' },
      { name: 'Khakhi', hex: '#F0E68C' },

    ]
  },
   {
    id: 'womens-ethnic-1',
    name: "Women's Ethnic Chappals",
    article: 'Seasons Chappals',
    price: 630,
    category: 'women',
    subCategory: 'ethnic',
    images: ['/images/Wedding_1.png'],
    description: 'Ethnic Chappals.',
    sizes: ['37','38', '39','40', '41', '42'],
    isFeatured: true,
    colors: [
      { name: 'Golden', hex: '#CFB53B' },
      { name: 'Sultan', hex: '#8B0000x' },

    ]
  },
  {
    id: 'kids-casual-shoe-1',
    name: "Women's Casual Sneakers",
    article: 'OX-2026-BLK',
    price: 1499,
    category: 'kids',
    subCategory: 'casual',
    images: ['/images/kids_casual.jpg'],
    description: 'Comfortable everyday sneakers.',
    sizes: ['5', '6', '7', '8'],
    isFeatured: true,
  },
  {
    id: 'mens-running-shoe-2',
    name: "Men's Running Snekers",
    article: 'OX-2026-BLK',
    price: 1999,
    category: 'men',
    subCategory: 'sneakers',
    images: ['/images/men_snekers.jpg'],
    description: 'Lightweight and breathable running shoes.',
    sizes: ['7', '8', '9', '10'],
    isFeatured: true,
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'Fire Brick', hex: '#B22222' },
      { name: 'Navy Blue', hex: '#1A237E' }
    ]
  },
  // {
  //   id: 'mens-formal-shoe-1',
  //   name: "Men's Formals",
  //   article: 'OX-2025-BLK',
  //   price: 1999,
  //   category: 'men',
  //   subCategory: 'formal',
  //   images: ['/images/men_formal.jpg'],
  //   description: 'Lightweight and breathable formal shoes.',
  //   sizes: ['7', '8', '9', '10'],
  //   isFeatured: true,
  //   colors: ['#000000', '#B22222', '#1A237E']
  // },
  {
    id: 'mens-boots-shoe-1',
    name: "Men's Boots",
    article: 'OX-2025-BLK',
    price: 1999,
    category: 'men',
    subCategory: 'boots',
    images: ['/images/mens-boots.jpg'],
    description: 'Lightweight and breathable Boots.',
    sizes: ['7', '8', '9', '10'],
    isFeatured: true,
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'Fire Brick', hex: '#B22222' },
      { name: 'Navy Blue', hex: '#1A237E' }
    ]
  },
  // Add more products as needed
];