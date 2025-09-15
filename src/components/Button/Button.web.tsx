/**
 * Pilotbase Design System - Button Component (Web Version)
 * 
 * Supports primary (black), secondary (orange), tertiary (denim blue), and ghost variants
 * Web-optimized version of the React Native Button component
 */

import React from 'react';
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
  /** Custom styles */
  style?: React.CSSProperties;
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
  style,
  onPress,
  testID,
}) => {
  const theme = pilotbaseTheme;
  
  // Get variant styles
  const variantStyles = theme.components.button[variant];
  
  // Get size styles
  const sizeStyles = getSizeStyles(size, theme);
  
  // Create combined styles
  const buttonStyle: React.CSSProperties = {
    backgroundColor: disabled ? variantStyles.disabled.backgroundColor : variantStyles.backgroundColor,
    borderColor: disabled ? variantStyles.disabled.borderColor : variantStyles.borderColor,
    borderWidth: variant === 'ghost' || variant === 'tertiary' ? '1px' : '0',
    borderStyle: 'solid',
    borderRadius: theme.borderRadius.md,
    paddingLeft: sizeStyles.paddingX,
    paddingRight: sizeStyles.paddingX,
    paddingTop: sizeStyles.paddingY,
    paddingBottom: sizeStyles.paddingY,
    minHeight: `${sizeStyles.minHeight}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: fullWidth ? '100%' : 'auto',
    opacity: disabled ? 0.6 : 1,
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    fontSize: `${sizeStyles.fontSize}px`,
    fontWeight: theme.typography.fontWeight.medium,
    fontFamily: theme.typography.fontFamily.primary,
    color: disabled ? variantStyles.disabled.color : variantStyles.color,
    textDecoration: 'none',
    outline: 'none',
    transition: 'all 0.2s ease',
    gap: '8px',
    ...style,
  };

  const handleClick = () => {
    if (!disabled && !loading && onPress) {
      onPress();
    }
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && !loading) {
      const button = e.currentTarget;
      if (variant === 'primary') {
        button.style.backgroundColor = variantStyles.hover.backgroundColor;
      } else if (variant === 'secondary') {
        button.style.backgroundColor = variantStyles.hover.backgroundColor;
      } else if (variant === 'tertiary') {
        button.style.color = variantStyles.hover.color;
        button.style.backgroundColor = variantStyles.hover.backgroundColor;
      } else if (variant === 'ghost') {
        button.style.backgroundColor = variantStyles.hover.backgroundColor;
      }
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && !loading) {
      const button = e.currentTarget;
      button.style.backgroundColor = variantStyles.backgroundColor;
      button.style.color = disabled ? variantStyles.disabled.color : variantStyles.color;
    }
  };

  return (
    <button
      style={buttonStyle}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      disabled={disabled || loading}
      data-testid={testID}
    >
      {loading ? (
        <span style={{ 
          width: '16px', 
          height: '16px', 
          border: '2px solid transparent',
          borderTop: `2px solid ${buttonStyle.color}`,
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }} />
      ) : null}
      {title}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </button>
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
        minHeight: 36,
      };
    case 'large':
      return {
        paddingX: parseInt(theme.spacing.component.buttonPaddingXLarge),
        paddingY: parseInt(theme.spacing.component.buttonPaddingYLarge),
        fontSize: parseInt(theme.typography.fontSize.lg),
        minHeight: 56,
      };
    case 'medium':
    default:
      return {
        paddingX: parseInt(theme.spacing.component.buttonPaddingX),
        paddingY: parseInt(theme.spacing.component.buttonPaddingY),
        fontSize: parseInt(theme.typography.fontSize.base),
        minHeight: 48,
      };
  }
}

