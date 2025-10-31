# AROYÉ - Restaurant Website

A modern, responsive restaurant website built with Next.js 16, React 19, and Tailwind CSS. Featuring beautiful animations, automated slide galleries, and a clean, minimalist design that showcases authentic Thai cuisine.

## 🌟 Features

- **Modern UI/UX**: Clean, minimalist design with smooth animations
- **Responsive Design**: Fully responsive across all devices
- **Automated Slide Gallery**: Beautiful carousel showcasing restaurant atmosphere
- **Dark/Light Theme**: Built-in theme switching with `next-themes`
- **Performance Optimized**: Image optimization, code splitting, and lazy loading
- **SEO Optimized**: Structured data, meta tags, and semantic HTML
- **Accessibility**: ARIA labels, keyboard navigation, and proper semantic elements
- **Smooth Animations**: Powered by Motion (Framer Motion) for fluid transitions

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.1
- **React**: 19.2.0
- **Styling**: Tailwind CSS v4
- **Animations**: Motion (Framer Motion) v12.23.24
- **UI Components**: Radix UI primitives
- **Package Manager**: Bun (or npm/yarn/pnpm)
- **Code Quality**: ESLint, Prettier

## 📁 Project Structure

```
my-app/
├── app/
│   ├── components/
│   │   └── structured-data.jsx    # SEO structured data
│   ├── globals.css                 # Global styles
│   ├── layout.js                   # Root layout
│   └── page.js                     # Home page
├── components/
│   ├── restaurant/                 # Restaurant-specific components
│   │   ├── about-section.jsx
│   │   ├── atmosphere-gallery-section.jsx
│   │   ├── featured-menu-section.jsx
│   │   ├── features-section.jsx
│   │   ├── footer.jsx
│   │   ├── gallery-section.jsx
│   │   ├── hero-section.jsx
│   │   ├── reservation-section.jsx
│   │   ├── social-floating-buttons.jsx
│   │   └── testimonials-section.jsx
│   ├── ui/                         # Reusable UI components
│   │   ├── badge.jsx
│   │   ├── button.jsx
│   │   ├── card.jsx
│   │   ├── parallax-floating.jsx
│   │   └── separator.jsx
│   ├── animate-ui/                  # Animation components
│   ├── loading.jsx                  # Loading screen
│   ├── navbar.jsx                  # Navigation bar
│   ├── theme-provider.jsx          # Theme context
│   └── theme-toggle.jsx            # Theme switcher
├── hooks/
│   └── use-mouse-position-ref.jsx  # Custom hooks
├── lib/
│   ├── data.js                     # Restaurant data
│   ├── get-strict-context.jsx      # Context utilities
│   └── utils.js                    # Utility functions
└── public/                         # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/therw101/restaurant-aroye.git
cd restaurant-aroye
```

2. Install dependencies:

```bash
bun install
# or
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
bun dev
# or
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `bun dev` - Start development server
- `bun build` - Build for production
- `bun start` - Start production server
- `bun lint` - Run ESLint
- `bun format` - Format code with Prettier
- `bun format:check` - Check code formatting

## 🎨 Components

### Restaurant Sections

- **HeroSection**: Main landing section with hero image
- **FeaturedMenuSection**: Showcase featured menu items
- **FeaturesSection**: Highlight restaurant features
- **GallerySection**: Menu items gallery grid
- **AtmosphereGallerySection**: Automated slide gallery for restaurant atmosphere
- **TestimonialsSection**: Customer reviews and testimonials
- **AboutSection**: Restaurant story and information
- **ReservationSection**: Reservation form/contact
- **Footer**: Footer with contact information and links
- **SocialFloatingButtons**: Floating social media buttons

### UI Components

- Button, Card, Badge, Separator
- Theme Toggle
- Parallax Floating effects

## 📊 Data Structure

Restaurant data is stored in `lib/data.js`:

- `featuredMenu`: Featured menu items with descriptions
- `galleryMenu`: All menu items for gallery
- `features`: Restaurant features and highlights
- `testimonials`: Customer reviews
- `atmosphereImages`: Restaurant atmosphere images for slide gallery

## 🎯 Features in Detail

### Automated Slide Gallery

The atmosphere gallery features:

- Automatic sliding every 5 seconds
- Manual navigation with arrow buttons
- Slide indicators (dots)
- Smooth fade transitions
- Responsive design
- Pause on manual interaction

### Theme System

- Light/Dark mode support
- System preference detection
- Persistent theme selection
- Smooth theme transitions

### SEO Features

- Structured data (JSON-LD) for restaurants
- Open Graph meta tags
- Twitter Card support
- Semantic HTML structure
- Optimized meta descriptions

## 🌐 Image Configuration

The project uses Unsplash images. To change image sources, update:

- `lib/data.js` - Menu and gallery images
- `next.config.mjs` - Remote image patterns

## 📱 Responsive Breakpoints

- Mobile: Default (< 640px)
- Tablet: sm (≥ 640px)
- Desktop: md (≥ 768px), lg (≥ 1024px)
- Large Desktop: xl (≥ 1280px)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- Self-hosted servers

Build command: `bun build`
Start command: `bun start`

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Next.js Config

See `next.config.mjs` for:

- Image optimization settings
- Package optimization
- Build configurations

## 📚 Key Dependencies

- `next`: React framework
- `react` & `react-dom`: UI library
- `motion`: Animation library
- `next-themes`: Theme management
- `tailwindcss`: Utility-first CSS
- `@radix-ui/*`: Accessible UI primitives

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 👨‍💻 Development

### Code Style

- TypeScript/JavaScript with ESLint
- Prettier for code formatting
- Functional components with hooks
- Responsive-first design approach

### Best Practices

- Component-based architecture
- Reusable UI components
- Custom hooks for shared logic
- Performance optimization
- Accessibility standards (WCAG 2.1)

## 📞 Contact

For questions or support, please open an issue on GitHub.

---

Built with ❤️ using Next.js and React
