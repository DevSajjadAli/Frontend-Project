import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function CartPage() {
  const { cartItems, cartCount, updateQuantity, removeFromCart, getCartTotal } = useCart()

  if (cartCount === 0) {
    return (
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center bg-white rounded-3xl p-16 shadow-xl">
          <div className="text-8xl mb-6 animate-bounce">🛒</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Looks like you haven't added anything to your cart yet
          </p>
          <Link
            to="/products"
            className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all shadow-lg"
          >
            Start Shopping
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-10">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {cartItems.map(item => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6 flex gap-6"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 object-cover rounded-xl"
                />

                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{item.name}</h3>
                  <p className="text-indigo-600 font-semibold text-lg mb-4">${item.price.toFixed(2)}</p>

                  <div className="flex items-center gap-6">
                    {/* Quantity Controls */}
                    <div className="flex items-center border-2 border-gray-200 rounded-xl overflow-hidden">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-4 py-2 hover:bg-gray-100 transition font-bold text-gray-600"
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="px-6 py-2 font-semibold text-gray-900 border-x-2 border-gray-200">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-4 py-2 hover:bg-gray-100 transition font-bold text-gray-600"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 hover:text-red-700 font-medium flex items-center gap-2 hover:bg-red-50 px-4 py-2 rounded-lg transition"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      Remove
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-bold text-gray-900 text-xl">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-xl p-8 sticky top-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-700">
                <span>Subtotal ({cartCount} items)</span>
                <span className="font-semibold">${getCartTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Shipping</span>
                <span className="text-green-600 font-semibold">Free</span>
              </div>
              <div className="border-t-2 border-gray-200 pt-4 flex justify-between font-bold text-gray-900 text-xl">
                <span>Total</span>
                <span className="text-indigo-600">${getCartTotal().toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 mb-4">
              Proceed to Checkout
            </button>

            <Link
              to="/products"
              className="block text-center text-indigo-600 hover:text-indigo-700 font-semibold py-3"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
