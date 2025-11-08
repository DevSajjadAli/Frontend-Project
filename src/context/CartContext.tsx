import React, { createContext, useContext, useState, useCallback, ReactNode, useEffect } from 'react'
import toast from 'react-hot-toast'

type Product = {
  id: string
  name: string
  price: number
  image: string
  rating?: number
  reviewCount?: number
}

type CartItem = Product & {
  quantity: number
}

type CartContextType = {
  cartItems: CartItem[]
  cartCount: number
  addToCart: (product: Product, quantity?: number) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  getCartTotal: () => number
  clearCart: () => void
}

const CartContext = createContext<CartContextType | null>(null)

const CART_STORAGE_KEY = 'shophub_cart'

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    // Load cart from localStorage on mount
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY)
      return savedCart ? JSON.parse(savedCart) : []
    } catch (error) {
      console.error('Error loading cart from localStorage:', error)
      return []
    }
  })

  // Persist cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems))
    } catch (error) {
      console.error('Error saving cart to localStorage:', error)
    }
  }, [cartItems])

  const addToCart = useCallback((product: Product, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        toast.success(`Updated ${product.name} quantity`)
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      toast.success(`${product.name} added to cart`)
      return [...prev, { ...product, quantity }]
    })
  }, [])

  const removeFromCart = useCallback((productId: string) => {
    setCartItems(prev => {
      const item = prev.find(i => i.id === productId)
      if (item) {
        toast.success(`${item.name} removed from cart`)
      }
      return prev.filter(item => item.id !== productId)
    })
  }, [])

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    )
  }, [removeFromCart])

  const getCartTotal = useCallback(() => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }, [cartItems])

  const clearCart = useCallback(() => {
    setCartItems([])
  }, [])

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        addToCart,
        removeFromCart,
        updateQuantity,
        getCartTotal,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
