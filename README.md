# 🛒 Shopee VietNam Clone

> Dự án clone nâng cao của trang thương mại điện tử Shopee với đầy đủ tính năng e-commerce, được xây dựng như một ứng dụng thực tế để thực hành và showcase các công nghệ web hiện đại.

## 🌐 Live Demo

**🚀 [Xem Demo Trực Tiếp](https://shopee-clone-opal-rho.vercel.app/)**

*Website đã được deploy trên Vercel với auto-deployment từ GitHub*

## 📸 Preview

### 🏠 Trang chủ - Homepage
![Homepage](./image/homepage.png)
*Giao diện trang chủ với danh sách sản phẩm, filter sidebar, và hệ thống phân trang*

### 🔐 Đăng nhập - Login  
![Login](./image/login.png)
*Trang đăng nhập với form validation và responsive design*

### 📝 Đăng ký - Register
![Register](./image/register.png)  
*Trang đăng ký tài khoản với validation schema*

## 🚀 Tính năng chính

### 🛍️ Hệ thống sản phẩm
- **Danh sách sản phẩm**: Grid layout responsive với lazy loading
- **Tìm kiếm thông minh**: Debounced search với query highlighting
- **Lọc nâng cao**: Theo giá, rating, danh mục với URL persistence
- **Sắp xếp đa dạng**: Giá, độ phổ biến, đánh giá, ngày tạo
- **Phân trang**: Efficient pagination với query parameter management

### 🔍 Chi tiết sản phẩm
- **Gallery ảnh**: Image carousel với thumbnail navigation
- **Zoom effect**: Mouse hover zoom với natural scaling
- **Thông tin chi tiết**: Giá, đánh giá, mô tả với DOMPurify sanitization
- **Sản phẩm liên quan**: Recommendation system dựa trên category
- **Rating system**: Display product rating với visual stars
- **Quantity controller**: Add to cart với custom quantity picker

### 🛒 Giỏ hàng & Đơn hàng
- **Add to Cart**: Thêm sản phẩm với quantity controller
- **Quản lý giỏ hàng**: Update, delete items với optimistic updates
- **Bulk selection**: Chọn nhiều sản phẩm cùng lúc với checkbox
- **Tính toán thông minh**: Real-time total với discounts và shipping
- **Checkout process**: Complete purchase workflow
- **Empty cart state**: Friendly UI khi giỏ hàng trống
- **Product preview**: Thumbnail và thông tin chi tiết trong cart
- **Trạng thái đơn hàng**: Theo dõi từ pending đến delivered

### 📦 Quản lý đơn hàng
- **Lịch sử mua hàng**: Xem tất cả đơn hàng đã đặt
- **Filter theo trạng thái**:
  - Tất cả đơn hàng
  - Chờ xác nhận
  - Chờ lấy hàng  
  - Đang giao
  - Đã giao
  - Đã hủy
- **Chi tiết đơn hàng**: Thông tin sản phẩm, số lượng, giá tiền
- **Navigation tabs**: Sticky tabs cho easy filtering
- **Order summary**: Tổng giá trị từng đơn hàng

### 👤 Hệ thống người dùng
- **Authentication**: JWT-based với auto token refresh
- **Profile management**: 
  - Cập nhật thông tin cá nhân (tên, số điện thoại, địa chỉ)
  - Upload và preview avatar
  - Date picker cho ngày sinh
  - Form validation với Yup schema
- **Change password**: Đổi mật khẩu an toàn với confirmation
- **Protected routes**: Route guards với authentication checks
- **Session persistence**: Maintain login state across browser sessions
- **Avatar upload**: Image upload với preview và FormData

### 🌍 Internationalization (i18n)
- **Đa ngôn ngữ**: Hỗ trợ Tiếng Việt và English
- **Dynamic translation**: Real-time language switching
- **Namespaced translations**: Organized by feature (`home`, `product`)
- **Fallback language**: Vietnamese as default
- **Translation files**: JSON-based localization system

### 🔔 Notifications & Feedback
- **Toast notifications**: Success/Error messages với React Toastify
- **Position control**: Configurable toast positions
- **Auto dismiss**: Tự động ẩn sau timeout
- **Loading states**: Visual feedback cho async operations
- **Error boundaries**: Graceful error handling UI

## 🛠️ Công nghệ sử dụng

### ⚛️ Frontend Core
- **React 18** - Modern React với Concurrent Features & Suspense
- **TypeScript** - Static typing cho enterprise-level code safety
- **Vite** - Lightning-fast build tool với HMR và optimized bundling
- **React Router v6** - Declarative routing với nested routes và loaders

### 📊 State Management & Data
- **TanStack Query v4** - Powerful server state management với caching strategies
- **React Context** - Global client state cho authentication và UI preferences  
- **Immer** - Immutable state updates với producer pattern
- **Lodash** - Utility library cho data manipulation và functional programming

### 🎨 UI & Styling
- **Tailwind CSS** - Utility-first framework với custom design system
- **Framer Motion** - Production-ready animations và micro-interactions
- **Floating UI** - Advanced positioning cho tooltips và dropdowns
- **ClassNames** - Conditional CSS classes với clean syntax

### 📋 Forms & Validation
- **React Hook Form** - High-performance forms với minimal re-renders
- **Yup Schema** - Declarative validation với TypeScript support
- **@hookform/resolvers** - Seamless integration với validation libraries

### 🌐 HTTP & API
- **Axios** - Promise-based HTTP client với interceptors
- **HTTP Status Codes** - Standardized response handling
- **RESTful API** - Clean architecture với proper HTTP methods
- **Request/Response Interceptors** - Auto token injection và error handling

### 🔧 Development Tools
- **ESLint** - Advanced linting với custom rules và auto-fix
- **Prettier** - Opinionated code formatting với Tailwind plugin
- **Vite Plugin React SWC** - Fast refresh với Rust-based SWC compiler
- **Rollup Plugin Visualizer** - Bundle analysis và optimization insights
- **Vitest** - Unit testing framework với Vite integration

### 🔒 Security & Utilities
- **DOMPurify** - XSS protection cho user-generated HTML content
- **JWT Authentication** - Secure token-based authentication system
- **LocalStorage Management** - Encrypted storage cho sensitive data

## 🏗️ Kiến trúc nâng cao

### 📁 Project Structure
```
src/
├── @types/            # 🔷 TypeScript custom types
├── apis/              # 🌐 API layer với typed responses
│   ├── auth.api.ts    # Authentication endpoints
│   ├── category.api.ts# Category management
│   ├── product.api.ts # Product CRUD operations  
│   ├── purchase.api.ts# Shopping cart & orders
│   └── user.api.ts    # User profile & settings
├── assets/            # 🖼️ Static assets (images, icons)
├── components/        # 🧩 Reusable UI components
│   ├── Button/        # Custom button với variants
│   ├── CartHeader/    # Cart page header
│   ├── ErrorBoundary/ # Error handling wrapper
│   ├── Footer/        # App footer
│   ├── Header/        # Main navigation header
│   ├── Input/         # Form inputs với validation
│   ├── InputFile/     # File upload component
│   ├── InputNumber/   # Number input với controls
│   ├── InputV2/       # Enhanced input version
│   ├── NavHeader/     # Navigation component
│   ├── Pagination/    # Smart pagination component
│   ├── Popover/       # Floating UI popover
│   ├── ProductRating/ # Star rating display
│   ├── QuantityController/ # Product quantity management
│   └── RegisterHeader/# Registration page header
├── constants/         # 📋 App constants và configuration
│   ├── path.ts        # Route paths
│   ├── purchase.ts    # Purchase status constants
│   └── config.ts      # App configuration
├── contexts/          # 🔄 React Context providers
│   └── app.context.tsx# Global app state (auth, cart)
├── hooks/             # 🪝 Custom React hooks
│   ├── useQueryConfig.tsx    # Query configuration
│   ├── useQueryParams.tsx    # URL params management
│   └── useSearchProducts.tsx # Product search logic
├── i18n/              # 🌍 Internationalization
│   └── i18n.ts        # i18next configuration
├── layouts/           # 📐 Layout wrapper components
│   ├── MainLayout/    # Main app layout
│   ├── RegisterLayout/# Auth pages layout
│   ├── CartLayout/    # Cart page layout
│   └── UserLayout/    # User profile layout
├── locales/           # 🗣️ Translation files
│   ├── en/            # English translations
│   │   ├── home.json
│   │   └── product.json
│   └── vi/            # Vietnamese translations
│       ├── home.json
│       └── product.json
├── pages/             # 📄 Route-based page components
│   ├── Cart/          # Shopping cart page
│   ├── Login/         # Login page
│   ├── NotFound/      # 404 page
│   ├── ProductDetail/ # Product details page
│   ├── ProductList/   # Homepage với filters
│   ├── Register/      # Registration page
│   └── User/          # User management pages
│       ├── pages/
│       │   ├── Profile/        # User profile
│       │   ├── ChangePassword/ # Password change
│       │   └── HistoryPurchase/# Order history
│       ├── layouts/
│       │   └── UserLayout/     # User section layout
│       └── components/
│           └── DateSelect/     # Date picker component
├── types/             # 📝 TypeScript definitions
│   ├── auth.type.ts   # Authentication types
│   ├── product.type.ts# Product types
│   ├── purchase.type.ts# Purchase/Cart types
│   ├── user.type.ts   # User types
│   └── utils.type.ts  # Utility types
├── utils/             # 🛠️ Utility functions
│   ├── http.ts        # Axios instance với interceptors
│   ├── auth.ts        # LocalStorage management
│   ├── rules.ts       # Validation schemas
│   └── utils.ts       # Helper functions
├── App.tsx            # Main app component
├── main.tsx           # App entry point
└── useRouteElements.tsx # Route configuration
```

### ⚡ Performance Optimizations

#### 🎯 Query Strategies
- **Smart Caching**: Stale-while-revalidate với custom cache times
- **Query Key Hierarchy**: Efficient invalidation và data consistency
- **Background Refetching**: Keep data fresh without blocking UI
- **Optimistic Updates**: Immediate UI feedback với automatic rollback
- **Query Invalidation**: Automatic refetch after mutations

#### 🚀 Code Optimization  
- **Route-based Code Splitting**: Lazy loading cho reduced initial bundle
- **Component Lazy Loading**: Dynamic imports cho heavy components với `React.lazy()`
- **Suspense Boundaries**: Loading states cho async components
- **Bundle Analysis**: Rollup visualizer cho identifying optimization opportunities
- **Tree Shaking**: Dead code elimination với ES modules

#### 🖼️ Asset Optimization
- **Image Lazy Loading**: Intersection Observer API implementation
- **Responsive Images**: Multiple breakpoints với optimized sizes
- **Progressive Enhancement**: Graceful degradation cho slow connections
- **Avatar Preview**: Client-side image preview before upload

### 🛡️ Advanced Security

#### 🔐 Authentication Flow
```typescript
// JWT token lifecycle management
const authFlow = {
  login: () => storeTokens + setAuthContext,
  refresh: () => autoRefreshBeforeExpiry,
  logout: () => clearTokens + redirectToLogin,
  unauthorized: () => autoLogout + showLoginModal
}

// Token refresh mechanism
// 1. Request fails with 401 (token expired)
// 2. Check if it's expired token error
// 3. Queue the failed request
// 4. Refresh access token using refresh token
// 5. Retry all queued requests with new token
// 6. Prevent duplicate refresh token calls (singleton pattern)
```

#### 🛠️ Input Sanitization
```typescript
// Multi-layer protection
const securityLayers = {
  clientValidation: YupSchema,
  htmlSanitization: DOMPurify,
  xssProtection: CSPHeaders,
  apiValidation: ServerSideValidation
}
```

#### 🔒 Password Security
- **Change password**: Require old password verification
- **Password validation**: Min length, complexity requirements
- **Confirm password**: Match validation
- **Server-side validation**: Double check on backend

### 🎨 Advanced UI Patterns

#### 🛒 Shopping Cart System
```typescript
interface ExtendedPurchase extends Purchase {
  disabled: boolean    // Prevent multiple updates
  checked: boolean     // Bulk selection state
  loading?: boolean    // Individual item loading
}

// Cart features:
// - Bulk select/deselect với "Select All" checkbox
// - Individual item selection
// - Real-time price calculation
// - Quantity update với debouncing
// - Delete single/multiple items
// - Empty cart state với friendly UI
// - Navigate to product detail from cart
```

#### 🖼️ Image Gallery với Zoom
```typescript
const ImageZoom = {
  mouseMove: calculateZoomPosition,
  mouseLeave: resetImageTransform,
  touchGestures: mobileZoomSupport,
  keyboardNav: accessibilitySupport
}

// Image gallery features:
// - Thumbnail navigation (5 images visible)
// - Active image highlight
// - Next/Previous buttons
// - Natural zoom on hover (shows original size)
// - Smooth transitions
```

#### 📱 Responsive Design System
- **Mobile-first**: Progressive enhancement từ 320px
- **Breakpoint Strategy**: Tailwind's responsive utilities
- **Touch Optimization**: Gesture support và touch targets
- **Accessibility**: ARIA labels và keyboard navigation
- **Flexible layouts**: Grid và flexbox combinations

#### 📋 Form Patterns
```typescript
// Advanced form handling với React Hook Form
const formFeatures = {
  // Controller pattern cho custom inputs
  customInputs: Controller + InputNumber,
  
  // Form validation với Yup
  validation: yupResolver(schema),
  
  // Error handling từ server
  serverErrors: setError + server response,
  
  // File upload với preview
  fileUpload: useForm + useMemo + URL.createObjectURL,
  
  // Date selection
  dateOfBirth: DateSelect component
}
```

#### 🔄 State Management Patterns
```typescript
// AppContext - Global state
interface AppContextInterface {
  isAuthenticated: boolean           // Auth status
  profile: User | null               // User info
  extendedPurchases: ExtendedPurchase[] // Cart items
  setProfile: (user: User) => void   // Update profile
  reset: () => void                   // Clear all state
}

// LocalStorage sync
// - Auto sync auth state với localStorage
// - Profile persistence
// - Token management
// - Clear on logout
```

### 🌍 Internationalization Architecture

```typescript
// i18n configuration
const i18nSetup = {
  languages: ['vi', 'en'],
  defaultLanguage: 'vi',
  namespaces: ['home', 'product'],
  fallbackLng: 'vi',
  
  // Translation structure
  resources: {
    vi: { home: {...}, product: {...} },
    en: { home: {...}, product: {...} }
  }
}

// Usage in components
const { t } = useTranslation(['product'])
t('product:addToCart') // Access translations
```

### 🔄 Custom Hooks Architecture

#### useQueryConfig
```typescript
// Centralized query parameter management
// - Parse URL search params
// - Type-safe config object
// - Default values
// - Used across product listing, filters, pagination
```

#### useSearchProducts  
```typescript
// Search functionality
// - Form handling với React Hook Form
// - URL state management
// - Navigate with search params
// - Preserve other query params
```

#### useQueryParams
```typescript
// Generic URL params hook
// - Parse URLSearchParams
// - Return typed object
// - Reusable across app
```

## 🚀 Advanced Features Demo

### 🛍️ Smart Shopping Experience
- **Product Discovery**: Advanced filters với instant search results
- **Visual Feedback**: Loading skeletons và smooth transitions  
- **Error Recovery**: Retry mechanisms và offline support
- **Accessibility**: Screen reader support và keyboard shortcuts
- **URL State Management**: Shareable URLs với filter states
- **Smooth Navigation**: No page refresh, instant updates

### 📊 Data Management
- **Real-time Updates**: Optimistic UI với server synchronization
- **Cache Strategies**: Background refresh và stale data handling
- **Error Boundaries**: Graceful error handling với fallback UI
- **Performance Monitoring**: Query devtools và bundle analyzer
- **Request Queueing**: Handle concurrent requests properly
- **Data Normalization**: Efficient data structure với keyBy

### 🎯 User Experience
- **Progressive Enhancement**: Works without JavaScript
- **Offline Support**: Service worker cache strategies
- **Performance Budget**: Bundle size monitoring và optimization
- **A11y Compliance**: WCAG guidelines implementation
- **Toast Notifications**: Non-intrusive user feedback
- **Loading States**: Skeleton screens, spinners, progress indicators
- **Empty States**: Friendly messages when no data
- **Form Validation**: Real-time validation với helpful error messages

### 🎨 UI/UX Enhancements
- **Smooth Animations**: Framer Motion cho page transitions
- **Hover Effects**: Interactive feedback trên products
- **Sticky Navigation**: Persistent header và tabs
- **Responsive Images**: Optimized cho mọi screen size
- **Custom Scrollbar**: Styled scrollbars cho better aesthetics
- **Focus States**: Clear visual indicators cho keyboard navigation

### 🔐 Security Features
- **XSS Prevention**: DOMPurify sanitization cho HTML content
- **CSRF Protection**: Token-based request verification
- **Secure Storage**: Encrypted localStorage data
- **Input Validation**: Client và server-side validation
- **Rate Limiting**: Prevent abuse với request throttling
- **Secure Headers**: CORS, CSP implementation

### 📈 API Integration Features
- **Auto Retry**: Failed requests auto retry với exponential backoff
- **Request Cancellation**: Cancel outdated requests
- **Error Handling**: Centralized error handling với toast notifications
- **Loading States**: Track request status per mutation
- **Success Feedback**: Confirmation messages sau successful actions

## 🚦 Routing Architecture

### Route Protection
```typescript
// Protected routes - Chỉ cho user đã login
<ProtectedRoute />
  ├── /cart                    # Shopping cart
  ├── /user                    # User section
  │   ├── /user/profile        # Edit profile
  │   ├── /user/password       # Change password
  │   └── /user/purchase       # Order history

// Rejected routes - Chỉ cho guest users
<RejectedRoute />
  ├── /login                   # Login page
  └── /register                # Register page

// Public routes - Cho tất cả users
├── /                          # Homepage (Product list)
├── /:nameId                   # Product detail
└── /*                         # 404 Not Found
```

### Route Features
- **Nested Routes**: User section với sub-routes
- **Dynamic Routes**: Product detail với nameId parameter
- **Route Guards**: Authentication-based access control
- **Lazy Loading**: Code splitting per route với Suspense
- **Layout Wrappers**: Different layouts cho different sections

## 📦 Build & Deployment

### Build Configuration
```bash
# Development
npm run dev          # Start dev server với HMR

# Production  
npm run build        # Build for production với optimizations

# Preview
npm run preview      # Preview production build locally

# Code Quality
npm run lint         # Check code issues
npm run lint:fix     # Auto-fix linting issues
npm run prettier     # Check code formatting  
npm run prettier:fix # Auto-format code
```

### Deployment Strategy
- **Platform**: Vercel
- **Auto Deploy**: Push to main branch → auto deployment
- **Environment Variables**: `.env.production` cho production config
- **Build Optimization**: 
  - Minification
  - Tree shaking
  - Code splitting
  - Asset optimization
  - Gzip compression

---

## 📚 Learning Outcomes

### Technical Skills Demonstrated
✅ **React 18 Advanced Patterns**: Suspense, lazy loading, concurrent features  
✅ **TypeScript Mastery**: Type-safe codebase với custom types và interfaces  
✅ **State Management**: TanStack Query + Context API cho complex state  
✅ **Form Handling**: React Hook Form + Yup cho robust validation  
✅ **API Integration**: Axios interceptors, error handling, token refresh  
✅ **Security**: XSS prevention, JWT auth, secure storage  
✅ **Performance**: Code splitting, lazy loading, caching strategies  
✅ **i18n**: Multi-language support với namespaced translations  
✅ **Responsive Design**: Mobile-first với Tailwind CSS  

### Architecture & Best Practices
✅ **Clean Architecture**: Separation of concerns (APIs, components, utils)  
✅ **Custom Hooks**: Reusable logic extraction  
✅ **Error Boundaries**: Graceful error handling  
✅ **TypeScript Patterns**: Utility types, generics, type inference  
✅ **Code Quality**: ESLint + Prettier configured  
✅ **Git Workflow**: Feature branches, conventional commits  
✅ **Documentation**: Comprehensive README với code examples

---

*Dự án này showcase best practices trong việc xây dựng ứng dụng React enterprise-level với focus vào performance, security, và exceptional user experience* 🚀✨
