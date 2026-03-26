# Tidal Ink Studio - Development Handoff

## Project Setup

### Repository
- **GitHub**: `https://github.com/superusermiles/tidal-ink-studio`
- **Local Path**: `/home/bob/workspace/tidal-ink-studio`

### Tech Stack
- Next.js 14+ with App Router
- TypeScript
- Tailwind CSS  
- Static export for Vercel deployment

### Configuration Files

**next.config.mjs**:
```js
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
};
export default nextConfig;
```

**tailwind.config.ts** - Colors:
```js
colors: {
  'ocean-teal': '#2A7B88',
  'warm-sand': '#E8D5B7', 
  'deep-navy': '#1B2838',
  'coral-accent': '#E07A5F',
}
```

**tailwind.config.ts** - Fonts:
```js
fontFamily: {
  'space': ['Space Grotesk', 'sans-serif'],
  'inter': ['Inter', 'sans-serif'],
}
```

## Assets Ready to Use

### Logo SVG
```svg
<svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg">
  <path d="M5 25 Q15 15 25 25 T45 25 Q55 22 65 20 L75 18 Q85 16 95 12 L105 8 Q112 5 115 2" 
        stroke="#2A7B88" 
        stroke-width="2.5" 
        fill="none" 
        stroke-linecap="round"/>
  <circle cx="115" cy="2" r="1" fill="#2A7B88"/>
</svg>
```

### Favicon SVG
```svg
<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
  <path d="M2 10 Q6 7 10 10 Q12 9 14 7 L15 6" 
        stroke="#2A7B88" 
        stroke-width="1.5" 
        fill="none" 
        stroke-linecap="round"/>
  <circle cx="15" cy="6" r="0.5" fill="#2A7B88"/>
</svg>
```

## Page Structure & Components

### Required Pages
1. **Home** (`/`) - Hero + about preview
2. **Artists** (`/artists`) - Three artist profiles with portfolios  
3. **Gallery** (`/gallery`) - Filterable image grid
4. **Tā Moko** (`/ta-moko`) - Cultural information page
5. **Piercing** (`/piercing`) - Service details
6. **Booking** (`/booking`) - Consultation form with image upload
7. **Contact** (`/contact`) - Location, hours, contact info

### Component Breakdown

#### Navigation Component
- Transparent on hero, solid teal on scroll
- Items: Home | Artists | Gallery | Tā Moko | Piercing | Booking | Contact
- Mobile hamburger menu
- Logo positioned left

#### Hero Component (Homepage)
- Split layout: 40% content, 60% image  
- Image: `https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1200&h=800&fit=crop`
- Flowing wave SVG divider at bottom
- Tagline: "Where the ocean meets the ink"

#### Artist Card Component
Props: `name`, `specialty`, `imageUrl`, `bio`, `portfolioImages[]`

**Artist Data**:
```js
const artists = [
  {
    name: "Sarah Te Whare",
    specialty: "Tā Moko & Traditional Polynesian",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    bio: "Māori artist specializing in culturally authentic tā moko...",
    portfolioImages: [...]
  },
  {
    name: "Marcus Chen", 
    specialty: "Neo-Traditional & Color Work",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Bringing bold color and modern techniques...",
    portfolioImages: [...]
  },
  {
    name: "Jamie Rivera",
    specialty: "Geometric & Fine Line",
    imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b830?w=400&h=400&fit=crop", 
    bio: "Precision geometric designs and delicate fine line work...",
    portfolioImages: [...]
  }
]
```

#### Gallery Component  
Props: `images[]`, `categories[]`, `filterActive`

**Image URLs for Gallery**:
```js
const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1565058739960-8d9ced8c0b51?w=400&h=600&fit=crop",
    category: "traditional",
    alt: "Traditional tattoo work"
  },
  {
    url: "https://images.unsplash.com/photo-1596934386514-10814ad5bb98?w=600&h=400&fit=crop", 
    category: "geometric",
    alt: "Geometric tattoo design"
  },
  {
    url: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=400&h=600&fit=crop",
    category: "color", 
    alt: "Color tattoo work"
  },
  {
    url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
    category: "blackgrey",
    alt: "Black and grey tattoo"
  },
  // Add 8+ more images
]
```

**Filter Categories**: All, Traditional, Neo-Traditional, Geometric, Tā Moko, Color, Black & Grey

#### Booking Form Component
Fields:
- Name (required)
- Email (required)  
- Phone
- Service type: Tattoo | Piercing | Consultation
- Preferred artist dropdown
- Description textarea
- Reference image upload (multiple files)
- Preferred date/time
- Size/placement details

Form should submit to Netlify Forms or similar.

#### Contact Info Component
```js
const studioInfo = {
  address: "142 Marine Parade, Mount Maunganui, Bay of Plenty 3116",
  phone: "+64 7 574 8900", 
  email: "hello@tidalink.nz",
  hours: {
    "Tuesday-Saturday": "10am-6pm",
    "Sunday": "11am-4pm", 
    "Monday": "Closed"
  }
}
```

## Image Implementation

**Critical**: Use standard `<img>` tags, NOT Next.js `<Image>` component (breaks with static export + external URLs).

```tsx
// Correct implementation
<img 
  src="https://images.unsplash.com/photo-XXX?w=WIDTH&h=HEIGHT&fit=crop"
  alt="Descriptive alt text"
  className="w-full h-[500px] object-cover"
/>
```

### Specific Image URLs by Page

**Homepage**:
- Hero: `https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1200&h=800&fit=crop`
- About: `https://images.unsplash.com/photo-1594736797933-d0f06ba42eb9?w=800&h=600&fit=crop`

**Gallery Page**: Use the `galleryImages` array above, add 6+ more

**Tā Moko Page**: 
- Header: `https://images.unsplash.com/photo-1520637836862-4d197d17c83a?w=1400&h=600&fit=crop`

**Piercing Page**:
- Service: `https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop`

**Contact Page**:
- Studio: `https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop`

## Responsive Design

### Breakpoints
- Mobile: 320-767px  
- Tablet: 768-1199px
- Desktop: 1200px+

### Key Responsive Changes
- **Gallery**: 2 columns mobile, 3 tablet, 4 desktop
- **Hero**: Stack vertically on mobile, side-by-side on desktop  
- **Navigation**: Hamburger menu on mobile
- **Artist cards**: Single column mobile, 2 tablet, 3 desktop
- **Touch targets**: 48px minimum on mobile

## Styling Guidelines

### Colors
```css
/* Primary palette */
--ocean-teal: #2A7B88;
--warm-sand: #E8D5B7; 
--deep-navy: #1B2838;
--coral-accent: #E07A5F;
```

### Typography Scale
```css
/* Headings - Space Grotesk */
h1: text-4xl md:text-6xl font-space font-bold
h2: text-3xl md:text-4xl font-space font-semibold  
h3: text-2xl md:text-3xl font-space font-medium

/* Body - Inter */
body: text-base font-inter text-deep-navy
large: text-lg font-inter
small: text-sm font-inter
```

### Shadows
```css
/* Cards */
box-shadow: 0 4px 20px rgba(42, 123, 136, 0.08);

/* Hover states */  
box-shadow: 0 8px 32px rgba(42, 123, 136, 0.12);
```

## Development Checklist

### Setup
- [ ] Initialize Next.js project with TypeScript
- [ ] Configure Tailwind with custom colors/fonts
- [ ] Add Google Fonts (Space Grotesk, Inter)
- [ ] Set up static export config
- [ ] Create component directory structure

### Components 
- [ ] Navigation with scroll behavior
- [ ] Hero section with wave divider SVG
- [ ] Artist card component
- [ ] Gallery with filtering
- [ ] Booking form with file upload
- [ ] Contact info display
- [ ] Footer with wave background

### Pages
- [ ] Homepage layout
- [ ] Artists page with profiles  
- [ ] Gallery with masonry grid
- [ ] Tā Moko cultural page
- [ ] Piercing services page
- [ ] Booking form page
- [ ] Contact page with map

### Final
- [ ] All images loading correctly
- [ ] Responsive on all breakpoints
- [ ] Form submissions working
- [ ] Performance optimization
- [ ] Deploy to Vercel

## SEO Requirements

### Meta Tags per Page
Each page needs:
- Unique title (include "Mount Maunganui" and "Tattoo Studio")
- Meta description (150-160 characters)
- Open Graph image
- Local business schema markup

### Example Schema (Homepage)
```json
{
  "@type": "TattooShop",  
  "name": "Tidal Ink Studio",
  "description": "Modern tattoo and piercing studio on Mount Maunganui waterfront",
  "address": {
    "streetAddress": "142 Marine Parade",
    "addressLocality": "Mount Maunganui", 
    "addressRegion": "Bay of Plenty",
    "postalCode": "3116",
    "addressCountry": "NZ"
  },
  "telephone": "+64-7-574-8900",
  "url": "https://tidalink.nz"
}
```

The site should feel coastal, professional, and artistic - a modern take on tattoo studio websites that appeals to both traditional tattoo enthusiasts and first-time clients seeking quality work in a clean, welcoming environment.