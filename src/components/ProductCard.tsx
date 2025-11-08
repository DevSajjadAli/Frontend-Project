import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

type Product = {
  id: string
  name: string
  price: number
  image: string
  rating?: number
  reviewCount?: number
  originalPrice?: number
}

type ProductCardProps = {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault() // Prevent navigation when clicking Add to Cart
    addToCart(product, 1)
  }

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <Link to={`/product/${product.id}`} className="group">
      <article className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col transform hover:-translate-y-1">
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
          
          {/* Gradient Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {product.rating && (
            <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-semibold flex items-center shadow-lg">
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-gray-900">{product.rating.toFixed(1)}</span>
            </div>
          )}
          {discount > 0 && (
            <div className="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1.5 rounded-full text-sm font-bold shadow-lg">
              -{discount}%
            </div>
          )}
        </div>

        <div className="p-5 flex-1 flex flex-col">
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-lg group-hover:text-indigo-600 transition-colors">
            {product.name}
          </h3>
          
          {product.reviewCount && (
            <p className="text-sm text-gray-500 mb-3">
              {product.reviewCount} reviews
            </p>
          )}

          <div className="flex items-center gap-3 mt-auto mb-4">
            <div className="text-2xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </div>
            {product.originalPrice && (
              <div className="text-base text-gray-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </div>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 px-4 rounded-xl transition-all font-semibold shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
          >
            Add to Cart
          </button>
        </div>
      </article>
    </Link>
  )
}
