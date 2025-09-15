/**
 * Pilotbase Design System - Color Tokens
 * 
 * Primary colors: 85% black/white usage
 * Accent colors: Orange and electric blue highlights
 * Tertiary: Beige and denim (denim avoided for now)
 */

export const colors = {
  // Primary Colors (85% usage)
  primary: {
    black: '#212121',
    white: '#FFFFFF',
  },

  // Secondary Colors - Oranges for accents
  secondary: {
    orange: {
      light: '#F6A345',    // Light orange
      medium: '#F3781F',   // Medium orange  
      dark: '#FE652A',     // Dark orange
    },
  },

  // Electric Blue for callouts/highlights
  electric: {
    blue: '#00FFF2',
  },

  // Tertiary Colors
  tertiary: {
    beige: '#E1D3C1',
    denim: '#5177BB',      // Avoid for now per brand guidelines
  },

  // Semantic Colors (derived from primary palette)
  semantic: {
    success: '#F6A345',    // Using light orange
    warning: '#F3781F',    // Using medium orange
    error: '#FE652A',      // Using dark orange
    info: '#00FFF2',       // Using electric blue
  },

  // Neutral Grays (for UI elements)
  neutral: {
    50: '#FAFAFA',
    100: '#F5F5F5', 
    200: '#EEEEEE',
    300: '#E0E0E0',
    400: '#BDBDBD',
    500: '#9E9E9E',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',  // Matches primary black
  },

  // Interactive States
  interactive: {
    primary: {
      default: '#212121',
      hover: '#424242',
      active: '#616161',
      disabled: '#BDBDBD',
    },
    secondary: {
      default: '#F6A345',
      hover: '#F3781F',
      active: '#FE652A',
      disabled: '#E0E0E0',
    },
    tertiary: {
      default: '#5177BB',   // Denim blue for hyperlinks/tertiary actions
      hover: '#4169a3',     // Per memory for hyperlink hover state
      active: '#365891',
      disabled: '#BDBDBD',
    },
  },
} as const;

export type Colors = typeof colors;

