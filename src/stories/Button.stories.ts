import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Button } from '../components/Button/Button.web';

// Pilotbase Design System - Button Stories
const meta = {
  title: 'Pilotbase/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
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

## Component Source Code

The Button component is implemented in both React Native and Web versions:

### React Native Version (\`Button.tsx\`)
\`\`\`tsx
import React from 'react';
import { 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  ViewStyle, 
  TextStyle,
  ActivityIndicator,
  View,
} from 'react-native';
import { pilotbaseTheme } from '../../themes/pilotbase';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps {
  title: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  style?: ViewStyle;
  textStyle?: TextStyle;
  onPress?: () => void;
  testID?: string;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  fullWidth = false,
  iconLeft,
  iconRight,
  style,
  textStyle,
  onPress,
  testID,
}) => {
  const theme = pilotbaseTheme;
  
  // Get variant styles
  const variantStyles = theme.components.button[variant];
  
  // Get size styles
  const sizeStyles = getSizeStyles(size, theme);
  
  // Create combined styles
  const buttonStyle: ViewStyle = {
    backgroundColor: disabled ? variantStyles.disabled.backgroundColor : variantStyles.backgroundColor,
    borderColor: disabled ? variantStyles.disabled.borderColor : variantStyles.borderColor,
    borderWidth: variant === 'ghost' || variant === 'tertiary' ? 1 : 0,
    borderRadius: theme.borderRadius.md,
    paddingHorizontal: sizeStyles.paddingX,
    paddingVertical: sizeStyles.paddingY,
    minHeight: sizeStyles.minHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: fullWidth ? '100%' : 'auto',
    opacity: disabled ? 0.6 : 1,
  };

  const textStyles: TextStyle = {
    color: disabled ? variantStyles.disabled.color : variantStyles.color,
    fontSize: sizeStyles.fontSize,
    fontWeight: theme.typography.fontWeight.medium,
    fontFamily: theme.typography.fontFamily.primary,
    lineHeight: sizeStyles.lineHeight,
    textAlign: 'center',
  };

  const handlePress = () => {
    if (!disabled && !loading && onPress) {
      onPress();
    }
  };

  return (
    <TouchableOpacity
      style={[buttonStyle, style]}
      onPress={handlePress}
      disabled={disabled || loading}
      activeOpacity={0.7}
      testID={testID}
    >
      {loading ? (
        <ActivityIndicator 
          size="small" 
          color={textStyles.color} 
          style={{ marginRight: title ? 8 : 0 }}
        />
      ) : iconLeft ? (
        <View style={{ marginRight: 8 }}>
          {iconLeft}
        </View>
      ) : null}
      
      {title && !loading ? (
        <Text style={[textStyles, textStyle]}>
          {title}
        </Text>
      ) : null}
      
      {iconRight && !loading ? (
        <View style={{ marginLeft: 8 }}>
          {iconRight}
        </View>
      ) : null}
    </TouchableOpacity>
  );
};
\`\`\`

### Web Version (\`Button.web.tsx\`)
The web version uses standard HTML \`<button>\` elements with CSS styling for optimal web performance and accessibility.

## Theme Integration
The Button component uses the Pilotbase theme system for consistent styling:

\`\`\`tsx
import { pilotbaseTheme } from 'pilotbase-design-system/themes';

// Access button styles
const theme = pilotbaseTheme;
const variantStyles = theme.components.button.primary;
\`\`\`
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
    size: "large",
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
