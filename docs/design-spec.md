# Tidal Ink Studio - Design Specification

## Visual Identity

### Color Palette
- **Ocean Teal**: #2A7B88 (primary brand color, navigation, CTAs)
- **Warm Sand**: #E8D5B7 (backgrounds, soft sections)
- **Deep Navy**: #1B2838 (headings, body text, footer)
- **Pure White**: #FFFFFF (clean backgrounds, contrast)
- **Coral Accent**: #E07A5F (highlights, hover states, artistic touches)

### Typography
- **Headings**: Space Grotesk (geometric, modern, ocean-flow feeling)
- **Body Text**: Inter (clean, highly readable, professional)
- **Accent**: Space Grotesk Medium for subheadings and navigation

### Logo Design
**Concept**: Continuous line from ocean wave to needle tip, symbolizing the studio's waterfront location and artistic precision.

**SVG Code**:
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

**Color Variants**:
- Primary: #2A7B88 on white/light backgrounds
- Reversed: #FFFFFF on dark/navy backgrounds
- Monochrome: #1B2838 for print/single color uses

**Usage**: Minimum 24px height, 8px clear space on all sides

### Favicon Design
**Concept**: Simplified wave-to-needle icon in 16x16 format

**SVG Code**:
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

### Design Tokens
- **Border radius**: 8px standard, 16px for cards, 4px for small elements
- **Shadows**: 
  - Card: `0 4px 20px rgba(26, 123, 136, 0.08)`
  - Hover: `0 8px 32px rgba(26, 123, 136, 0.12)`
- **Spacing scale**: 8px base (8, 16, 24, 32, 48, 64, 96px)

## Layout Strategy

### Overall Feel
**Coastal Modern**: Clean, airy layouts with flowing elements that echo ocean movement. Asymmetric grids with organic shapes balanced by structured content areas.

### Navigation
**Transparent overlay** on hero, transitions to solid teal bar on scroll. Minimal items: Home, Artists, Gallery, Tā Moko, Piercing, Booking, Contact.

### Hero Style
**Split layout**: Left side with studio info and tagline, right side with large coastal studio interior image. Flowing wave divider between sections.

### Section Layouts
1. **Hero**: Asymmetric split with flowing wave element
2. **About**: Alternating image/text with ocean-inspired spacing
3. **Artists**: Bento grid layout with portrait + specialty cards
4. **Gallery**: Masonry grid with category filters
5. **Services**: Card layout with coral accent borders

### Footer
**Minimal centered**: Contact info, hours, social links with subtle wave pattern background

## Page-Specific Designs

### Homepage
**Hero Section**:
- Image: `https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1200&h=800&fit=crop` (Modern, bright tattoo studio interior)
- Layout: Split 40/60, left content, right image
- Flowing wave SVG divider

**About Section**:
- Image: `https://images.unsplash.com/photo-1594736797933-d0f06ba42eb9?w=800&h=600&fit=crop` (Ocean view from Mount Maunganui)
- Layout: Centered content with side image

**Artists Preview**:
- Images: Three portrait placeholders with specialty tags
- Layout: Three-column grid with hover effects

### Artists Page
**Individual Artist Cards**:
- Sarah: `https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop` (Professional woman portrait)
- Marcus: `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop` (Professional man portrait)
- Jamie: `https://images.unsplash.com/photo-1494790108755-2616b612b830?w=400&h=400&fit=crop` (Professional portrait)

**Portfolio Previews**: Grid of work samples per artist

### Gallery Page
**Filter Categories**: All, Traditional, Neo-Traditional, Geometric, Tā Moko, Color, Black & Grey

**Sample Images**:
- `https://images.unsplash.com/photo-1565058739960-8d9ced8c0b51?w=400&h=600&fit=crop` (Traditional tattoo work)
- `https://images.unsplash.com/photo-1596934386514-10814ad5bb98?w=600&h=400&fit=crop` (Geometric tattoo design)
- `https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=400&h=600&fit=crop` (Color tattoo work)
- `https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop` (Black and grey work)
- `https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=600&fit=crop` (Fine line work)
- `https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=400&fit=crop` (Neo-traditional design)
- `https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=600&fit=crop` (Colorful sleeve work)
- `https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop` (Detailed black work)

### Tā Moko Page
**Cultural Header**:
- Image: `https://images.unsplash.com/photo-1520637836862-4d197d17c83a?w=1400&h=600&fit=crop` (Māori cultural imagery)
- Respectful, educational layout with Sarah's expertise highlighted

### Piercing Page
**Service Showcase**:
- Image: `https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop` (Clean, modern piercing setup)
- Aftercare information with clear typography

### Booking Page
**Form Layout**:
- Image: `https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop` (Studio consultation area)
- Upload functionality for reference images
- Calendar integration feel

### Contact Page
**Studio Showcase**:
- Hero: `https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop` (Studio interior wide shot)
- Map integration with Mount Maunganui waterfront location
- Hours prominently displayed

## Responsive Behavior

### Desktop (1200px+)
- Full split layouts
- Hover effects on all interactive elements
- Large gallery grids (4 columns)

### Tablet (768-1199px)
- Stack split sections
- 3-column gallery
- Maintain spacing proportions

### Mobile (320-767px)
- Single column layouts
- 2-column gallery
- Simplified navigation (hamburger)
- Larger touch targets (48px minimum)

## Micro-Interactions

### Hover States
- Cards lift with coral shadow
- Images zoom slightly (1.05x)
- Links underline with coral color
- Buttons darken to deep navy

### Loading States
- Wave animation while content loads
- Image fade-ins
- Smooth transitions (300ms ease)

### Gallery Interactions
- Smooth filter animations
- Lightbox for full-size viewing
- Lazy loading with placeholder waves

## Brand Photography Guidelines
- **Style**: Bright, airy, professional
- **Color tone**: Cool blues and teals with warm accent lighting
- **Composition**: Clean, minimal backgrounds showing studio ocean views
- **Focus**: Artwork detail, clean workspace, professional artists
- **Avoid**: Dark, grungy, cluttered traditional tattoo parlor aesthetics

This design creates a unique position in the tattoo industry - professional, coastal, and welcoming while maintaining artistic credibility.