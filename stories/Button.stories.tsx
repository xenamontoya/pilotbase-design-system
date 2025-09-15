/**
 * Pilotbase Design System - Button Stories
 */

import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { Button } from '../src/components/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Pilotbase Button component with brand-compliant styling. Supports primary (black), secondary (orange), tertiary (denim blue), and ghost variants.',
      },
    },
  },
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
  decorators: [
    (Story) => (
      <View style={{ padding: 16, backgroundColor: '#FFFFFF' }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    title: 'Button',
    variant: 'primary',
    size: 'medium',
  },
};

// Variants
export const Primary: Story = {
  args: {
    title: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    title: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    title: 'Tertiary Button',
    variant: 'tertiary',
  },
};

export const Ghost: Story = {
  args: {
    title: 'Ghost Button',
    variant: 'ghost',
  },
};

// Sizes
export const Sizes: Story = {
  render: () => (
    <View style={{ gap: 12 }}>
      <Button title="Small Button" size="small" />
      <Button title="Medium Button" size="medium" />
      <Button title="Large Button" size="large" />
    </View>
  ),
};

// States
export const States: Story = {
  render: () => (
    <View style={{ gap: 12 }}>
      <Button title="Normal" variant="primary" />
      <Button title="Disabled" variant="primary" disabled />
      <Button title="Loading" variant="primary" loading />
    </View>
  ),
};

// All Variants
export const AllVariants: Story = {
  render: () => (
    <View style={{ gap: 12 }}>
      <Button title="Primary" variant="primary" />
      <Button title="Secondary" variant="secondary" />
      <Button title="Tertiary" variant="tertiary" />
      <Button title="Ghost" variant="ghost" />
    </View>
  ),
};

// Full Width
export const FullWidth: Story = {
  args: {
    title: 'Full Width Button',
    variant: 'primary',
    fullWidth: true,
  },
};

// With Loading State
export const Loading: Story = {
  args: {
    title: 'Loading Button',
    variant: 'primary',
    loading: true,
  },
};

// Disabled State
export const Disabled: Story = {
  args: {
    title: 'Disabled Button',
    variant: 'primary',
    disabled: true,
  },
};
