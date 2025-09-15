/**
 * Pilotbase Design System - Typography Tokens
 * 
 * Primary font: Degular (sans-serif)
 * Secondary font: Degular Mono (ALL CAPS for specific usage)
 * Avoid thin weights - use regular, medium, semi-bold, bold, and black only
 */

export const typography = {
  // Font Families
  fontFamily: {
    primary: 'Degular',                    // Primary sans-serif
    mono: 'Degular Mono',                 // Monospace for specific usage (ALL CAPS)
    fallback: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },

  // Font Weights (avoiding thin per brand guidelines)
  fontWeight: {
    regular: '400',      // Regular
    medium: '500',       // Medium  
    semibold: '600',     // Semi-bold
    bold: '700',         // Bold
    black: '900',        // Black
  },

  // Font Sizes (mobile-first approach)
  fontSize: {
    xs: '12px',          // 12px - Caption, helper text
    sm: '14px',          // 14px - Body small, secondary text
    base: '16px',        // 16px - Body text, default
    lg: '18px',          // 18px - Body large
    xl: '20px',          // 20px - H4, large body
    '2xl': '24px',       // 24px - H3
    '3xl': '30px',       // 30px - H2
    '4xl': '36px',       // 36px - H1
    '5xl': '48px',       // 48px - Display large
    '6xl': '64px',       // 64px - Hero text
  },

  // Line Heights
  lineHeight: {
    tight: '1.2',        // 120% - Headlines
    normal: '1.4',       // 140% - UI text
    relaxed: '1.6',      // 160% - Body text
    loose: '1.8',        // 180% - Reading text
  },

  // Letter Spacing
  letterSpacing: {
    tight: '-0.025em',   // Tight spacing for large text
    normal: '0',         // Normal spacing
    wide: '0.025em',     // Wide spacing for small text
    wider: '0.05em',     // Wider spacing for caps
    widest: '0.1em',     // Widest for ALL CAPS mono
  },

  // Text Styles (predefined combinations)
  textStyles: {
    // Headlines
    h1: {
      fontFamily: 'Degular',
      fontSize: '36px',
      fontWeight: '700',
      lineHeight: '1.2',
      letterSpacing: '-0.025em',
    },
    h2: {
      fontFamily: 'Degular',
      fontSize: '30px', 
      fontWeight: '600',
      lineHeight: '1.2',
      letterSpacing: '-0.025em',
    },
    h3: {
      fontFamily: 'Degular',
      fontSize: '24px',
      fontWeight: '600',
      lineHeight: '1.2',
      letterSpacing: '0',
    },
    h4: {
      fontFamily: 'Degular',
      fontSize: '20px',
      fontWeight: '500',
      lineHeight: '1.4',
      letterSpacing: '0',
    },

    // Body Text
    bodyLarge: {
      fontFamily: 'Degular',
      fontSize: '18px',
      fontWeight: '400',
      lineHeight: '1.6',
      letterSpacing: '0',
    },
    body: {
      fontFamily: 'Degular',
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '1.6',
      letterSpacing: '0',
    },
    bodySmall: {
      fontFamily: 'Degular',
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '1.4',
      letterSpacing: '0.025em',
    },

    // UI Text
    button: {
      fontFamily: 'Degular',
      fontSize: '16px',
      fontWeight: '500',
      lineHeight: '1.4',
      letterSpacing: '0',
    },
    caption: {
      fontFamily: 'Degular',
      fontSize: '12px',
      fontWeight: '400',
      lineHeight: '1.4',
      letterSpacing: '0.025em',
    },

    // Special - Degular Mono (ALL CAPS)
    mono: {
      fontFamily: 'Degular Mono',
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '1.4',
      letterSpacing: '0.1em',
      textTransform: 'uppercase' as const,
    },
    monoLarge: {
      fontFamily: 'Degular Mono',
      fontSize: '16px',
      fontWeight: '500',
      lineHeight: '1.4',
      letterSpacing: '0.1em',
      textTransform: 'uppercase' as const,
    },
  },
} as const;

export type Typography = typeof typography;
