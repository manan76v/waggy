# Waggy Pet Shop - React.js Version

This is a React.js conversion of the Waggy Pet Shop HTML template, built with Vite for fast development and modern tooling.

## Features

- ⚡️ Built with Vite for lightning-fast development
- ⚛️ React 18 with modern hooks
- 🎨 Bootstrap 5 for responsive design
- 🎠 Swiper.js for carousels and sliders
- 📱 Fully responsive design
- 🎭 AOS (Animate On Scroll) animations
- 🎯 Same design and functionality as original template
- 🔤 Original fonts (Chilanka & Montserrat)
- 🎨 Original color scheme and styling

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd waggy-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Preloader.jsx
│   ├── HeroSection.jsx
│   ├── CategoriesSection.jsx
│   ├── ClothingSection.jsx
│   ├── FoodiesSection.jsx
│   ├── TestimonialSection.jsx
│   ├── RegisterSection.jsx
│   ├── BlogSection.jsx
│   ├── ServicesSection.jsx
│   └── InstagramSection.jsx
├── pages/               # Page components
│   └── Home.jsx
├── App.jsx             # Main App component
├── App.css             # Main styles (converted from original)
├── index.css           # Global styles
└── main.jsx            # Entry point
```

## Components Overview

### Header
- Responsive navigation with Bootstrap
- Mobile-friendly offcanvas menu
- Shopping cart and user icons

### Hero Section
- Swiper carousel with multiple slides
- Responsive design with Bootstrap grid
- Call-to-action buttons

### Categories Section
- Interactive category cards
- Iconify icons for visual appeal
- Hover effects

### Product Sections
- Clothing and Foodies sections
- Product filtering functionality
- Add to cart and wishlist features
- Star ratings

### Testimonial Section
- Customer reviews carousel
- Responsive testimonial cards

### Other Sections
- Newsletter registration
- Blog posts grid
- Services showcase
- Instagram feed

## Styling

The project maintains the exact same styling as the original HTML template:

- **Colors**: Same color scheme with CSS custom properties
- **Fonts**: Chilanka and Montserrat fonts
- **Layout**: Bootstrap 5 grid system
- **Animations**: AOS library for scroll animations
- **Components**: All original styling preserved

## Dependencies

### Main Dependencies
- `react` - React library
- `react-dom` - React DOM rendering
- `react-router-dom` - Client-side routing
- `react-bootstrap` - Bootstrap components for React
- `bootstrap` - Bootstrap CSS framework
- `swiper` - Modern slider library
- `aos` - Animate On Scroll library

### Development Dependencies
- `vite` - Build tool and dev server
- `@vitejs/plugin-react` - Vite React plugin
- `eslint` - Code linting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project maintains the same license as the original Waggy template.

## Credits

- Original template by [TemplatesJungle](https://templatesjungle.com/)
- React conversion with modern tooling
- Built with Vite for optimal performance