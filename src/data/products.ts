export type Product = {
  id: string
  name: string
  price: number
  originalPrice?: number
  images: string[]
  image: string // For backward compatibility
  rating: number
  reviewCount: number
  category: string
  description: string
  features?: string[]
  inStock: boolean
  stockQuantity: number
}

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Wireless Headphones',
    price: 79.99,
    originalPrice: 99.99,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1545127398-14699f92334b?w=800&h=800&fit=crop'
    ],
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    rating: 4.5,
    reviewCount: 128,
    category: 'Electronics',
    description: 'Premium wireless headphones with active noise cancellation, 30-hour battery life, and studio-quality sound. Perfect for music lovers and professionals.',
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Bluetooth 5.0',
      'Premium leather ear cushions',
      'Foldable design',
      'Built-in microphone'
    ],
    inStock: true,
    stockQuantity: 15
  },
  {
    id: 'p2',
    name: 'Smart Watch',
    price: 199.99,
    originalPrice: 249.99,
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&h=800&fit=crop'
    ],
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    rating: 4.8,
    reviewCount: 89,
    category: 'Electronics',
    description: 'Advanced fitness tracker with heart rate monitoring, GPS, and comprehensive health insights. Stay connected and motivated throughout your day.',
    features: [
      'Heart rate monitoring',
      'Built-in GPS',
      'Sleep tracking',
      'Water resistant (5ATM)',
      '7-day battery life',
      'Multiple sport modes'
    ],
    inStock: true,
    stockQuantity: 8
  },
  {
    id: 'p3',
    name: 'Laptop Backpack',
    price: 49.99,
    images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop'],
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
    rating: 4.3,
    reviewCount: 203,
    category: 'Fashion',
    description: 'Durable laptop backpack with multiple compartments, USB charging port, and water-resistant material. Perfect for work, travel, or daily commute.',
    features: [
      'Fits 15.6" laptops',
      'USB charging port',
      'Water-resistant fabric',
      'Anti-theft design',
      'Multiple compartments'
    ],
    inStock: true,
    stockQuantity: 25
  },
  {
    id: 'p4',
    name: 'Running Shoes',
    price: 89.99,
    originalPrice: 119.99,
    images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop'],
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
    rating: 4.6,
    reviewCount: 156,
    category: 'Sports',
    description: 'Lightweight running shoes with responsive cushioning and breathable mesh upper. Designed for comfort and performance on every run.',
    features: [
      'Responsive cushioning',
      'Breathable mesh upper',
      'Durable rubber outsole',
      'Lightweight design',
      'Available in multiple colors'
    ],
    inStock: true,
    stockQuantity: 18
  },
  {
    id: 'p5',
    name: 'Coffee Maker',
    price: 129.99,
    images: ['https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=800&h=800&fit=crop'],
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&h=500&fit=crop',
    rating: 4.4,
    reviewCount: 92,
    category: 'Home & Garden',
    description: 'Programmable coffee maker with thermal carafe, brew strength control, and auto shut-off. Start your mornings with the perfect cup of coffee.',
    features: [
      '12-cup thermal carafe',
      'Programmable timer',
      'Brew strength control',
      'Auto shut-off',
      'Removable water reservoir'
    ],
    inStock: true,
    stockQuantity: 12
  },
  {
    id: 'p6',
    name: 'Sunglasses',
    price: 39.99,
    images: ['https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&h=800&fit=crop'],
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop',
    rating: 4.2,
    reviewCount: 74,
    category: 'Fashion',
    description: 'Stylish polarized sunglasses with UV400 protection. Perfect for driving, beach, and outdoor activities.',
    features: [
      'UV400 protection',
      'Polarized lenses',
      'Lightweight frame',
      'Scratch-resistant',
      'Includes carrying case'
    ],
    inStock: true,
    stockQuantity: 30
  },
  {
    id: 'p7',
    name: 'Bluetooth Speaker',
    price: 59.99,
    originalPrice: 79.99,
    images: ['https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&h=800&fit=crop'],
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop',
    rating: 4.7,
    reviewCount: 189,
    category: 'Electronics',
    description: 'Portable Bluetooth speaker with 360° sound, waterproof design, and 20-hour battery life. Perfect for parties, outdoor adventures, and more.',
    features: [
      '360° surround sound',
      'IPX7 waterproof',
      '20-hour battery life',
      'Bluetooth 5.0',
      'Built-in microphone',
      'Compact & portable'
    ],
    inStock: true,
    stockQuantity: 22
  },
  {
    id: 'p8',
    name: 'Yoga Mat',
    price: 24.99,
    images: ['https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&h=800&fit=crop'],
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&h=500&fit=crop',
    rating: 4.5,
    reviewCount: 134,
    category: 'Sports',
    description: 'Non-slip yoga mat with extra cushioning for comfort. Eco-friendly TPE material, perfect for yoga, pilates, and floor exercises.',
    features: [
      'Non-slip surface',
      'Extra thick (6mm)',
      'Eco-friendly TPE',
      'Lightweight & portable',
      'Includes carrying strap'
    ],
    inStock: true,
    stockQuantity: 40
  },
  {
    id: 'p9',
    name: 'Desk Lamp',
    price: 34.99,
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&h=800&fit=crop'],
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop',
    rating: 4.3,
    reviewCount: 67,
    category: 'Home & Garden',
    description: 'LED desk lamp with adjustable brightness, color temperature control, and USB charging port. Energy-efficient and eye-caring design.',
    features: [
      'Adjustable brightness',
      'Color temperature control',
      'USB charging port',
      'Energy-efficient LED',
      'Flexible gooseneck',
      'Touch control'
    ],
    inStock: true,
    stockQuantity: 16
  }
]

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id)
}

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'All') return products
  return products.filter(p => p.category === category)
}
