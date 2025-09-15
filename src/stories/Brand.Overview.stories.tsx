/**
 * Pilotbase Design System - Brand Overview
 * Complete brand guidelines and design system introduction
 */

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { colors, typography, spacing } from '../tokens';
import LogoIcon from '../assets/brand/Pilotbase_Concept2_Icon.svg';
import LogoNameplate from '../assets/brand/Pilotbase_Concept2_Nameplate.svg';

const BrandSection: React.FC<{
  title: string;
  description: string;
  children: React.ReactNode;
  backgroundColor?: string;
}> = ({ title, description, children, backgroundColor = colors.primary.white }) => (
  <div style={{
    backgroundColor,
    padding: '48px 32px',
    marginBottom: '2px'
  }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ 
        color: backgroundColor === colors.primary.black ? colors.primary.white : colors.primary.black, 
        marginBottom: '16px',
        fontSize: '32px',
        fontWeight: '700'
      }}>
        {title}
      </h2>
      <p style={{ 
        color: backgroundColor === colors.primary.black ? colors.neutral[300] : colors.neutral[600], 
        marginBottom: '32px',
        fontSize: '18px',
        lineHeight: '1.6',
        maxWidth: '800px'
      }}>
        {description}
      </p>
      {children}
    </div>
  </div>
);

const FeatureCard: React.FC<{
  title: string;
  description: string;
  color: string;
}> = ({ title, description, color }) => (
  <div style={{
    backgroundColor: colors.primary.white,
    padding: '24px',
    borderRadius: '8px',
    border: '1px solid #e0e0e0',
    borderLeft: `4px solid ${color}`
  }}>
    <h3 style={{ 
      color: colors.primary.black, 
      marginBottom: '12px',
      fontSize: '20px',
      fontWeight: '600'
    }}>
      {title}
    </h3>
    <p style={{ 
      color: colors.neutral[600], 
      margin: 0,
      lineHeight: '1.6'
    }}>
      {description}
    </p>
  </div>
);

const ColorDemo: React.FC<{ color: string; label: string }> = ({ color, label }) => (
  <div style={{ textAlign: 'center' }}>
    <div style={{
      width: '60px',
      height: '60px',
      backgroundColor: color,
      borderRadius: '50%',
      margin: '0 auto 8px',
      border: '2px solid #fff',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }} />
    <p style={{ 
      fontSize: '12px', 
      color: colors.neutral[600],
      margin: 0,
      fontWeight: '500'
    }}>
      {label}
    </p>
  </div>
);

const meta: Meta = {
  title: 'Brand/Overview',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Pilotbase Design System

Welcome to the official Pilotbase design system. This comprehensive guide provides everything you need to create consistent, accessible, and beautiful user interfaces that align with the Pilotbase brand.

## What's Included
- **Design Tokens**: Colors, typography, spacing, and layout systems
- **Components**: Pre-built, tested React components
- **Brand Guidelines**: Logo usage, color palettes, and typography rules
- **Documentation**: Interactive examples and implementation guides

## Getting Started
Explore the sections below to understand the Pilotbase brand and start building with our design system.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BrandOverview: Story = {
  render: () => (
    <div style={{ backgroundColor: '#f5f5f5' }}>
      {/* Hero Section */}
      <BrandSection
        title=""
        description=""
        backgroundColor={colors.primary.black}
      >
        <div style={{ textAlign: 'center', color: colors.primary.white }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            gap: '24px',
            marginBottom: '32px'
          }}>
            <img 
              src={LogoIcon} 
              alt="Pilotbase Icon" 
              style={{ height: '80px', width: 'auto' }}
            />
            <img 
              src={LogoNameplate} 
              alt="Pilotbase" 
              style={{ height: '40px', width: 'auto', filter: 'invert(1)' }}
            />
          </div>
          <h1 style={{ 
            fontSize: '48px',
            fontWeight: '700',
            margin: '0 0 16px 0',
            color: colors.primary.white
          }}>
            Design System
          </h1>
          <p style={{ 
            fontSize: '24px',
            color: colors.neutral[300],
            margin: '0 0 32px 0',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Professional, consistent, and accessible components for the Pilotbase ecosystem
          </p>
        </div>
      </BrandSection>

      {/* Brand Principles */}
      <BrandSection
        title="Brand Principles"
        description="Our design system is built on core principles that ensure consistency, accessibility, and excellence across all Pilotbase products."
      >
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '24px' 
        }}>
          <FeatureCard
            title="85% Black & White"
            description="Clean, professional foundation with strategic color accents for maximum impact and readability."
            color={colors.primary.black}
          />
          <FeatureCard
            title="Mobile-First Design"
            description="Every component is designed and optimized for mobile experiences, then enhanced for larger screens."
            color={colors.secondary.orange.medium}
          />
          <FeatureCard
            title="Accessibility First"
            description="WCAG 2.1 AA compliance built into every component with proper contrast, focus states, and screen reader support."
            color={colors.electric.blue}
          />
          <FeatureCard
            title="Professional Typography"
            description="Degular font family provides modern, readable typography that works across all platforms and contexts."
            color={colors.tertiary.denim}
          />
        </div>
      </BrandSection>

      {/* Color System */}
      <BrandSection
        title="Color System"
        description="A carefully curated palette that balances professionalism with brand personality, designed for optimal contrast and accessibility."
        backgroundColor={colors.neutral[50]}
      >
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '32px',
          textAlign: 'center'
        }}>
          <div>
            <h3 style={{ 
              marginBottom: '16px', 
              color: colors.primary.black,
              fontSize: '18px',
              fontWeight: '600'
            }}>
              Primary Colors
            </h3>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
              <ColorDemo color={colors.primary.black} label="Black" />
              <ColorDemo color={colors.primary.white} label="White" />
            </div>
          </div>
          
          <div>
            <h3 style={{ 
              marginBottom: '16px', 
              color: colors.primary.black,
              fontSize: '18px',
              fontWeight: '600'
            }}>
              Orange Gradient
            </h3>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
              <ColorDemo color={colors.secondary.orange.light} label="Light" />
              <ColorDemo color={colors.secondary.orange.medium} label="Medium" />
              <ColorDemo color={colors.secondary.orange.dark} label="Dark" />
            </div>
          </div>
          
          <div>
            <h3 style={{ 
              marginBottom: '16px', 
              color: colors.primary.black,
              fontSize: '18px',
              fontWeight: '600'
            }}>
              Accent Colors
            </h3>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
              <ColorDemo color={colors.electric.blue} label="Electric" />
              <ColorDemo color={colors.tertiary.denim} label="Denim" />
            </div>
          </div>
        </div>
      </BrandSection>

      {/* Typography */}
      <BrandSection
        title="Typography"
        description="The Degular font family provides excellent readability and a modern, professional appearance across all digital touchpoints."
      >
        <div style={{ 
          backgroundColor: colors.primary.white,
          padding: '32px',
          borderRadius: '8px',
          border: '1px solid #e0e0e0'
        }}>
          <div style={{
            fontFamily: typography.fontFamily.primary,
            fontSize: '36px',
            fontWeight: '700',
            color: colors.primary.black,
            marginBottom: '16px'
          }}>
            Degular Font Family
          </div>
          <div style={{
            fontFamily: typography.fontFamily.primary,
            fontSize: '24px',
            fontWeight: '600',
            color: colors.primary.black,
            marginBottom: '12px'
          }}>
            Available in regular, medium, semi-bold, bold, and black weights
          </div>
          <div style={{
            fontFamily: typography.fontFamily.primary,
            fontSize: '18px',
            color: colors.neutral[600],
            marginBottom: '16px',
            lineHeight: '1.6'
          }}>
            Body text provides excellent readability with comfortable line heights and letter spacing optimized for both digital screens and print applications.
          </div>
          <div style={{
            fontFamily: typography.fontFamily.mono,
            fontSize: '14px',
            fontWeight: '500',
            color: colors.secondary.orange.medium,
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            Degular Mono • Technical Content • All Caps Usage
          </div>
        </div>
      </BrandSection>

      {/* Components Preview */}
      <BrandSection
        title="Component Library"
        description="Production-ready React components built with TypeScript, tested for accessibility, and optimized for performance."
        backgroundColor={colors.neutral[50]}
      >
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '24px' 
        }}>
          <div style={{
            backgroundColor: colors.primary.white,
            padding: '24px',
            borderRadius: '8px',
            border: '1px solid #e0e0e0',
            textAlign: 'center'
          }}>
            <h4 style={{ 
              marginBottom: '16px', 
              color: colors.primary.black,
              fontSize: '18px',
              fontWeight: '600'
            }}>
              Button Components
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button style={{
                backgroundColor: colors.primary.black,
                color: colors.primary.white,
                border: 'none',
                padding: '12px 24px',
                borderRadius: '6px',
                fontWeight: '500'
              }}>
                Primary Button
              </button>
              <button style={{
                backgroundColor: colors.secondary.orange.light,
                color: colors.primary.black,
                border: 'none',
                padding: '12px 24px',
                borderRadius: '6px',
                fontWeight: '500'
              }}>
                Secondary Button
              </button>
              <button style={{
                backgroundColor: 'transparent',
                color: colors.tertiary.denim,
                border: 'none',
                padding: '12px 24px',
                borderRadius: '6px',
                fontWeight: '500'
              }}>
                Tertiary Button
              </button>
            </div>
          </div>

          <div style={{
            backgroundColor: colors.primary.white,
            padding: '24px',
            borderRadius: '8px',
            border: '1px solid #e0e0e0'
          }}>
            <h4 style={{ 
              marginBottom: '16px', 
              color: colors.primary.black,
              fontSize: '18px',
              fontWeight: '600'
            }}>
              Status Badges
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{
                backgroundColor: colors.secondary.orange.light,
                color: colors.primary.black,
                padding: '8px 12px',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: '500',
                textAlign: 'center'
              }}>
                Scheduled
              </div>
              <div style={{
                backgroundColor: colors.tertiary.beige,
                color: colors.primary.black,
                padding: '8px 12px',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: '500',
                textAlign: 'center'
              }}>
                Confirmed
              </div>
              <div style={{
                backgroundColor: colors.electric.blue,
                color: colors.primary.black,
                padding: '8px 12px',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: '500',
                textAlign: 'center'
              }}>
                Information
              </div>
            </div>
          </div>

          <div style={{
            backgroundColor: colors.primary.white,
            padding: '24px',
            borderRadius: '8px',
            border: '1px solid #e0e0e0'
          }}>
            <h4 style={{ 
              marginBottom: '16px', 
              color: colors.primary.black,
              fontSize: '18px',
              fontWeight: '600'
            }}>
              Coming Soon
            </h4>
            <div style={{ color: colors.neutral[600], fontSize: '14px', lineHeight: '1.6' }}>
              • Input Components<br />
              • Navigation Elements<br />
              • Data Display<br />
              • Layout Components<br />
              • Form Controls
            </div>
          </div>
        </div>
      </BrandSection>

      {/* Getting Started */}
      <BrandSection
        title="Get Started"
        description="Ready to build with the Pilotbase design system? Explore the components, guidelines, and documentation."
        backgroundColor={colors.primary.black}
      >
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '24px' 
        }}>
          <div style={{
            backgroundColor: colors.primary.white,
            padding: '24px',
            borderRadius: '8px'
          }}>
            <h4 style={{ 
              marginBottom: '12px', 
              color: colors.primary.black,
              fontSize: '18px',
              fontWeight: '600'
            }}>
              For Designers
            </h4>
            <p style={{ 
              color: colors.neutral[600], 
              marginBottom: '16px',
              fontSize: '14px',
              lineHeight: '1.6'
            }}>
              Explore brand guidelines, color palettes, and typography standards.
            </p>
            <div style={{
              color: colors.tertiary.denim,
              fontSize: '14px',
              fontWeight: '500'
            }}>
              → View Brand Guidelines
            </div>
          </div>

          <div style={{
            backgroundColor: colors.primary.white,
            padding: '24px',
            borderRadius: '8px'
          }}>
            <h4 style={{ 
              marginBottom: '12px', 
              color: colors.primary.black,
              fontSize: '18px',
              fontWeight: '600'
            }}>
              For Developers
            </h4>
            <p style={{ 
              color: colors.neutral[600], 
              marginBottom: '16px',
              fontSize: '14px',
              lineHeight: '1.6'
            }}>
              Browse components, copy code examples, and integrate with your projects.
            </p>
            <div style={{
              color: colors.tertiary.denim,
              fontSize: '14px',
              fontWeight: '500'
            }}>
              → Explore Components
            </div>
          </div>

          <div style={{
            backgroundColor: colors.primary.white,
            padding: '24px',
            borderRadius: '8px'
          }}>
            <h4 style={{ 
              marginBottom: '12px', 
              color: colors.primary.black,
              fontSize: '18px',
              fontWeight: '600'
            }}>
              GitHub Repository
            </h4>
            <p style={{ 
              color: colors.neutral[600], 
              marginBottom: '16px',
              fontSize: '14px',
              lineHeight: '1.6'
            }}>
              Access source code, contribute, and stay updated with the latest changes.
            </p>
            <div style={{
              color: colors.tertiary.denim,
              fontSize: '14px',
              fontWeight: '500'
            }}>
              → View on GitHub
            </div>
          </div>
        </div>
      </BrandSection>
    </div>
  ),
};
