import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

const featuredProducts = products.slice(0, 3)

export default function HomePage() {
  return (
    <main>
      {/* Hero Section with Gradient */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-24 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Welcome to <span className="text-yellow-300">ShopHub</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-indigo-100 max-w-2xl mx-auto">
            Discover amazing products at unbeatable prices. Shop with confidence and style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="inline-flex items-center justify-center bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all shadow-xl"
            >
              Shop Now
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-indigo-600 transform hover:scale-105 transition-all"
            >
              Browse Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Check out our handpicked selection of premium products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/products" 
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold text-lg group"
          >
            View All Products
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Shop by Category</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Electronics', icon: '💻', color: 'from-blue-400 to-blue-600' },
              { name: 'Fashion', icon: '👔', color: 'from-pink-400 to-pink-600' },
              { name: 'Home & Garden', icon: '🏡', color: 'from-green-400 to-green-600' },
              { name: 'Sports', icon: '⚽', color: 'from-orange-400 to-orange-600' }
            ].map(category => (
              <Link
                key={category.name}
                to="/products"
                className="group relative bg-white rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                <div className="relative">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform">{category.icon}</div>
                  <h3 className="font-bold text-gray-900 text-lg">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { icon: '🚚', title: 'Free Shipping', desc: 'On orders over $50', color: 'bg-blue-50' },
            { icon: '🔒', title: 'Secure Payment', desc: '100% secure transactions', color: 'bg-green-50' },
            { icon: '↩️', title: 'Easy Returns', desc: '30-day return policy', color: 'bg-purple-50' }
          ].map((badge, index) => (
            <div key={index} className={`${badge.color} rounded-2xl p-8 text-center transform hover:scale-105 transition-transform`}>
              <div className="text-5xl mb-4">{badge.icon}</div>
              <h3 className="font-bold text-xl mb-2 text-gray-900">{badge.title}</h3>
              <p className="text-gray-600">{badge.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
