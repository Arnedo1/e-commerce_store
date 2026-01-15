# E-Commerce Shop

A modern e-commerce application built with React and TypeScript, featuring product filtering, shopping cart functionality, and checkout form validation.

## Features

- **Product Catalog**: Browse products with real-time filtering
- **Advanced Filtering**: Filter by category, price range, and rating
- **Search Functionality**: Search products by title
- **Shopping Cart**: Add/remove items, adjust quantities, persistent storage with localStorage
- **Checkout**: Form validation for delivery and payment information
- **User Registration**: Sign up with email and password validation
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Error Handling**: Try/catch for API calls, user-friendly error messages
- **Loading States**: Spinner while fetching products
- **Empty States**: User-friendly messages when cart is empty

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: React Icons
- **State Management**: React Hooks (useState, useEffect)
- **Storage**: localStorage for cart persistence
- **API**: Fake Store API
- **Spinners**: React Spinners

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/ecommerce-shop.git
cd ecommerce-shop
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Open http://localhost:5173 in your browser

## Project Structure

```
src/
├── components/
│   ├── Product.tsx
│   ├── ItemsList.tsx
│   ├── Cart.tsx
│   ├── CartItem.tsx
│   ├── Filter.tsx
│   ├── Header.tsx
│   ├── OnderHeader.tsx
│   ├── BovenHeader.tsx
│   ├── RegisterModal.tsx
│   └── Checkout.tsx
├── App.tsx
└── main.tsx
```

## Key Features Explained

### Product Filtering

- **Category Filter**: Electronics, Clothing, Jewelry
- **Price Range Filter**: €0-50, €51-100, €101-150, €151-200
- **Star Rating Filter**: 1-5 stars
- **Search**: Search by product title (case-insensitive)

All filters work together. When you select a category, price range, and rating, they all apply at the same time.

### Shopping Cart

- Add items to cart
- Increase/decrease quantity
- Remove items from cart
- Real-time price calculations
- Cart persists with localStorage (survives page refresh)
- Empty cart state with user-friendly message

### Form Validation

**Registration Form:**
- Email validation (must contain @)
- Password minimum 8 characters
- Password confirmation must match

**Checkout Form:**
- First name required
- Last name required
- Email validation (must contain @)
- Address required
- City required
- Dutch postal code format (4 digits + 2 letters, example: 1234AB)
- Card number must be 16 digits

## What I Learned Building This

- React state management with hooks (useState, useEffect)
- Array methods: map(), filter(), find(), reduce()
- Form validation patterns with error handling
- TypeScript interfaces and optional properties (?)
- Responsive design with Tailwind CSS mobile-first approach
- localStorage for persistent client-side storage
- React Router for multi-page navigation
- Error handling with try/catch blocks
- Loading states with spinners
- Object manipulation (Object.keys(), Object.values())
- Regular expressions for validation (postal code, card number)

## How to Use

1. **Browse Products**: The home page shows all products from the Fake Store API
2. **Filter Products**: Use the left sidebar to filter by category, price, and rating
3. **Search**: Use the search bar at the top to find specific products
4. **Add to Cart**: Click "In winkelwagen" button to add products to your cart
5. **View Cart**: Click the shopping bag icon in the header to view your cart
6. **Checkout**: Click "Doorgaan naar betalen" to open checkout form
7. **Register**: Click the register button to create an account

## Responsive Design

The app is fully responsive:
- **Mobile** (320px - 767px): Single column layout, hamburger menu
- **Tablet** (768px - 1023px): Two column product grid
- **Desktop** (1024px+): Four column product grid, full menu

## Future Enhancements

- Backend integration with real database
- User authentication with JWT tokens
- Payment gateway integration (Stripe, PayPal)
- Order history tracking
- Product reviews and ratings
- Wishlist functionality
- Admin dashboard for product management
- Email confirmation for orders

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Author

Jose - Junior Developer  
Learning React and TypeScript for my first developer role (Target: June 2025)

## Acknowledgments

- Fake Store API for product data
- React documentation
- Tailwind CSS documentation
- TypeScript documentation

## License

This project is open source and available under the MIT License.