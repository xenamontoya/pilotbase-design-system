import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Button } from '../components/Button/Button.web';

// Pilotbase Design System - Button Stories
const meta = {
  title: 'Pilotbase/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Pilotbase Button Component

A comprehensive button component with brand-compliant styling and full TypeScript support.

## Features
- **4 Variants**: Primary (black), Secondary (orange), Tertiary (denim blue), Ghost
- **3 Sizes**: Small (36px), Medium (48px), Large (56px)  
- **States**: Normal, Disabled, Loading
- **Accessibility**: WCAG compliant with proper focus states
- **Mobile-first**: Touch-friendly design with proper hit targets

## Installation
\`\`\`bash
npm install pilotbase-design-system
\`\`\`

## Usage
\`\`\`tsx
import { Button } from 'pilotbase-design-system';

<Button 
  title="Click me" 
  variant="primary" 
  size="medium" 
  onPress={() => console.log('Pressed')} 
/>
\`\`\`

## Props

- **title** (string) - Button text content
- **variant** (string) - Visual style: primary, secondary, tertiary, or ghost (default: primary)  
- **size** (string) - Button size: small, medium, or large (default: medium)
- **disabled** (boolean) - Disabled state (default: false)
- **loading** (boolean) - Loading state with spinner (default: false)
- **fullWidth** (boolean) - Expand to full container width (default: false)
- **onPress** (function) - Press handler function

## Source Code

View the complete implementation on [GitHub](https://github.com/xenamontoya/pilotbase-design-system/tree/main/src/components/Button) or use the **Code tab** below to see usage examples.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'ghost'],
      description: 'Button variant',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Button size',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Loading state',
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Full width button',
    },
    title: {
      control: { type: 'text' },
      description: 'Button text',
    },
  },
  args: { 
    onPress: fn() // This enables action logging in Actions tab
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Pilotbase Button Stories
export const Primary: Story = {
  args: {
    title: 'Primary Button',
    variant: 'primary',
    size: 'medium',
  },
};

export const Secondary: Story = {
  args: {
    title: 'Secondary Button',
    variant: 'secondary',
    size: 'medium',
  },
};

export const Tertiary: Story = {
  args: {
    title: 'Tertiary Button',
    variant: 'tertiary',
    size: 'medium',
  },
};

export const Ghost: Story = {
  args: {
    title: 'Ghost Button',
    variant: 'ghost',
    size: "medium",
    loading: false,
    style: {},
    testID: ""
  },
};

export const Small: Story = {
  args: {
    title: 'Small Button',
    variant: 'primary',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    title: 'Large Button',
    variant: 'primary',
    size: 'large',
  },
};

export const Disabled: Story = {
  args: {
    title: 'Disabled Button',
    variant: 'primary',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    title: 'Loading Button',
    variant: 'primary',
    loading: true,
  },
};

export const FullWidth: Story = {
  args: {
    title: 'Full Width Button',
    variant: 'secondary',
    fullWidth: true,
  },
};
