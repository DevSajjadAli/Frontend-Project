import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

const categories = ['All', 'Electronics', 'Fashion', 'Home & Garden', 'Sports']
const sortOptions = [
  { value: 'default', label: 'Default' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' }
]

export default function ProductListingPage() {
  const [searchParams] = useSearchParams()
  const searchQuery = searchParams.get('search') || ''
  
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('default')

  useEffect(() => {
    if (searchQuery) {
      setSelectedCategory('All') // Reset category when searching
    }
  }, [searchQuery])

  // Filter products by category and search
  let filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory)

  // Apply search filter
  if (searchQuery) {
    const query = searchQuery.toLowerCase()
    filteredProducts = filteredProducts.filter(p => 
      p.name.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query)
    )
  }

  // Sort products
  if (sortBy === 'price-low') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price)
  } else if (sortBy === 'price-high') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price)
  } else if (sortBy === 'rating') {
    filteredProducts = [...filteredProducts].sort((a, b) => (b.rating || 0) - (a.rating || 0))
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {searchQuery ? `Search results for "${searchQuery}"` : 'All Products'}
        </h1>
        <p className="text-gray-600 text-lg">
          Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
        </p>
      </div>

      {/* Filters and Sort */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          {/* Category Filter */}
          <div className="flex-1">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Filter by Category
            </label>
            <div className="flex flex-wrap gap-3">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2.5 rounded-xl font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Sort Dropdown */}
          <div className="lg:w-64">
            <label htmlFor="sort" className="block text-sm font-semibold text-gray-700 mb-3">
              Sort By
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white font-medium text-gray-700 cursor-pointer"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-2xl shadow-lg">
          <div className="text-7xl mb-6">🔍</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">No products found</h2>
          <p className="text-gray-600 mb-8 text-lg">
            {searchQuery
              ? `No results for "${searchQuery}". Try adjusting your search.`
              : 'Try selecting a different category.'}
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All')
            }}
            className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg transform hover:scale-105"
          >
            Clear Filters
          </button>
        </div>
      )}
    </main>
  )
}
