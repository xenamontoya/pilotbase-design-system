/**
 * Pilotbase Design System - Typography Guidelines
 * Degular font family usage, hierarchy, and examples
 */

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { typography, colors } from '../tokens';

const TypographyShowcase: React.FC<{
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

const TypeSpec: React.FC<{
  label: string;
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
  letterSpacing?: string;
  children: React.ReactNode;
}> = ({ label, fontSize, fontWeight, lineHeight, letterSpacing, children }) => (
  <div style={{
    padding: '24px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    marginBottom: '16px'
  }}>
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '16px'
    }}>
      <div>
        <h4 style={{ 
          margin: '0 0 8px 0', 
          color: colors.primary.black,
          fontSize: '16px',
          fontWeight: '600'
        }}>
          {label}
        </h4>
        <div style={{
          fontSize: '12px',
          color: colors.neutral[600],
          fontFamily: 'monospace'
        }}>
          Size: {fontSize} | Weight: {fontWeight} | Line Height: {lineHeight}
          {letterSpacing && ` | Letter Spacing: ${letterSpacing}`}
        </div>
      </div>
    </div>
    <div>
      {children}
    </div>
  </div>
);

const meta: Meta = {
  title: 'Brand/Typography',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Pilotbase Typography System

Typography is built around the **Degular** font family, chosen for its modern, clean appearance and excellent readability across all platforms.

## Font Family Guidelines
- **Primary**: Degular (regular, medium, semi-bold, bold, black weights)
- **Monospace**: Degular Mono (ALL CAPS for specific usage)
- **Avoid**: Thin font weights per brand guidelines
- **Fallback**: High-quality system fonts for compatibility

## Hierarchy Principles
- Clear visual hierarchy with consistent spacing
- Mobile-first sizing approach
- Sufficient contrast and readability
- Scalable design tokens for all text styles
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FontFamilies: Story = {
  render: () => (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '24px' }}>
      <h1 style={{ marginBottom: '32px', color: colors.primary.black }}>
        Pilotbase Font Families
      </h1>

      <TypographyShowcase
        title="Primary Font: Degular"
        description="The main brand font used for headlines, body text, and UI elements."
      >
        <div style={{ marginBottom: '32px' }}>
          <div style={{
            fontFamily: typography.fontFamily.primary,
            fontSize: '48px',
            fontWeight: '600',
            color: colors.primary.black,
            marginBottom: '16px'
          }}>
            Degular Font Family
          </div>
          <p style={{
            fontFamily: typography.fontFamily.primary,
            fontSize: '18px',
            color: colors.neutral[600],
            lineHeight: '1.6'
          }}>
            The quick brown fox jumps over the lazy dog. ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890
          </p>
        </div>

        <h3 style={{ marginBottom: '16px', color: colors.primary.black }}>Available Weights</h3>
        <div style={{ display: 'grid', gap: '12px' }}>
          {[
            { weight: '400', name: 'Regular' },
            { weight: '500', name: 'Medium' },
            { weight: '600', name: 'Semibold' },
            { weight: '700', name: 'Bold' },
            { weight: '900', name: 'Black' },
          ].map(({ weight, name }) => (
            <div key={weight} style={{
              fontFamily: typography.fontFamily.primary,
              fontSize: '24px',
              fontWeight: weight,
              color: colors.primary.black,
              padding: '12px',
              backgroundColor: '#f9f9f9',
              borderRadius: '4px'
            }}>
              {name} ({weight}) - The quick brown fox jumps over the lazy dog
            </div>
          ))}
        </div>
      </TypographyShowcase>

      <TypographyShowcase
        title="Monospace Font: Degular Mono"
        description="Used for code, technical content, and special emphasis (always ALL CAPS)."
      >
        <div style={{
          fontFamily: typography.fontFamily.mono,
          fontSize: '24px',
          fontWeight: '400',
          color: colors.primary.black,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          marginBottom: '16px'
        }}>
          Degular Mono - All Caps Usage
        </div>
        <div style={{
          fontFamily: typography.fontFamily.mono,
          fontSize: '16px',
          fontWeight: '500',
          color: colors.neutral[600],
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          backgroundColor: '#f9f9f9',
          padding: '16px',
          borderRadius: '4px'
        }}>
          Technical Content • Code Examples • Special Callouts
        </div>
      </TypographyShowcase>
    </div>
  ),
};

export const TypographyHierarchy: Story = {
  render: () => (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '24px' }}>
      <h1 style={{ marginBottom: '32px', color: colors.primary.black }}>
        Typography Hierarchy
      </h1>

      <TypographyShowcase
        title="Heading Styles"
        description="Consistent heading hierarchy for content structure and visual organization."
      >
        <TypeSpec
          label="H1 - Main Headlines"
          fontSize={typography.fontSize['4xl']}
          fontWeight={typography.fontWeight.bold}
          lineHeight={typography.lineHeight.tight}
          letterSpacing={typography.letterSpacing.tight}
        >
          <h1 style={{
            ...typography.textStyles.h1,
            margin: 0,
            color: colors.primary.black
          }}>
            Main Page Headlines
          </h1>
        </TypeSpec>

        <TypeSpec
          label="H2 - Section Headlines"
          fontSize={typography.fontSize['3xl']}
          fontWeight={typography.fontWeight.semibold}
          lineHeight={typography.lineHeight.tight}
          letterSpacing={typography.letterSpacing.tight}
        >
          <h2 style={{
            ...typography.textStyles.h2,
            margin: 0,
            color: colors.primary.black
          }}>
            Section Headlines
          </h2>
        </TypeSpec>

        <TypeSpec
          label="H3 - Subsection Headlines"
          fontSize={typography.fontSize['2xl']}
          fontWeight={typography.fontWeight.semibold}
          lineHeight={typography.lineHeight.tight}
        >
          <h3 style={{
            ...typography.textStyles.h3,
            margin: 0,
            color: colors.primary.black
          }}>
            Subsection Headlines
          </h3>
        </TypeSpec>

        <TypeSpec
          label="H4 - Component Headlines"
          fontSize={typography.fontSize.xl}
          fontWeight={typography.fontWeight.medium}
          lineHeight={typography.lineHeight.normal}
        >
          <h4 style={{
            ...typography.textStyles.h4,
            margin: 0,
            color: colors.primary.black
          }}>
            Component Headlines
          </h4>
        </TypeSpec>
      </TypographyShowcase>

      <TypographyShowcase
        title="Body Text Styles"
        description="Text styles for content, descriptions, and user interface elements."
      >
        <TypeSpec
          label="Body Large"
          fontSize={typography.fontSize.lg}
          fontWeight={typography.fontWeight.regular}
          lineHeight={typography.lineHeight.relaxed}
        >
          <p style={{
            ...typography.textStyles.bodyLarge,
            margin: 0,
            color: colors.primary.black
          }}>
            Large body text for important content and introductory paragraphs. This size provides excellent readability while maintaining visual hierarchy.
          </p>
        </TypeSpec>

        <TypeSpec
          label="Body Regular"
          fontSize={typography.fontSize.base}
          fontWeight={typography.fontWeight.regular}
          lineHeight={typography.lineHeight.relaxed}
        >
          <p style={{
            ...typography.textStyles.body,
            margin: 0,
            color: colors.primary.black
          }}>
            Regular body text for main content. This is the default size for most text content, providing optimal readability across all devices and screen sizes.
          </p>
        </TypeSpec>

        <TypeSpec
          label="Body Small"
          fontSize={typography.fontSize.sm}
          fontWeight={typography.fontWeight.regular}
          lineHeight={typography.lineHeight.normal}
          letterSpacing={typography.letterSpacing.wide}
        >
          <p style={{
            ...typography.textStyles.bodySmall,
            margin: 0,
            color: colors.neutral[600]
          }}>
            Small body text for secondary information, captions, and helper text. Used for less prominent content that still needs to be readable.
          </p>
        </TypeSpec>
      </TypographyShowcase>
    </div>
  ),
};

export const UITextStyles: Story = {
  render: () => (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '24px' }}>
      <h1 style={{ marginBottom: '32px', color: colors.primary.black }}>
        UI Text Styles
      </h1>

      <TypographyShowcase
        title="Interactive Element Text"
        description="Typography for buttons, links, and other interactive elements."
      >
        <TypeSpec
          label="Button Text"
          fontSize={typography.fontSize.base}
          fontWeight={typography.fontWeight.medium}
          lineHeight={typography.lineHeight.normal}
        >
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <button style={{
              ...typography.textStyles.button,
              backgroundColor: colors.primary.black,
              color: colors.primary.white,
              border: 'none',
              padding: '12px 24px',
              borderRadius: '6px'
            }}>
              Primary Button
            </button>
            <button style={{
              ...typography.textStyles.button,
              backgroundColor: colors.secondary.orange.light,
              color: colors.primary.black,
              border: 'none',
              padding: '12px 24px',
              borderRadius: '6px'
            }}>
              Secondary Button
            </button>
          </div>
        </TypeSpec>

        <TypeSpec
          label="Caption Text"
          fontSize={typography.fontSize.xs}
          fontWeight={typography.fontWeight.regular}
          lineHeight={typography.lineHeight.normal}
          letterSpacing={typography.letterSpacing.wide}
        >
          <p style={{
            ...typography.textStyles.caption,
            margin: 0,
            color: colors.neutral[600]
          }}>
            Image captions, form helper text, and micro-copy
          </p>
        </TypeSpec>

        <TypeSpec
          label="Monospace (ALL CAPS)"
          fontSize={typography.fontSize.sm}
          fontWeight={typography.fontWeight.regular}
          lineHeight={typography.lineHeight.normal}
          letterSpacing={typography.letterSpacing.widest}
        >
          <div style={{
            ...typography.textStyles.mono,
            margin: 0,
            color: colors.primary.black
          }}>
            Technical Labels • Status Indicators • Code References
          </div>
        </TypeSpec>
      </TypographyShowcase>

      <TypographyShowcase
        title="Typography in Context"
        description="Examples of typography working together in real interface components."
      >
        <div style={{
          backgroundColor: colors.primary.white,
          padding: '24px',
          borderRadius: '8px',
          border: '1px solid #e0e0e0'
        }}>
          <h3 style={{
            ...typography.textStyles.h3,
            margin: '0 0 8px 0',
            color: colors.primary.black
          }}>
            Flight Training Progress
          </h3>
          <p style={{
            ...typography.textStyles.body,
            margin: '0 0 16px 0',
            color: colors.neutral[600]
          }}>
            Track your progress through private pilot training with detailed logging and milestone tracking.
          </p>
          <div style={{
            ...typography.textStyles.mono,
            margin: '0 0 16px 0',
            color: colors.secondary.orange.medium
          }}>
            Status: In Progress
          </div>
          <p style={{
            ...typography.textStyles.caption,
            margin: '0',
            color: colors.neutral[500]
          }}>
            Last updated 2 hours ago
          </p>
        </div>
      </TypographyShowcase>
    </div>
  ),
};

export const ResponsiveTypography: Story = {
  render: () => (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '24px' }}>
      <h1 style={{ marginBottom: '32px', color: colors.primary.black }}>
        Responsive Typography
      </h1>

      <TypographyShowcase
        title="Mobile-First Approach"
        description="Typography scales appropriately across different screen sizes while maintaining readability."
      >
        <div style={{ display: 'grid', gap: '24px' }}>
          <div style={{
            backgroundColor: colors.primary.white,
            padding: '16px',
            borderRadius: '8px',
            border: '1px solid #e0e0e0'
          }}>
            <h4 style={{ 
              margin: '0 0 12px 0', 
              color: colors.primary.black,
              fontSize: '16px'
            }}>
              Mobile (390px) - Compact Hierarchy
            </h4>
            <div style={{ fontSize: '24px', fontWeight: '700', marginBottom: '8px' }}>
              H1 Headline (24px)
            </div>
            <div style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>
              H2 Section (20px)
            </div>
            <div style={{ fontSize: '16px', fontWeight: '500', marginBottom: '8px' }}>
              H3 Subsection (16px)
            </div>
            <div style={{ fontSize: '16px', lineHeight: '1.6' }}>
              Body text optimized for mobile reading with comfortable line height and spacing.
            </div>
          </div>

          <div style={{
            backgroundColor: colors.primary.white,
            padding: '24px',
            borderRadius: '8px',
            border: '1px solid #e0e0e0'
          }}>
            <h4 style={{ 
              margin: '0 0 16px 0', 
              color: colors.primary.black,
              fontSize: '18px'
            }}>
              Desktop (1440px) - Expanded Hierarchy
            </h4>
            <div style={{ fontSize: '36px', fontWeight: '700', marginBottom: '12px' }}>
              H1 Headline (36px)
            </div>
            <div style={{ fontSize: '30px', fontWeight: '600', marginBottom: '12px' }}>
              H2 Section (30px)
            </div>
            <div style={{ fontSize: '24px', fontWeight: '600', marginBottom: '12px' }}>
              H3 Subsection (24px)
            </div>
            <div style={{ fontSize: '18px', lineHeight: '1.6' }}>
              Body text with larger sizing for desktop reading, taking advantage of larger screen real estate while maintaining comfortable reading distances.
            </div>
          </div>
        </div>
      </TypographyShowcase>
    </div>
  ),
};
