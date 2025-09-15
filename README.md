# Pilotbase Design System

A comprehensive design system built with React Native and Storybook for the Pilotbase brand.

## 🎨 Brand Guidelines

### Colors
- **Primary**: 85% black (#212121) and white (#FFFFFF) usage
- **Secondary**: Orange accents (#F6A345, #F3781F, #FE652A) 
- **Electric Blue**: #00FFF2 for callouts and highlights
- **Tertiary**: Beige (#E1D3C1) and denim blue (#5177BB) for hyperlinks

### Typography
- **Primary Font**: Degular (regular, medium, semi-bold, bold, black weights)
- **Monospace**: Degular Mono (ALL CAPS for specific usage)
- **No thin weights** per brand guidelines

### Design Principles
- **Mobile-first** design approach
- **85% black/white** with orange or electric blue accents
- **Clean, minimal** interface design
- **Consistent spacing** using 4px base unit (8-point grid)

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development
```bash
# Start Storybook development server
npm run storybook

# Build Storybook for production
npm run build-storybook
```

### Live Demo
🌐 **[View Live Design System](https://pilotbase-design-system.vercel.app/)** (Updates automatically from main branch)

### Local Development
```bash
# Clone the repository
git clone [your-repo-url]
cd pilotbase-design-system

# Install dependencies
npm install

# Start local Storybook server
npm run storybook
```

## 📦 Components

### Button
Full-featured button component with:
- **Variants**: Primary (black), Secondary (orange), Tertiary (denim blue), Ghost
- **Sizes**: Small, Medium, Large
- **States**: Normal, Disabled, Loading
- **Props**: Full width, icons, custom styling

```tsx
import { Button } from 'pilotbase-design-system';

<Button 
  title="Click me" 
  variant="primary" 
  size="medium" 
  onPress={() => console.log('Pressed')} 
/>
```

## 🎯 Design Tokens

### Colors
```tsx
import { colors } from 'pilotbase-design-system';

// Primary colors
colors.primary.black    // #212121
colors.primary.white    // #FFFFFF

// Secondary oranges
colors.secondary.orange.light   // #F6A345
colors.secondary.orange.medium  // #F3781F
colors.secondary.orange.dark    // #FE652A

// Electric blue
colors.electric.blue    // #00FFF2
```

### Typography
```tsx
import { typography } from 'pilotbase-design-system';

// Font families
typography.fontFamily.primary  // 'Degular'
typography.fontFamily.mono     // 'Degular Mono'

// Text styles
typography.textStyles.h1       // Heading 1
typography.textStyles.body     // Body text
typography.textStyles.button   // Button text
typography.textStyles.mono     // Monospace (ALL CAPS)
```

### Spacing
```tsx
import { spacing } from 'pilotbase-design-system';

// Base spacing (4px units)
spacing[1]   // 4px
spacing[4]   // 16px
spacing[8]   // 32px

// Semantic spacing
spacing.sm   // 8px
spacing.md   // 16px
spacing.lg   // 24px
```

## 🎨 Theme Usage

```tsx
import { pilotbaseTheme } from 'pilotbase-design-system';

// Use the complete theme
const theme = pilotbaseTheme;

// Access component styles
theme.components.button.primary
theme.components.input.default
theme.components.badge.scheduled
```

## 📱 Mobile-First Design

The design system is built mobile-first with:
- **Touch-friendly** minimum 48px touch targets
- **Responsive** component sizing
- **Optimized** for mobile interactions
- **Clean navigation** patterns

## 🛠 Development

### Project Structure
```
src/
├── tokens/           # Design tokens (colors, typography, spacing)
├── themes/           # Complete theme configurations
├── components/       # React Native components
└── index.ts         # Main export

stories/              # Storybook stories
.rnstorybook/        # Storybook configuration
```

### Component Development
1. Create component in `src/components/`
2. Add to `src/components/index.ts`
3. Create stories in `stories/`
4. Run `npm run storybook-generate`
5. Test in Storybook

## 📚 Storybook

Interactive component documentation available at:
- Development: `npm run storybook`
- Build: `npm run build-storybook`

## 🎯 Next Steps

1. **Typography Component** - Text component with style variants
2. **Input Component** - Form input with validation states  
3. **Card Component** - Container component with elevation
4. **Layout Components** - Grid, Stack, Container
5. **Navigation Components** - Tab bar, header, drawer

## 🤝 Contributing

1. Follow brand guidelines strictly
2. Maintain mobile-first approach
3. Add Storybook stories for all components
4. Test across different screen sizes
5. Keep components accessible and performant
