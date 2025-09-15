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
        component: 'Pilotbase Button component with brand-compliant styling. Supports primary (black), secondary (orange), tertiary (denim blue), and ghost variants.',
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
  args: { onPress: fn() },
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
    size: 'medium',
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
