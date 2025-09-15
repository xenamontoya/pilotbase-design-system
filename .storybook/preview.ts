import type { Preview } from '@storybook/react-vite'

// Import global CSS for Storybook styling
import './global.css'

const preview: Preview = {
  parameters: {
    // Standard Storybook defaults
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    // Enable the Code tab (this is the main customization)
    docs: {
      codePanel: true, // Enable Code panel in addon tabs
    },

    // Keep stories organized
    options: {
      storySort: {
        order: ['Brand', 'Pilotbase', '*'],
      },
    },
  },
};

export default preview;