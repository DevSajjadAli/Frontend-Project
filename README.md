# Frontend Project - E-Commerce Store

A modern, fully functional e-commerce website built with **React 18**, **TypeScript**, **Vite**, and **Tailwind CSS**. This project showcases advanced frontend development patterns, state management, animations, and responsive design for online retail experiences.

## 🚀 Features

### Core Features
- ✅ **Multi-page navigation** with React Router v6
- ✅ **Shopping cart** with add/remove/update quantity functionality
- ✅ **Cart persistence** using localStorage (survives page refreshes)
- ✅ **Product listing** with category filters and sorting
- ✅ **Product detail pages** with image galleries and full descriptions
- ✅ **Search functionality** with real-time filtering
- ✅ **Toast notifications** for user feedback (add to cart, remove items, etc.)
- ✅ **Responsive design** optimized for mobile, tablet, and desktop
- ✅ **Smooth animations** using Framer Motion
- ✅ **Loading skeletons** for better perceived performance

### UI/UX Enhancements
- ✅ **Discount badges** showing percentage off
- ✅ **Stock indicators** on product pages
- ✅ **Image galleries** with thumbnail navigation
- ✅ **Quantity selectors** with stock limits
- ✅ **Breadcrumb navigation** for better UX
- ✅ **Empty cart state** with clear CTAs
- ✅ **Sticky header** with cart badge
- ✅ **Search bar** in header with autocomplete
- ✅ **Product ratings** and review counts

### Technical Implementation
- ✅ **TypeScript** for type safety
- ✅ **Context API** for global cart state management
- ✅ **Custom hooks** (useDebounce, useCart)
- ✅ **Centralized product data** with type definitions
- ✅ **Utility functions** for reusable logic
- ✅ **Component composition** for maintainability

## 📦 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Nav with search & cart badge
│   │   └── Footer.tsx          # Site footer
│   ├── ProductCard.tsx         # Reusable product component
│   └── LoadingSkeleton.tsx     # Loading state components
├── context/
│   └── CartContext.tsx         # Global cart state with localStorage
├── data/
│   └── products.ts             # Centralized product data & types
├── hooks/
│   └── useDebounce.ts          # Debounce hook for search
├── pages/
│   ├── HomePage.tsx            # Landing page
│   ├── ProductListingPage.tsx  # All products with filters
│   ├── ProductDetailPage.tsx   # Individual product view
│   └── CartPage.tsx            # Shopping cart
├── App.tsx                     # Router, CartProvider & Toaster
├── main.tsx                    # React entry point
└── index.css                   # Global styles with Tailwind
```

## 🛠️ Setup Instructions (Windows PowerShell)

### Prerequisites
- **Node.js** v16+ and **npm** installed

### Installation

1. **Navigate to the project folder:**
   ```powershell
   cd "e:\sajjad's projects\Frontend Project"
   ```

2. **Install dependencies:**
   ```powershell
   npm install
   ```

3. **Start the development server:**
   ```powershell
   npm run dev
   ```

4. **Open your browser and visit:**
   ```
   http://localhost:5173
   ```

### Available Scripts

- `npm run dev` — Start the Vite development server (hot reload enabled)
- `npm run build` — Build for production
- `npm run preview` — Preview the production build locally

## 🎯 Current Features

### HomePage
- Hero section with call-to-action
- Featured products carousel
- Category navigation cards
- Trust badges (free shipping, secure payment, easy returns)

### Product Listing Page
- **Search functionality** with URL parameters
- Filter by category (Electronics, Fashion, Home & Garden, Sports)
- Sort by price (low to high, high to low) and rating
- Responsive product grid (1-4 columns based on screen size)
- Product cards with images, ratings, discount badges, and "Add to Cart"
- Shows product count and search query
- Empty state when no products match filters

### Product Detail Page (NEW!)
- **Image gallery** with thumbnail navigation and smooth transitions
- Full product description and specifications
- **Key features list** with checkmarks
- Product rating and review count
- **Price with discount** display (original price crossed out)
- **Stock status indicator** with quantity available
- **Quantity selector** with min/max validation
- Large "Add to Cart" button with disabled state for out-of-stock
- "View Cart" button for quick checkout
- **Breadcrumb navigation** for easy back-navigation
- Trust badges (free shipping, returns, secure payment)
- **Framer Motion animations** for image transitions

### Shopping Cart
- View all cart items with images
- Adjust quantity with +/- buttons
- Remove items from cart with confirmation toast
- Real-time cart total calculation
- **Cart persists** across page refreshes (localStorage)
- Empty cart state with CTA to shop
- Sticky order summary sidebar
- Free shipping indicator
- "Continue Shopping" link

### Header
- **Search bar** for finding products (desktop)
- Navigation links (Home, Products, About)
- **Cart badge** showing item count with animation
- Sticky positioning for always-visible navigation
- Responsive design with mobile menu (ready for expansion)

### Cart Context with localStorage
- Global state management for cart
- **Automatic persistence** to localStorage
- **Toast notifications** on cart actions:
  - "Product added to cart"
  - "Updated product quantity"
  - "Product removed from cart"
- Add to cart, update quantity, remove items, clear cart
- Cart badge updates automatically
- Handles localStorage errors gracefully

## 🔧 Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI library with hooks |
| **TypeScript** | Type safety |
| **Vite** | Lightning-fast build tool |
| **React Router v6** | Client-side routing |
| **Tailwind CSS** | Utility-first styling |
| **Context API** | State management |
| **React Hot Toast** | Toast notifications |
| **Framer Motion** | Smooth animations |
| **localStorage API** | Cart persistence |

## 🧭 Next Steps

- [ ] Add product detail page (PDP) with variant selection
- [ ] Implement checkout flow (shipping, payment)
- [ ] Add user authentication (login/register)
- [ ] Integrate a backend API for real product data
- [ ] Add wishlist functionality
- [ ] Implement search with autocomplete
- [ ] Add product reviews and ratings
- [ ] Set up Redux Toolkit or Zustand for advanced state management
- [ ] Add animations with Framer Motion
- [ ] Implement form validation with React Hook Form + Zod
- [ ] Add unit tests with Vitest and React Testing Library

## 📝 Notes

- All TypeScript errors visible in the editor before `npm install` are normal and will resolve after dependencies are installed.
- The dev server runs on port **5173** by default (configurable in `vite.config.ts`).
- Product images use Unsplash placeholder images for demonstration.
- Cart state is currently in-memory; consider adding `localStorage` persistence.

## 🎨 Design Principles

This project follows e-commerce best practices:
- Clear visual hierarchy with prominent CTAs
- Consistent layout across pages
- High-quality product images
- Trust signals (badges, secure checkout)
- Mobile-first responsive design
- Accessible components (semantic HTML, ARIA labels)

---

**Built with ❤️ using modern frontend technologies**