/**
 * Pilotbase Design System - Main Theme
 * 
 * Combines all design tokens into a cohesive theme
 * Mobile-first design with 85% black/white usage + orange/blue accents
 */

import { colors } from '../tokens/colors';
import { typography } from '../tokens/typography';
import { spacing } from '../tokens/spacing';

export const pilotbaseTheme = {
  colors,
  typography,
  spacing,

  // Component-specific theme overrides
  components: {
    // Button themes
    button: {
      primary: {
        backgroundColor: colors.primary.black,
        color: colors.primary.white,
        borderColor: colors.primary.black,
        hover: {
          backgroundColor: colors.interactive.primary.hover,
          borderColor: colors.interactive.primary.hover,
        },
        active: {
          backgroundColor: colors.interactive.primary.active,
          borderColor: colors.interactive.primary.active,
        },
        disabled: {
          backgroundColor: colors.interactive.primary.disabled,
          color: colors.neutral[500],
          borderColor: colors.interactive.primary.disabled,
        },
      },
      secondary: {
        backgroundColor: colors.secondary.orange.light,
        color: colors.primary.black,  // Black text on yellow per memory
        borderColor: colors.secondary.orange.light,
        hover: {
          backgroundColor: colors.interactive.secondary.hover,
          borderColor: colors.interactive.secondary.hover,
        },
        active: {
          backgroundColor: colors.interactive.secondary.active,
          borderColor: colors.interactive.secondary.active,
        },
        disabled: {
          backgroundColor: colors.interactive.secondary.disabled,
          color: colors.neutral[500],
          borderColor: colors.interactive.secondary.disabled,
        },
      },
      tertiary: {
        backgroundColor: 'transparent',
        color: colors.interactive.tertiary.default,  // Denim blue for hyperlinks
        borderColor: 'transparent',
        hover: {
          color: colors.interactive.tertiary.hover,  // Hover state per memory
          backgroundColor: colors.neutral[50],
        },
        active: {
          color: colors.interactive.tertiary.active,
          backgroundColor: colors.neutral[100],
        },
        disabled: {
          color: colors.interactive.tertiary.disabled,
          backgroundColor: 'transparent',
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        color: colors.primary.black,
        borderColor: colors.neutral[300],
        hover: {
          backgroundColor: colors.neutral[50],
          borderColor: colors.neutral[400],
        },
        active: {
          backgroundColor: colors.neutral[100],
          borderColor: colors.neutral[500],
        },
        disabled: {
          color: colors.neutral[400],
          borderColor: colors.neutral[200],
          backgroundColor: 'transparent',
        },
      },
    },

    // Input themes
    input: {
      default: {
        backgroundColor: colors.primary.white,
        borderColor: colors.neutral[300],
        color: colors.primary.black,
        placeholderColor: colors.neutral[500],
        focus: {
          borderColor: colors.electric.blue,
          boxShadow: `0 0 0 2px ${colors.electric.blue}20`,
        },
        error: {
          borderColor: colors.semantic.error,
          boxShadow: `0 0 0 2px ${colors.semantic.error}20`,
        },
      },
    },

    // Card themes
    card: {
      default: {
        backgroundColor: colors.primary.white,
        borderColor: colors.neutral[200],
        shadowColor: colors.neutral[900],
        shadow: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
      },
      elevated: {
        backgroundColor: colors.primary.white,
        borderColor: colors.neutral[200],
        shadowColor: colors.neutral[900],
        shadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
      },
    },

    // Badge themes (per memories)
    badge: {
      scheduled: {
        backgroundColor: colors.secondary.orange.light,  // Yellow for scheduled
        color: colors.primary.black,
      },
      confirmed: {
        backgroundColor: colors.tertiary.beige,  // Beige for confirmed
        color: colors.primary.black,
      },
      default: {
        backgroundColor: colors.neutral[100],
        color: colors.neutral[700],
      },
    },
  },

  // Breakpoints (mobile-first)
  breakpoints: {
    sm: '640px',
    md: '768px', 
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Z-index scale
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modal: 1040,
    popover: 1050,
    tooltip: 1060,
    toast: 1070,
  },

  // Border radius
  borderRadius: {
    none: '0px',
    sm: '2px',
    default: '4px',
    md: '6px',
    lg: '8px',
    xl: '12px',
    '2xl': '16px',
    '3xl': '24px',
    full: '9999px',
  },

  // Shadows
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    default: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px rgba(0, 0, 0, 0.25)',
    none: 'none',
  },
} as const;

export type PilotbaseTheme = typeof pilotbaseTheme;

