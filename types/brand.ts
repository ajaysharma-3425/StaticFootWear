export interface Brand {
  id: string;          // e.g., 'nike'
  name: string;        // e.g., 'Nike'
  logoText: string;    // e.g., 'N'
  description: string; // Brand ki detail
  image: string;       // Banner image URL
  productIds: string[]; // <--- YE ZAROORI HAI (IDs ka array jo products.ts se match karega)
}