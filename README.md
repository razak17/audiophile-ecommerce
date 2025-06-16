# Audiophile E-commerce Website

A modern, fully responsive e-commerce website for premium audio equipment built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

### Core Functionality

- **Responsive Design**: Optimized layouts for desktop, tablet, and mobile devices
- **Product Catalog**: Browse products by categories (headphones, speakers, earphones)
- **Shopping Cart**: Add, remove, and update product quantities with persistent state
- **Checkout Process**: Complete form validation and order processing
- **Order Confirmation**: Modal with detailed order summary upon successful checkout

### User Experience

- **Interactive Elements**: Hover states and smooth transitions throughout
- **Form Validation**: Real-time validation with helpful error messages
- **Local Storage**: Cart state persists across browser sessions
- **Navigation**: Intuitive routing between product categories and details

### Technical Features

- **Server-Side Rendering**: Built with Next.js App Router
- **TypeScript**: Full type safety throughout the application
- **Component Architecture**: Reusable UI components with consistent styling
- **State Management**: React Context for cart functionality
- **Optimized Images**: Next.js Image optimization for better performance

## 📦 Product Categories

- **Headphones**: Premium over-ear headphones including X99 Mark series
- **Speakers**: High-quality speakers like ZX9 and ZX7 models
- **Earphones**: Wireless earphones including YX1 series

## 🛒 Shopping Experience

### Product Pages

- Detailed product information and specifications
- Image galleries with multiple views
- "Add to Cart" functionality with quantity selection
- Related product recommendations

### Cart Management

- View all added products
- Adjust quantities or remove items
- Real-time price calculations including:
  - Subtotal
  - Shipping ($50 flat rate)
  - VAT (20% of product total)
  - Grand total

### Checkout Process

- Billing and shipping information forms
- Payment method selection (Credit Card, Cash on Delivery)
- Form validation for all required fields
- Order confirmation with summary

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **State Management**: React Context API
- **Data Persistence**: localStorage for cart state

## 🚦 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/razak17/audiophile-ecommerce
cd audiophile-ecommerce
```

2. Install dependencies:

```bash
pnpm install
# or
npm install
```

3. Run the development server:

```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the application

### Build for Production

```bash
pnpm build
pnpm start
```

## 📱 Responsive Design

The application is fully responsive with breakpoints optimized for:

- **Mobile**: 375px and up
- **Tablet**: 768px and up
- **Desktop**: 1024px and up

## 🎨 Design System

- **Typography**: Consistent font hierarchy and spacing
- **Colors**: Carefully selected color palette for audio equipment branding
- **Components**: Reusable UI components following design patterns
- **Interactions**: Smooth hover states and transitions

## 📁 Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── (site)/           # Main site pages
│   │   ├── collections/  # Category listing pages
│   │   ├── products/     # Product detail pages
│   │   └── checkout/     # Checkout process
├── components/           # Reusable UI components
│   ├── ui/               # Base UI components
│   └── icons/            # Icon components
├── context/              # React Context providers
├── types/                # TypeScript type definitions
├── utils/                # Utility functions and constants
└── assets/               # Static assets (images, icons)
```

## 🔧 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 📋 Requirements Checklist

- [x] Responsive layout for all screen sizes
- [x] Interactive hover states
- [x] Add/remove products from cart
- [x] Update product quantities
- [x] Form validation during checkout
- [x] Accurate order total calculations
- [x] Order confirmation modal
- [x] Persistent cart state with localStorage

## 🚀 Deployment

This project is ready to deploy on:

- [Vercel](https://vercel.com/) (recommended for Next.js)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request
