import React, { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { motion } from 'framer-motion'
import { getProductById } from '../data/products'

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  
  const product = getProductById(id || '')
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <Link to="/products" className="text-indigo-600 hover:text-indigo-700">
          Back to products
        </Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart(product, quantity)
    // Optionally navigate to cart or show a modal
  }

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex mb-8 text-sm">
        <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
        <span className="mx-2 text-gray-400">/</span>
        <Link to="/products" className="text-gray-500 hover:text-gray-700">Products</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-900">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div>
          <motion.div 
            className="bg-white rounded-lg overflow-hidden mb-4 aspect-square"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={selectedImage}
          >
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition ${
                    selectedImage === index
                      ? 'border-indigo-600'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center">
              <span className="text-yellow-500 text-xl">★</span>
              <span className="ml-1 font-medium">{product.rating}</span>
            </div>
            <span className="text-gray-500">({product.reviewCount} reviews)</span>
          </div>

          {/* Price */}
          <div className="mb-6">
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-gray-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm font-semibold">
                    Save {discount}%
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Stock Status */}
          <div className="mb-6">
            {product.inStock ? (
              <p className="text-green-600 font-medium flex items-center">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                In Stock ({product.stockQuantity} available)
              </p>
            ) : (
              <p className="text-red-600 font-medium">Out of Stock</p>
            )}
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Description</h3>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          {/* Features */}
          {product.features && (
            <div className="mb-8">
              <h3 className="font-semibold text-lg mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-indigo-600 mr-2">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Quantity Selector */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quantity
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg w-32">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 hover:bg-gray-100 transition"
                disabled={quantity <= 1}
              >
                −
              </button>
              <span className="flex-1 text-center font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(Math.min(product.stockQuantity || 99, quantity + 1))}
                className="px-4 py-2 hover:bg-gray-100 transition"
                disabled={quantity >= (product.stockQuantity || 99)}
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <div className="space-y-3">
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`w-full py-4 rounded-lg font-semibold text-lg transition ${
                product.inStock
                  ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>

            <button
              onClick={() => navigate('/cart')}
              className="w-full py-4 rounded-lg font-semibold text-lg border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition"
            >
              View Cart
            </button>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 pt-8 border-t grid grid-cols-3 gap-4 text-center text-sm">
            <div>
              <div className="text-2xl mb-1">🚚</div>
              <p className="text-gray-600">Free Shipping</p>
            </div>
            <div>
              <div className="text-2xl mb-1">↩️</div>
              <p className="text-gray-600">30-Day Returns</p>
            </div>
            <div>
              <div className="text-2xl mb-1">🔒</div>
              <p className="text-gray-600">Secure Payment</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section - Can be added later */}
    </main>
  )
}
