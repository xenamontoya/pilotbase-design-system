# Contributing to Pilotbase Design System

## 🎯 Design System Goals

- **Brand Consistency**: All components must follow Pilotbase brand guidelines
- **Mobile-First**: Components optimized for mobile experiences
- **Developer Experience**: Clear documentation and easy integration
- **Accessibility**: WCAG 2.1 AA compliance

## 🔧 Development Setup

```bash
# Clone and setup
git clone [repo-url]
cd pilotbase-design-system
npm install

# Start development
npm run storybook
```

## 📝 Adding New Components

1. **Create Component Directory**
   ```
   src/components/NewComponent/
   ├── NewComponent.tsx          # React Native version
   ├── NewComponent.web.tsx      # Web version  
   ├── index.ts                  # Exports
   ```

2. **Create Stories**
   ```
   src/stories/NewComponent.stories.ts
   ```

3. **Follow Brand Guidelines**
   - Use design tokens from `src/tokens/`
   - Follow Pilotbase color palette (85% black/white + orange/blue accents)
   - Use Degular font family (avoid thin weights)
   - Implement mobile-first responsive design

4. **Add Documentation**
   - Component props description
   - Usage examples
   - Accessibility notes

## 🎨 Design Token Usage

```tsx
import { colors, typography, spacing } from 'pilotbase-design-system';

// Colors
colors.primary.black          // #212121
colors.secondary.orange.light // #F6A345
colors.electric.blue          // #00FFF2

// Typography
typography.textStyles.h1      // Heading styles
typography.fontFamily.primary // Degular

// Spacing
spacing.md                    // 16px
spacing.component.buttonPaddingX // Button padding
```

## 🚀 Deployment

- **Auto-deployment**: Pushes to `main` branch automatically deploy to Vercel
- **Preview deployments**: Pull requests generate preview URLs
- **Storybook**: Builds and deploys the component documentation

## ✅ Review Checklist

- [ ] Component follows Pilotbase brand guidelines
- [ ] Mobile-first responsive design implemented
- [ ] Accessibility features included
- [ ] Storybook stories created with all variants
- [ ] TypeScript types properly defined
- [ ] Documentation updated

## 🤝 Code Review Process

1. Create feature branch from `main`
2. Implement component following guidelines
3. Test in Storybook locally
4. Create pull request with preview
5. Team review and approval
6. Merge to `main` for auto-deployment

