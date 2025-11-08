# GitHub Copilot Instructions - E-Commerce Frontend Project

## Project Overview

This is a modern e-commerce website frontend designed to provide an exceptional shopping experience through intuitive navigation, seamless checkout, and responsive design. The project demonstrates proficiency in building complex user interfaces, managing application state, and implementing industry-standard e-commerce patterns.

**Primary Goal:** Build a production-ready e-commerce platform that showcases advanced frontend development skills, modern design patterns, and best practices for online retail experiences.

## Tech Stack

### Core Technologies
- **React 18+** with functional components and hooks
- **TypeScript** for type safety and better developer experience
- **Tailwind CSS** or **Styled Components** for styling
- **React Router v6** for navigation and routing
- **Redux Toolkit** or **Zustand** for state management

### Additional Libraries
- **React Query** or **SWR** for data fetching and caching
- **Framer Motion** for smooth animations
- **React Hook Form** + **Yup/Zod** for form validation
- **Stripe/PayPal SDK** for payment integration (sandbox mode)
- **Axios** for API requests
- **React Toastify** for notifications

## E-Commerce Specific Guidelines

### Page Structure

#### 1. Homepage
```javascript
// Homepage should include:
- Hero section with featured products/promotions
- Category navigation cards
- Trending/Best-selling products section
- Featured collections
- Trust badges (secure checkout, free shipping, etc.)
- Newsletter signup
- Customer testimonials/reviews section
```

#### 2. Product Listing Page (PLP)
```javascript
// Product listing must include:
- Product grid/list view toggle
- Sidebar filters (category, price range, brand, rating, etc.)
- Sort options (price, popularity, newest, rating)
- Pagination or infinite scroll
- Active filter chips (removable)
- Product count display
- Breadcrumb navigation
- Loading skeletons during fetch

// Example structure:
function ProductListingPage() {
  const [filters, setFilters] = useState({
    category: [],
    priceRange: [0, 1000],
    brands: [],
    rating: 0,
  });
  const [sort, setSort] = useState('popularity');
  const [view, setView] = useState('grid'); // 'grid' or 'list'
  
  // Implementation
}
```

#### 3. Product Detail Page (PDP)
```javascript
// Product details must include:
- High-quality product images with zoom and gallery
- Product title, SKU, brand
- Current price, original price (if discounted), discount percentage
- Stock status and availability
- Product rating and review count
- Size/color/variant selector
- Quantity selector
- Add to cart button (with loading state)
- Add to wishlist button
- Product description (expandable sections)
- Specifications table
- Customer reviews section with filters
- Related products carousel
- Shipping information
- Return policy

// Example product card component:
function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} loading="lazy" />
        {product.discount && (
          <span className="discount-badge">-{product.discount}%</span>
        )}
        <button className="wishlist-btn" aria-label="Add to wishlist">
          <HeartIcon />
        </button>
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>
        <div className="product-rating">
          <StarRating rating={product.rating} />
          <span>({product.reviewCount})</span>
        </div>
        <div className="product-price">
          <span className="current-price">${product.price}</span>
          {product.originalPrice && (
            <span className="original-price">${product.originalPrice}</span>
          )}
        </div>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
}
```

#### 4. Shopping Cart
```javascript
// Shopping cart must include:
- List of cart items with images
- Quantity controls (+ / -)
- Remove item button
- Product variant display (size, color)
- Individual item subtotal
- Cart total calculation
- Discount code input field
- Free shipping threshold indicator
- Estimated delivery date
- Continue shopping link
- Proceed to checkout button
- Empty cart state with CTA
- Save for later functionality

// Cart context pattern:
const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  
  const addToCart = useCallback((product, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  }, []);
  
  const removeFromCart = useCallback((productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  }, []);
  
  const updateQuantity = useCallback((productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  }, [removeFromCart]);
  
  const getCartTotal = useCallback(() => {
    return cartItems.reduce((total, item) => 
      total + (item.price * item.quantity), 0
    );
  }, [cartItems]);
  
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  
  return (
    <CartContext.Provider value={{
      cartItems,
      cartCount,
      addToCart,
      removeFromCart,
      updateQuantity,
      getCartTotal,
    }}>
      {children}
    </CartContext.Provider>
  );
}
```

#### 5. Checkout Process
```javascript
// Multi-step checkout (3 steps preferred):
// Step 1: Shipping Information
- Email address
- Full name
- Shipping address (with autocomplete)
- Phone number
- Delivery instructions (optional)

// Step 2: Shipping Method
- List of available shipping options
- Estimated delivery dates
- Shipping costs
- Selected method highlighted

// Step 3: Payment
- Payment method selection (Credit Card, PayPal, etc.)
- Card details form with validation
- Billing address (same as shipping checkbox)
- Order summary sidebar (always visible)
- Terms and conditions checkbox
- Place order button

// Checkout optimization best practices:
- Progress indicator showing current step
- Ability to edit previous steps
- Form autofill enabled
- Real-time validation with helpful error messages
- Save address for future orders
- Guest checkout option
- Loading state during payment processing
- Security badges and trust signals
- Mobile-optimized design

// Example checkout form:
function CheckoutForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [step, setStep] = useState(1);
  
  return (
    <div className="checkout-container">
      <CheckoutProgress currentStep={step} />
      
      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 1 && <ShippingForm register={register} errors={errors} />}
        {step === 2 && <ShippingMethod />}
        {step === 3 && <PaymentForm register={register} errors={errors} />}
        
        <CheckoutActions step={step} setStep={setStep} />
      </form>
      
      <OrderSummary />
    </div>
  );
}
```

#### 6. User Account Pages
```javascript
// User account must include:
- Dashboard/Overview
- Order history with status
- Order details and tracking
- Saved addresses
- Payment methods
- Wishlist
- Profile settings
- Password change
- Email preferences
```

### Filter & Sort Implementation

```javascript
// Advanced filtering system:
function ProductFilters({ onFilterChange }) {
  const [filters, setFilters] = useState({
    categories: [],
    priceRange: [0, 1000],
    brands: [],
    rating: 0,
    inStock: false,
  });
  
  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };
  
  return (
    <aside className="filters-sidebar">
      {/* Category Filter */}
      <FilterSection title="Category">
        <CheckboxGroup
          options={categories}
          selected={filters.categories}
          onChange={(val) => handleFilterChange('categories', val)}
        />
      </FilterSection>
      
      {/* Price Range Filter */}
      <FilterSection title="Price Range">
        <PriceRangeSlider
          min={0}
          max={1000}
          value={filters.priceRange}
          onChange={(val) => handleFilterChange('priceRange', val)}
        />
      </FilterSection>
      
      {/* Brand Filter */}
      <FilterSection title="Brand">
        <CheckboxGroup
          options={brands}
          selected={filters.brands}
          onChange={(val) => handleFilterChange('brands', val)}
        />
      </FilterSection>
      
      {/* Rating Filter */}
      <FilterSection title="Customer Rating">
        <RatingFilter
          value={filters.rating}
          onChange={(val) => handleFilterChange('rating', val)}
        />
      </FilterSection>
      
      {/* Availability Filter */}
      <FilterSection title="Availability">
        <Checkbox
          label="In Stock Only"
          checked={filters.inStock}
          onChange={(val) => handleFilterChange('inStock', val)}
        />
      </FilterSection>
      
      <button onClick={() => setFilters(defaultFilters)}>
        Clear All Filters
      </button>
    </aside>
  );
}

// Sort functionality:
const sortOptions = [
  { value: 'popularity', label: 'Most Popular' },
  { value: 'price-low-high', label: 'Price: Low to High' },
  { value: 'price-high-low', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest Arrivals' },
];

function ProductSort({ currentSort, onSortChange }) {
  return (
    <select
      value={currentSort}
      onChange={(e) => onSortChange(e.target.value)}
      className="sort-dropdown"
    >
      {sortOptions.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
```

### Search Functionality

```javascript
// Advanced search with suggestions:
function SearchBar() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  
  const debouncedQuery = useDebounce(query, 300);
  
  useEffect(() => {
    if (debouncedQuery) {
      fetchSuggestions(debouncedQuery).then(setSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [debouncedQuery]);
  
  return (
    <div className="search-container">
      <input
        type="search"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
      />
      
      {isOpen && suggestions.length > 0 && (
        <div className="search-suggestions">
          {suggestions.map(item => (
            <SearchSuggestion key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
```

### Authentication & User Management

```javascript
// Authentication pattern:
function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      verifyToken(token).then(userData => {
        setUser(userData);
        setLoading(false);
      }).catch(() => {
        localStorage.removeItem('authToken');
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, []);
  
  const login = async (email, password) => {
    const response = await api.post('/auth/login', { email, password });
    localStorage.setItem('authToken', response.token);
    setUser(response.user);
    return response;
  };
  
  const register = async (userData) => {
    const response = await api.post('/auth/register', userData);
    localStorage.setItem('authToken', response.token);
    setUser(response.user);
    return response;
  };
  
  const logout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
  };
  
  return { user, loading, login, register, logout };
}

// Social login integration:
function SocialLogin() {
  const handleGoogleLogin = () => {
    // Implement Google OAuth
  };
  
  const handleFacebookLogin = () => {
    // Implement Facebook OAuth
  };
  
  return (
    <div className="social-login">
      <button onClick={handleGoogleLogin} className="google-login-btn">
        <GoogleIcon /> Continue with Google
      </button>
      <button onClick={handleFacebookLogin} className="facebook-login-btn">
        <FacebookIcon /> Continue with Facebook
      </button>
    </div>
  );
}
```

## UI/UX Best Practices for E-Commerce

### Design Principles
1. **Clear Visual Hierarchy**: Most important elements (CTA buttons, prices) should stand out
2. **Consistent Layout**: Maintain same structure across product cards and pages
3. **Whitespace**: Don't overcrowd - give elements room to breathe
4. **High-Quality Images**: Product images should be crisp, zoomable, multiple angles
5. **Trust Signals**: Display security badges, customer reviews, return policy prominently

### Navigation Patterns
```javascript
// Header navigation structure:
<header className="header">
  <div className="header-top">
    <Logo />
    <SearchBar />
    <div className="header-actions">
      <WishlistIcon count={wishlistCount} />
      <CartIcon count={cartCount} />
      <UserAccount />
    </div>
  </div>
  <nav className="main-nav">
    <CategoryMenu categories={categories} />
    <NavLinks>
      <NavLink to="/deals">Deals</NavLink>
      <NavLink to="/new-arrivals">New Arrivals</NavLink>
      <NavLink to="/brands">Brands</NavLink>
    </NavLinks>
  </nav>
</header>

// Breadcrumb navigation:
function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      {items.map((item, index) => (
        <span key={index}>
          {index > 0 && <span className="separator">/</span>}
          {index === items.length - 1 ? (
            <span className="current">{item.label}</span>
          ) : (
            <Link to={item.path}>{item.label}</Link>
          )}
        </span>
      ))}
    </nav>
  );
}
```

### Mobile-First E-Commerce Design
```javascript
// Mobile considerations:
- Touch-friendly buttons (minimum 44x44px)
- Simplified filters (bottom sheet/drawer on mobile)
- Sticky "Add to Cart" button on product pages
- Mobile-optimized image galleries (swipeable)
- Hamburger menu for categories
- One-column layout for cart items
- Quick view modal for products
- Mobile payment options (Apple Pay, Google Pay)
```

### Loading States & Skeletons
```javascript
// Product card skeleton:
function ProductCardSkeleton() {
  return (
    <div className="product-card skeleton">
      <div className="skeleton-image" />
      <div className="skeleton-title" />
      <div className="skeleton-price" />
      <div className="skeleton-button" />
    </div>
  );
}

// Grid skeleton:
function ProductGridSkeleton({ count = 12 }) {
  return (
    <div className="product-grid">
      {Array.from({ length: count }).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
}
```

### Error & Empty States
```javascript
// Empty cart state:
function EmptyCart() {
  return (
    <div className="empty-state">
      <EmptyCartIcon />
      <h2>Your cart is empty</h2>
      <p>Looks like you haven't added anything to your cart yet</p>
      <Link to="/shop" className="btn-primary">
        Start Shopping
      </Link>
    </div>
  );
}

// No products found:
function NoProductsFound() {
  return (
    <div className="empty-state">
      <SearchIcon />
      <h2>No products found</h2>
      <p>Try adjusting your filters or search query</p>
      <button onClick={clearFilters}>Clear All Filters</button>
    </div>
  );
}

// Error boundary for product images:
function ProductImage({ src, alt }) {
  const [error, setError] = useState(false);
  
  if (error) {
    return (
      <div className="product-image-error">
        <ImagePlaceholderIcon />
      </div>
    );
  }
  
  return (
    <img
      src={src}
      alt={alt}
      onError={() => setError(true)}
      loading="lazy"
    />
  );
}
```

## Performance Optimization

### Image Optimization
```javascript
// Lazy loading images:
import { LazyLoadImage } from 'react-lazy-load-image-component';

function ProductImage({ src, alt }) {
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      effect="blur"
      placeholderSrc={lowResSrc}
    />
  );
}

// Multiple image sizes:
function ResponsiveProductImage({ product }) {
  return (
    <picture>
      <source
        media="(min-width: 1024px)"
        srcSet={product.imageLarge}
      />
      <source
        media="(min-width: 768px)"
        srcSet={product.imageMedium}
      />
      <img
        src={product.imageSmall}
        alt={product.name}
        loading="lazy"
      />
    </picture>
  );
}
```

### Code Splitting & Lazy Loading
```javascript
// Route-based code splitting:
const HomePage = lazy(() => import('./pages/HomePage'));
const ProductPage = lazy(() => import('./pages/ProductPage'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </Suspense>
  );
}
```

### Caching Strategies
```javascript
// React Query for data caching:
function useProducts(filters) {
  return useQuery({
    queryKey: ['products', filters],
    queryFn: () => fetchProducts(filters),
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  });
}

// Persist cart in localStorage:
function usePersistedCart() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });
  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  
  return [cart, setCart];
}
```

## Accessibility for E-Commerce

```javascript
// Accessible product card:
function AccessibleProductCard({ product }) {
  return (
    <article className="product-card">
      <Link
        to={`/product/${product.id}`}
        aria-label={`${product.name} - $${product.price}`}
      >
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <div aria-label={`Rating: ${product.rating} out of 5 stars`}>
          <StarRating rating={product.rating} />
        </div>
        <p className="price">
          <span className="sr-only">Price:</span>
          ${product.price}
        </p>
      </Link>
      <button
        onClick={() => addToCart(product)}
        aria-label={`Add ${product.name} to cart`}
      >
        Add to Cart
      </button>
    </article>
  );
}

// Keyboard navigation for filters:
function FilterCheckbox({ label, checked, onChange }) {
  return (
    <label className="filter-checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        onKeyPress={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            onChange(!checked);
          }
        }}
      />
      <span>{label}</span>
    </label>
  );
}

// Screen reader announcements:
function CartNotification({ message }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="sr-only"
    >
      {message}
    </div>
  );
}
```

## Security Best Practices

```javascript
// Never store sensitive data in localStorage:
// ❌ Bad:
localStorage.setItem('creditCard', cardNumber);

// ✅ Good:
// Credit card data should only be sent directly to payment processor

// Sanitize user inputs:
import DOMPurify from 'dompurify';

function ReviewForm() {
  const sanitizeInput = (input) => {
    return DOMPurify.sanitize(input);
  };
  
  const handleSubmit = (data) => {
    const sanitizedData = {
      ...data,
      review: sanitizeInput(data.review),
    };
    submitReview(sanitizedData);
  };
}

// HTTPS only for payment pages:
// Ensure all API calls use HTTPS
const API_BASE_URL = process.env.REACT_APP_API_URL;
if (!API_BASE_URL.startsWith('https://')) {
  console.error('API must use HTTPS');
}
```

## Testing E-Commerce Features

```javascript
// Test shopping cart functionality:
describe('Shopping Cart', () => {
  test('adds product to cart', () => {
    render(<ProductCard product={mockProduct} />);
    const addButton = screen.getByRole('button', { name: /add to cart/i });
    fireEvent.click(addButton);
    expect(screen.getByText('1 item in cart')).toBeInTheDocument();
  });
  
  test('updates quantity', () => {
    render(<CartItem item={mockCartItem} />);
    const increaseButton = screen.getByLabelText('Increase quantity');
    fireEvent.click(increaseButton);
    expect(screen.getByText('Quantity: 2')).toBeInTheDocument();
  });
  
  test('calculates total correctly', () => {
    render(<Cart items={mockCartItems} />);
    const expectedTotal = mockCartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    expect(screen.getByText(`Total: $${expectedTotal}`)).toBeInTheDocument();
  });
});

// Test filter functionality:
describe('Product Filters', () => {
  test('filters by category', async () => {
    render(<ProductListingPage />);
    const categoryFilter = screen.getByLabelText('Electronics');
    fireEvent.click(categoryFilter);
    await waitFor(() => {
      const products = screen.getAllByRole('article');
      products.forEach(product => {
        expect(product).toHaveAttribute('data-category', 'electronics');
      });
    });
  });
});
```

## File Structure for E-Commerce

```
src/
├── components/
│   ├── common/
│   │   ├── Button/
│   │   ├── Input/
│   │   ├── Modal/
│   │   └── Loading/
│   ├── layout/
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── Sidebar/
│   │   └── Breadcrumb/
│   ├── product/
│   │   ├── ProductCard/
│   │   ├── ProductGrid/
│   │   ├── ProductFilters/
│   │   ├── ProductSort/
│   │   └── ProductDetails/
│   ├── cart/
│   │   ├── CartItem/
│   │   ├── CartSummary/
│   │   └── CartDrawer/
│   └── checkout/
│       ├── CheckoutForm/
│       ├── ShippingForm/
│       ├── PaymentForm/
│       └── OrderSummary/
├── pages/
│   ├── HomePage/
│   ├── ProductListingPage/
│   ├── ProductDetailPage/
│   ├── CartPage/
│   ├── CheckoutPage/
│   ├── OrderConfirmationPage/
│   └── UserAccountPage/
├── context/
│   ├── AuthContext.jsx
│   ├── CartContext.jsx
│   └── WishlistContext.jsx
├── hooks/
│   ├── useCart.js
│   ├── useAuth.js
│   ├── useProducts.js
│   └── useDebounce.js
├── services/
│   ├── api.js
│   ├── auth.service.js
│   ├── product.service.js
│   └── order.service.js
├── utils/
│   ├── formatters.js
│   ├── validators.js
│   └── constants.js
└── types/
    ├── product.types.ts
    ├── cart.types.ts
    └── user.types.ts
```

## E-Commerce Specific Conventions

### Naming Conventions
- Product IDs: Use SKU when available, otherwise UUID
- Cart items: Include product ID, quantity, selected variants
- Orders: Include order number (readable format: ORD-20251108-001)
- Categories: Use slug format (e.g., 'mens-clothing', 'electronics')

### Data Structures
```typescript
// Product interface:
interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  images: string[];
  category: string;
  brand: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockQuantity: number;
  variants?: ProductVariant[];
  specifications: Record<string, string>;
  tags: string[];
}

// Cart item interface:
interface CartItem {
  productId: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  selectedVariant?: {
    size?: string;
    color?: string;
  };
  maxQuantity: number;
}

// Order interface:
interface Order {
  orderNumber: string;
  userId: string;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: Address;
  paymentMethod: string;
  createdAt: Date;
  estimatedDelivery: Date;
}
```

## Quality Checklist for E-Commerce

Before considering a feature complete:
- [ ] All product images load correctly with lazy loading
- [ ] Cart persists across browser sessions
- [ ] Filters work correctly and can be cleared
- [ ] Sort functionality works for all options
- [ ] Mobile responsive on all pages
- [ ] Checkout flow is smooth and error-free
- [ ] Form validation is real-time and helpful
- [ ] Loading states are implemented everywhere
- [ ] Empty states are user-friendly
- [ ] Error handling is graceful
- [ ] Accessibility requirements met (WCAG AA)
- [ ] Performance optimized (Lighthouse score 90+)
- [ ] SEO meta tags on all pages
- [ ] Analytics events tracked
- [ ] Cross-browser tested

## Additional Resources

- Stripe Checkout Documentation
- React Query Documentation
- E-commerce UI Patterns (UI-Patterns.com)
- Baymard Institute (E-commerce UX research)
- Web.dev (Performance optimization)

---

**Last Updated:** November 2025

**Purpose:** These instructions guide GitHub Copilot in generating high-quality, production-ready e-commerce frontend code following industry best practices and modern UX patterns that drive conversions and provide exceptional shopping experiences.