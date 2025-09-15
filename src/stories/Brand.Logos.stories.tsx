/**
 * Pilotbase Design System - Logo Guidelines
 * Official logo usage, variations, and guidelines
 */

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { colors } from '../tokens/colors';

// Import logo assets
import LogoIcon from '../assets/brand/Pilotbase_Concept2_Icon.svg';
import LogoNameplate from '../assets/brand/Pilotbase_Concept2_Nameplate.svg';

const LogoShowcase: React.FC<{
  title: string;
  description: string;
  children: React.ReactNode;
}> = ({ title, description, children }) => (
  <div style={{
    backgroundColor: colors.primary.white,
    padding: '32px',
    borderRadius: '8px',
    border: '1px solid #e0e0e0',
    marginBottom: '32px'
  }}>
    <h2 style={{ 
      color: colors.primary.black, 
      marginBottom: '8px',
      fontSize: '24px',
      fontWeight: '600'
    }}>
      {title}
    </h2>
    <p style={{ 
      color: colors.neutral[600], 
      marginBottom: '24px',
      fontSize: '16px'
    }}>
      {description}
    </p>
    {children}
  </div>
);

const LogoContainer: React.FC<{
  backgroundColor?: string;
  padding?: string;
  children: React.ReactNode;
  label?: string;
}> = ({ backgroundColor = '#fff', padding = '32px', children, label }) => (
  <div style={{ marginBottom: '16px' }}>
    {label && (
      <p style={{ 
        margin: '0 0 8px 0', 
        fontSize: '14px', 
        fontWeight: '500',
        color: colors.neutral[700]
      }}>
        {label}
      </p>
    )}
    <div style={{
      backgroundColor,
      padding,
      borderRadius: '8px',
      border: backgroundColor === '#fff' ? '1px solid #e0e0e0' : 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '120px'
    }}>
      {children}
    </div>
  </div>
);

const meta: Meta = {
  title: 'Brand/Logos',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Pilotbase Logo System

The Pilotbase logo consists of two main elements that can be used separately or together depending on the context and space requirements.

## Logo Components
- **Icon**: The distinctive curved symbol with orange gradient
- **Nameplate**: The "PILOTBASE" wordmark in clean typography
- **Full Logo**: Icon + nameplate combination (preferred)

## Usage Guidelines
- Maintain proper clear space around all logo elements
- Never distort, rotate, or modify the logo proportions
- Use approved color variations only
- Ensure sufficient contrast on all backgrounds
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LogoVariations: Story = {
  render: () => (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '24px' }}>
      <h1 style={{ marginBottom: '32px', color: colors.primary.black }}>
        Pilotbase Logo Variations
      </h1>

      <LogoShowcase
        title="Primary Logo Components"
        description="The Pilotbase brand consists of an icon and nameplate that work together or independently."
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          <LogoContainer label="Logo Icon">
            <img 
              src={LogoIcon} 
              alt="Pilotbase Icon" 
              style={{ height: '80px', width: 'auto' }}
            />
          </LogoContainer>
          <LogoContainer label="Logo Nameplate">
            <img 
              src={LogoNameplate} 
              alt="Pilotbase Nameplate" 
              style={{ height: '40px', width: 'auto' }}
            />
          </LogoContainer>
        </div>
      </LogoShowcase>

      <LogoShowcase
        title="Full Logo Lockup"
        description="The preferred logo treatment combines the icon and nameplate with proper spacing."
      >
        <LogoContainer>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <img 
              src={LogoIcon} 
              alt="Pilotbase Icon" 
              style={{ height: '60px', width: 'auto' }}
            />
            <img 
              src={LogoNameplate} 
              alt="Pilotbase Nameplate" 
              style={{ height: '30px', width: 'auto' }}
            />
          </div>
        </LogoContainer>
      </LogoShowcase>

      <LogoShowcase
        title="Logo Sizing Examples"
        description="Logos at different sizes for various applications."
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          <LogoContainer label="Large (Navigation)">
            <img 
              src={LogoIcon} 
              alt="Pilotbase Icon Large" 
              style={{ height: '48px', width: 'auto' }}
            />
          </LogoContainer>
          <LogoContainer label="Medium (Cards)">
            <img 
              src={LogoIcon} 
              alt="Pilotbase Icon Medium" 
              style={{ height: '32px', width: 'auto' }}
            />
          </LogoContainer>
          <LogoContainer label="Small (Favicons)">
            <img 
              src={LogoIcon} 
              alt="Pilotbase Icon Small" 
              style={{ height: '24px', width: 'auto' }}
            />
          </LogoContainer>
        </div>
      </LogoShowcase>
    </div>
  ),
};

export const LogoOnBackgrounds: Story = {
  render: () => (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '24px' }}>
      <h1 style={{ marginBottom: '32px', color: colors.primary.black }}>
        Logo on Different Backgrounds
      </h1>

      <LogoShowcase
        title="Logo on Brand Colors"
        description="How the logo appears on various brand background colors."
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          <LogoContainer 
            backgroundColor={colors.primary.white}
            label="White Background"
          >
            <img 
              src={LogoIcon} 
              alt="Logo on White" 
              style={{ height: '48px', width: 'auto' }}
            />
          </LogoContainer>
          
          <LogoContainer 
            backgroundColor={colors.primary.black}
            label="Black Background"
          >
            <img 
              src={LogoIcon} 
              alt="Logo on Black" 
              style={{ height: '48px', width: 'auto' }}
            />
          </LogoContainer>
          
          <LogoContainer 
            backgroundColor={colors.neutral[100]}
            label="Light Gray Background"
          >
            <img 
              src={LogoIcon} 
              alt="Logo on Light Gray" 
              style={{ height: '48px', width: 'auto' }}
            />
          </LogoContainer>
          
          <LogoContainer 
            backgroundColor={colors.neutral[800]}
            label="Dark Gray Background"
          >
            <img 
              src={LogoIcon} 
              alt="Logo on Dark Gray" 
              style={{ height: '48px', width: 'auto' }}
            />
          </LogoContainer>
        </div>
      </LogoShowcase>

      <LogoShowcase
        title="Logo with Nameplate Combinations"
        description="Full logo lockups on different backgrounds."
      >
        <div style={{ display: 'grid', gap: '16px' }}>
          <LogoContainer 
            backgroundColor={colors.primary.white}
            label="Full Logo - White Background"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img 
                src={LogoIcon} 
                alt="Pilotbase Icon" 
                style={{ height: '40px', width: 'auto' }}
              />
              <img 
                src={LogoNameplate} 
                alt="Pilotbase Nameplate" 
                style={{ height: '20px', width: 'auto' }}
              />
            </div>
          </LogoContainer>
          
          <LogoContainer 
            backgroundColor={colors.primary.black}
            label="Full Logo - Black Background"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img 
                src={LogoIcon} 
                alt="Pilotbase Icon" 
                style={{ height: '40px', width: 'auto' }}
              />
              <div style={{ 
                color: colors.primary.white,
                fontSize: '20px',
                fontWeight: '600',
                fontFamily: 'sans-serif',
                letterSpacing: '0.05em'
              }}>
                PILOTBASE
              </div>
            </div>
          </LogoContainer>
        </div>
      </LogoShowcase>
    </div>
  ),
};

export const LogoGuidelines: Story = {
  render: () => (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '24px' }}>
      <h1 style={{ marginBottom: '32px', color: colors.primary.black }}>
        Logo Usage Guidelines
      </h1>

      <LogoShowcase
        title="Clear Space Requirements"
        description="Maintain proper spacing around logo elements for maximum impact and legibility."
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          <div style={{
            border: '2px dashed #ccc',
            padding: '40px',
            textAlign: 'center',
            borderRadius: '8px'
          }}>
            <img 
              src={LogoIcon} 
              alt="Logo with Clear Space" 
              style={{ height: '60px', width: 'auto' }}
            />
            <p style={{ 
              marginTop: '16px', 
              fontSize: '12px', 
              color: colors.neutral[600] 
            }}>
              Minimum clear space = 1/2 logo height
            </p>
          </div>
        </div>
      </LogoShowcase>

      <LogoShowcase
        title="Minimum Size Requirements"
        description="Never use the logo smaller than these minimum sizes to ensure legibility."
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
          <div style={{ textAlign: 'center' }}>
            <img 
              src={LogoIcon} 
              alt="Minimum Size Icon" 
              style={{ height: '24px', width: 'auto' }}
            />
            <p style={{ 
              marginTop: '8px', 
              fontSize: '12px', 
              color: colors.neutral[600] 
            }}>
              Icon minimum: 24px height
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <img 
              src={LogoNameplate} 
              alt="Minimum Size Nameplate" 
              style={{ height: '16px', width: 'auto' }}
            />
            <p style={{ 
              marginTop: '8px', 
              fontSize: '12px', 
              color: colors.neutral[600] 
            }}>
              Nameplate minimum: 16px height
            </p>
          </div>
        </div>
      </LogoShowcase>

      <LogoShowcase
        title="What NOT to Do"
        description="Common logo usage mistakes to avoid."
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          <div style={{
            backgroundColor: '#ffebee',
            padding: '24px',
            borderRadius: '8px',
            textAlign: 'center',
            border: '2px solid #ffcdd2'
          }}>
            <img 
              src={LogoIcon} 
              alt="Distorted Logo" 
              style={{ height: '40px', width: '80px', objectFit: 'fill' }}
            />
            <p style={{ 
              marginTop: '12px', 
              fontSize: '12px', 
              color: '#c62828',
              fontWeight: '600'
            }}>
              ❌ Don't distort proportions
            </p>
          </div>
          
          <div style={{
            backgroundColor: '#ffebee',
            padding: '24px',
            borderRadius: '8px',
            textAlign: 'center',
            border: '2px solid #ffcdd2'
          }}>
            <img 
              src={LogoIcon} 
              alt="Rotated Logo" 
              style={{ height: '40px', width: 'auto', transform: 'rotate(45deg)' }}
            />
            <p style={{ 
              marginTop: '12px', 
              fontSize: '12px', 
              color: '#c62828',
              fontWeight: '600'
            }}>
              ❌ Don't rotate the logo
            </p>
          </div>
          
          <div style={{
            backgroundColor: '#ffebee',
            padding: '24px',
            borderRadius: '8px',
            textAlign: 'center',
            border: '2px solid #ffcdd2'
          }}>
            <div style={{
              background: 'linear-gradient(45deg, #ff0000, #00ff00)',
              borderRadius: '50%',
              width: '60px',
              height: '60px',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img 
                src={LogoIcon} 
                alt="Logo on Busy Background" 
                style={{ height: '30px', width: 'auto' }}
              />
            </div>
            <p style={{ 
              marginTop: '12px', 
              fontSize: '12px', 
              color: '#c62828',
              fontWeight: '600'
            }}>
              ❌ Don't use on busy backgrounds
            </p>
          </div>
        </div>
      </LogoShowcase>
    </div>
  ),
};
