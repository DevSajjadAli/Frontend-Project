import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-white text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              ShopHub
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Your one-stop shop for quality products at great prices. Experience shopping like never before.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-indigo-600 rounded-full flex items-center justify-center transition-all transform hover:scale-110">
                <span className="text-xl">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-indigo-600 rounded-full flex items-center justify-center transition-all transform hover:scale-110">
                <span className="text-xl">𝕏</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-indigo-600 rounded-full flex items-center justify-center transition-all transform hover:scale-110">
                <span className="text-xl">in</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Shop</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition flex items-center group">
                <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                New Arrivals
              </a></li>
              <li><a href="#" className="hover:text-indigo-400 transition flex items-center group">
                <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                Best Sellers
              </a></li>
              <li><a href="#" className="hover:text-indigo-400 transition flex items-center group">
                <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                Sale
              </a></li>
              <li><a href="#" className="hover:text-indigo-400 transition flex items-center group">
                <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                Collections
              </a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition flex items-center group">
                <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                Contact Us
              </a></li>
              <li><a href="#" className="hover:text-indigo-400 transition flex items-center group">
                <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                FAQs
              </a></li>
              <li><a href="#" className="hover:text-indigo-400 transition flex items-center group">
                <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                Shipping Info
              </a></li>
              <li><a href="#" className="hover:text-indigo-400 transition flex items-center group">
                <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                Returns
              </a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition flex items-center group">
                <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                About Us
              </a></li>
              <li><a href="#" className="hover:text-indigo-400 transition flex items-center group">
                <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                Careers
              </a></li>
              <li><a href="#" className="hover:text-indigo-400 transition flex items-center group">
                <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                Privacy Policy
              </a></li>
              <li><a href="#" className="hover:text-indigo-400 transition flex items-center group">
                <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                Terms of Service
              </a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} ShopHub. All rights reserved.</p>
          <p className="text-sm text-gray-400 mt-4 md:mt-0">Made with ❤️ for amazing shoppers</p>
        </div>
      </div>
    </footer>
  )
}
