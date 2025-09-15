/**
 * Pilotbase Design System - Brand Colors
 * Official color palette and usage guidelines
 */

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { colors } from '../tokens/colors';

// Component to display color swatches
const ColorSwatch: React.FC<{
  color: string;
  name: string;
  description?: string;
  usage?: string;
  textColor?: string;
}> = ({ color, name, description, usage, textColor = '#000' }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    marginBottom: '16px',
    padding: '16px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    border: '1px solid #e0e0e0'
  }}>
    <div style={{
      width: '80px',
      height: '80px',
      backgroundColor: color,
      borderRadius: '8px',
      marginRight: '16px',
      border: '1px solid #e0e0e0',
      flexShrink: 0
    }} />
    <div style={{ flex: 1 }}>
      <h3 style={{ 
        margin: '0 0 4px 0', 
        fontSize: '18px', 
        fontWeight: '600',
        color: textColor 
      }}>
        {name}
      </h3>
      <p style={{ 
        margin: '0 0 8px 0', 
        fontSize: '14px', 
        fontFamily: 'monospace',
        color: '#666',
        textTransform: 'uppercase'
      }}>
        {color}
      </p>
      {description && (
        <p style={{ margin: '0 0 4px 0', fontSize: '14px', color: '#333' }}>
          {description}
        </p>
      )}
      {usage && (
        <p style={{ margin: '0', fontSize: '12px', color: '#666', fontStyle: 'italic' }}>
          Usage: {usage}
        </p>
      )}
    </div>
  </div>
);

const ColorGrid: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '16px',
    padding: '16px'
  }}>
    {children}
  </div>
);

const meta: Meta = {
  title: 'Brand/Colors',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Pilotbase Color System

Our color palette is designed for **85% black and white usage** with strategic orange and electric blue accents. This creates a clean, professional appearance while maintaining brand personality.

## Brand Guidelines
- **Primary Usage**: 85% black (#212121) and white (#FFFFFF)
- **Accent Colors**: Orange gradient and electric blue for highlights
- **Accessibility**: All color combinations meet WCAG 2.1 AA standards
- **Consistency**: Use design tokens for all color implementation
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryColors: Story = {
  render: () => (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '24px' }}>
      <h1 style={{ marginBottom: '24px', color: colors.primary.black }}>
        Primary Colors (85% Usage)
      </h1>
      <ColorGrid>
        <ColorSwatch
          color={colors.primary.black}
          name="Primary Black"
          description="Main brand color for text, buttons, and primary UI elements"
          usage="Headlines, body text, primary buttons, icons"
          textColor="#fff"
        />
        <ColorSwatch
          color={colors.primary.white}
          name="Primary White"
          description="Background color and contrast for black elements"
          usage="Backgrounds, card surfaces, button text on dark backgrounds"
        />
      </ColorGrid>
    </div>
  ),
};

export const SecondaryColors: Story = {
  render: () => (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '24px' }}>
      <h1 style={{ marginBottom: '24px', color: colors.primary.black }}>
        Secondary Colors (Orange Accents)
      </h1>
      <p style={{ marginBottom: '24px', color: colors.neutral[600] }}>
        Orange gradient colors from the Pilotbase logo. Use sparingly for highlights and calls-to-action.
      </p>
      <ColorGrid>
        <ColorSwatch
          color={colors.secondary.orange.light}
          name="Light Orange"
          description="Lightest orange from logo gradient"
          usage="Secondary buttons, hover states, light accents"
        />
        <ColorSwatch
          color={colors.secondary.orange.medium}
          name="Medium Orange"
          description="Mid-tone orange from logo gradient"
          usage="Warning states, attention-grabbing elements"
          textColor="#fff"
        />
        <ColorSwatch
          color={colors.secondary.orange.dark}
          name="Dark Orange"
          description="Darkest orange from logo gradient"
          usage="Error states, strong emphasis, active states"
          textColor="#fff"
        />
      </ColorGrid>
    </div>
  ),
};

export const AccentColors: Story = {
  render: () => (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '24px' }}>
      <h1 style={{ marginBottom: '24px', color: colors.primary.black }}>
        Accent Colors
      </h1>
      <ColorGrid>
        <ColorSwatch
          color={colors.electric.blue}
          name="Electric Blue"
          description="High-energy accent color for callouts and highlights"
          usage="Notifications, links, info states, special callouts"
        />
        <ColorSwatch
          color={colors.tertiary.beige}
          name="Tertiary Beige"
          description="Warm neutral for confirmed states and subtle backgrounds"
          usage="Confirmed badges, subtle backgrounds, warm accents"
        />
        <ColorSwatch
          color={colors.tertiary.denim}
          name="Denim Blue"
          description="Professional blue for tertiary actions and hyperlinks"
          usage="Tertiary buttons, hyperlinks, secondary navigation"
          textColor="#fff"
        />
      </ColorGrid>
    </div>
  ),
};

export const ColorPalette: Story = {
  render: () => (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '24px' }}>
      <h1 style={{ marginBottom: '32px', color: colors.primary.black }}>
        Complete Pilotbase Color Palette
      </h1>
      
      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ marginBottom: '16px', color: colors.primary.black }}>
          Primary Colors (85% Usage)
        </h2>
        <div style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
          <div style={{
            backgroundColor: colors.primary.black,
            color: colors.primary.white,
            padding: '32px',
            borderRadius: '8px',
            textAlign: 'center',
            flex: 1
          }}>
            <h3 style={{ margin: '0 0 8px 0' }}>Black</h3>
            <p style={{ margin: 0, fontFamily: 'monospace' }}>{colors.primary.black}</p>
          </div>
          <div style={{
            backgroundColor: colors.primary.white,
            color: colors.primary.black,
            padding: '32px',
            borderRadius: '8px',
            border: '1px solid #e0e0e0',
            textAlign: 'center',
            flex: 1
          }}>
            <h3 style={{ margin: '0 0 8px 0' }}>White</h3>
            <p style={{ margin: 0, fontFamily: 'monospace' }}>{colors.primary.white}</p>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ marginBottom: '16px', color: colors.primary.black }}>
          Orange Gradient (From Logo)
        </h2>
        <div style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
          <div style={{
            backgroundColor: colors.secondary.orange.light,
            color: colors.primary.black,
            padding: '24px',
            borderRadius: '8px',
            textAlign: 'center',
            flex: 1
          }}>
            <h4 style={{ margin: '0 0 8px 0' }}>Light</h4>
            <p style={{ margin: 0, fontFamily: 'monospace', fontSize: '12px' }}>
              {colors.secondary.orange.light}
            </p>
          </div>
          <div style={{
            backgroundColor: colors.secondary.orange.medium,
            color: colors.primary.white,
            padding: '24px',
            borderRadius: '8px',
            textAlign: 'center',
            flex: 1
          }}>
            <h4 style={{ margin: '0 0 8px 0' }}>Medium</h4>
            <p style={{ margin: 0, fontFamily: 'monospace', fontSize: '12px' }}>
              {colors.secondary.orange.medium}
            </p>
          </div>
          <div style={{
            backgroundColor: colors.secondary.orange.dark,
            color: colors.primary.white,
            padding: '24px',
            borderRadius: '8px',
            textAlign: 'center',
            flex: 1
          }}>
            <h4 style={{ margin: '0 0 8px 0' }}>Dark</h4>
            <p style={{ margin: 0, fontFamily: 'monospace', fontSize: '12px' }}>
              {colors.secondary.orange.dark}
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 style={{ marginBottom: '16px', color: colors.primary.black }}>
          Accent Colors
        </h2>
        <div style={{ display: 'flex', gap: '16px' }}>
          <div style={{
            backgroundColor: colors.electric.blue,
            color: colors.primary.black,
            padding: '24px',
            borderRadius: '8px',
            textAlign: 'center',
            flex: 1
          }}>
            <h4 style={{ margin: '0 0 8px 0' }}>Electric Blue</h4>
            <p style={{ margin: 0, fontFamily: 'monospace', fontSize: '12px' }}>
              {colors.electric.blue}
            </p>
          </div>
          <div style={{
            backgroundColor: colors.tertiary.beige,
            color: colors.primary.black,
            padding: '24px',
            borderRadius: '8px',
            textAlign: 'center',
            flex: 1
          }}>
            <h4 style={{ margin: '0 0 8px 0' }}>Beige</h4>
            <p style={{ margin: 0, fontFamily: 'monospace', fontSize: '12px' }}>
              {colors.tertiary.beige}
            </p>
          </div>
          <div style={{
            backgroundColor: colors.tertiary.denim,
            color: colors.primary.white,
            padding: '24px',
            borderRadius: '8px',
            textAlign: 'center',
            flex: 1
          }}>
            <h4 style={{ margin: '0 0 8px 0' }}>Denim Blue</h4>
            <p style={{ margin: 0, fontFamily: 'monospace', fontSize: '12px' }}>
              {colors.tertiary.denim}
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const UsageExamples: Story = {
  render: () => (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '24px' }}>
      <h1 style={{ marginBottom: '32px', color: colors.primary.black }}>
        Color Usage Examples
      </h1>
      
      <div style={{ display: 'grid', gap: '24px', marginBottom: '32px' }}>
        <div style={{
          backgroundColor: colors.primary.white,
          padding: '24px',
          borderRadius: '8px',
          border: '1px solid #e0e0e0'
        }}>
          <h3 style={{ color: colors.primary.black, marginBottom: '16px' }}>
            Correct: 85% Black/White Usage
          </h3>
          <p style={{ color: colors.neutral[600], marginBottom: '16px' }}>
            Most of your interface should use black and white with minimal color accents.
          </p>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <button style={{
              backgroundColor: colors.primary.black,
              color: colors.primary.white,
              border: 'none',
              padding: '12px 24px',
              borderRadius: '6px',
              fontWeight: '500'
            }}>
              Primary Action
            </button>
            <button style={{
              backgroundColor: 'transparent',
              color: colors.primary.black,
              border: `1px solid ${colors.neutral[300]}`,
              padding: '12px 24px',
              borderRadius: '6px',
              fontWeight: '500'
            }}>
              Secondary Action
            </button>
            <button style={{
              backgroundColor: colors.secondary.orange.light,
              color: colors.primary.black,
              border: 'none',
              padding: '12px 24px',
              borderRadius: '6px',
              fontWeight: '500'
            }}>
              Accent Action
            </button>
          </div>
        </div>

        <div style={{
          backgroundColor: colors.primary.white,
          padding: '24px',
          borderRadius: '8px',
          border: '1px solid #e0e0e0'
        }}>
          <h3 style={{ color: colors.primary.black, marginBottom: '16px' }}>
            Status Colors
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            <div style={{
              backgroundColor: colors.secondary.orange.light,
              color: colors.primary.black,
              padding: '12px',
              borderRadius: '6px',
              textAlign: 'center',
              fontWeight: '500'
            }}>
              Scheduled
            </div>
            <div style={{
              backgroundColor: colors.tertiary.beige,
              color: colors.primary.black,
              padding: '12px',
              borderRadius: '6px',
              textAlign: 'center',
              fontWeight: '500'
            }}>
              Confirmed
            </div>
            <div style={{
              backgroundColor: colors.electric.blue,
              color: colors.primary.black,
              padding: '12px',
              borderRadius: '6px',
              textAlign: 'center',
              fontWeight: '500'
            }}>
              Information
            </div>
            <div style={{
              backgroundColor: colors.secondary.orange.dark,
              color: colors.primary.white,
              padding: '12px',
              borderRadius: '6px',
              textAlign: 'center',
              fontWeight: '500'
            }}>
              Error
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
