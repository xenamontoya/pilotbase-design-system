import type { Preview } from '@storybook/react-vite'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    docs: {
      source: {
        state: 'open', // Show source code by default
      },
    },

    // Try to control addon panel order differently
    toolbar: {
      title: { hidden: false },
      zoom: { hidden: false },
      eject: { hidden: false },
      copy: { hidden: false },
      fullscreen: { hidden: false },
    },

    // Configure addon panel order
    options: {
      storySort: {
        order: ['Brand', 'Pilotbase', '*'],
      },
    },


    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;