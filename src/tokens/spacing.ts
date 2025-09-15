/**
 * Pilotbase Design System - Spacing Tokens
 * 
 * Mobile-first spacing system using 4px base unit
 * Follows 8-point grid system for consistent spacing
 */

export const spacing = {
  // Base unit: 4px
  0: '0px',
  1: '4px',        // 4px
  2: '8px',        // 8px  
  3: '12px',       // 12px
  4: '16px',       // 16px
  5: '20px',       // 20px
  6: '24px',       // 24px
  7: '28px',       // 28px
  8: '32px',       // 32px
  10: '40px',      // 40px
  12: '48px',      // 48px
  16: '64px',      // 64px
  20: '80px',      // 80px
  24: '96px',      // 96px
  32: '128px',     // 128px
  40: '160px',     // 160px
  48: '192px',     // 192px
  56: '224px',     // 224px
  64: '256px',     // 256px

  // Semantic spacing (mobile-first)
  xs: '4px',       // Extra small - icon padding, borders
  sm: '8px',       // Small - component padding
  md: '16px',      // Medium - section padding
  lg: '24px',      // Large - component margins
  xl: '32px',      // Extra large - section margins  
  '2xl': '48px',   // 2X large - page margins
  '3xl': '64px',   // 3X large - hero sections

  // Component-specific spacing
  component: {
    // Button padding
    buttonPaddingX: '16px',
    buttonPaddingY: '12px',
    buttonPaddingXSmall: '12px',
    buttonPaddingYSmall: '8px',
    buttonPaddingXLarge: '24px',
    buttonPaddingYLarge: '16px',

    // Input padding
    inputPaddingX: '16px',
    inputPaddingY: '12px',

    // Card padding
    cardPadding: '16px',
    cardPaddingLarge: '24px',

    // Page margins (mobile-first)
    pageMarginX: '16px',
    pageMarginY: '24px',

    // Section spacing
    sectionSpacing: '32px',
    sectionSpacingLarge: '48px',
  },

  // Layout spacing
  layout: {
    // Container max-widths
    containerSm: '640px',
    containerMd: '768px', 
    containerLg: '1024px',
    containerXl: '1280px',

    // Gutter spacing
    gutterSm: '16px',
    gutterMd: '24px',
    gutterLg: '32px',

    // Grid gaps
    gridGapSm: '8px',
    gridGapMd: '16px', 
    gridGapLg: '24px',
  },
} as const;

export type Spacing = typeof spacing;
