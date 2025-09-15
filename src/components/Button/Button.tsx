/**
 * Pilotbase Design System - Button Component
 * 
 * Supports primary (black), secondary (orange), tertiary (denim blue), and ghost variants
 * Mobile-first design with proper touch targets
 */

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
  /** Button text */
  title: string;
  /** Button variant */
  variant?: ButtonVariant;
  /** Button size */
  size?: ButtonSize;
  /** Disabled state */
  disabled?: boolean;
  /** Loading state */
  loading?: boolean;
  /** Full width button */
  fullWidth?: boolean;
  /** Icon to display before text */
  iconLeft?: React.ReactNode;
  /** Icon to display after text */
  iconRight?: React.ReactNode;
  /** Custom styles */
  style?: ViewStyle;
  /** Custom text styles */
  textStyle?: TextStyle;
  /** Press handler */
  onPress?: () => void;
  /** Test ID for testing */
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

// Helper function to get size-specific styles
function getSizeStyles(size: ButtonSize, theme: typeof pilotbaseTheme) {
  switch (size) {
    case 'small':
      return {
        paddingX: parseInt(theme.spacing.component.buttonPaddingXSmall),
        paddingY: parseInt(theme.spacing.component.buttonPaddingYSmall),
        fontSize: parseInt(theme.typography.fontSize.sm),
        lineHeight: parseInt(theme.typography.fontSize.sm) * 1.4,
        minHeight: 36,
      };
    case 'large':
      return {
        paddingX: parseInt(theme.spacing.component.buttonPaddingXLarge),
        paddingY: parseInt(theme.spacing.component.buttonPaddingYLarge),
        fontSize: parseInt(theme.typography.fontSize.lg),
        lineHeight: parseInt(theme.typography.fontSize.lg) * 1.4,
        minHeight: 56,
      };
    case 'medium':
    default:
      return {
        paddingX: parseInt(theme.spacing.component.buttonPaddingX),
        paddingY: parseInt(theme.spacing.component.buttonPaddingY),
        fontSize: parseInt(theme.typography.fontSize.base),
        lineHeight: parseInt(theme.typography.fontSize.base) * 1.4,
        minHeight: 48,
      };
  }
}
