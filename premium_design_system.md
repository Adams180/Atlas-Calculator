# ATLAS PREMIUM DESIGN SYSTEM
## Inspired by Google, Amazon, Microsoft & Apple

---

## DESIGN PHILOSOPHY

We're combining the best elements from tech giants:

- **Apple:** Clean, spacious, premium feel, attention to micro-interactions
- **Google:** Material Design depth, thoughtful color, helpful shadows
- **Microsoft:** Fluent Design blur effects, depth, modern gradients
- **Amazon:** Trust signals, clear CTAs, data-driven layout

**Result:** A design that screams "professional enterprise software" not "student project"

---

## UPDATED THEME CONFIGURATION

### File: `src/config/theme.ts`

```typescript
/**
 * Premium Design System - Big Tech Inspired
 * This creates the visual foundation for a world-class application
 */

export const theme = {
  // ==========================================
  // COLORS - Sophisticated & Professional
  // ==========================================
  colors: {
    // Primary: Deep Blue (Trust, Professional - like Microsoft)
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',  // Main brand color
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
      950: '#172554',
    },
    
    // Accent: Vibrant Purple (Innovation - like Apple accents)
    accent: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#a855f7',
      600: '#9333ea',
      700: '#7e22ce',
      800: '#6b21a8',
      900: '#581c87',
    },
    
    // Success: Fresh Green (Positive actions)
    success: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
    },
    
    // Warning: Warm Orange (Caution states)
    warning: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#f97316',
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
    },
    
    // Error: Bold Red (Critical alerts)
    error: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
    },
    
    // Neutrals: Sophisticated Grays (like Apple's UI)
    gray: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#e5e5e5',
      300: '#d4d4d4',
      400: '#a3a3a3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
      950: '#0a0a0a',
    },
  },
  
  // ==========================================
  // GRADIENTS - Modern & Dynamic
  // ==========================================
  gradients: {
    // Hero gradients
    hero: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    heroSubtle: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    
    // Glass morphism backgrounds
    glass: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
    glassDark: 'linear-gradient(135deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.05))',
    
    // Accent gradients
    primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    success: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    warning: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    
    // Mesh gradients (like Apple's)
    mesh: 'radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%), radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%)',
  },
  
  // ==========================================
  // TYPOGRAPHY - Clean & Hierarchical
  // ==========================================
  typography: {
    fonts: {
      // Primary: SF Pro (Apple) / Inter (fallback)
      sans: ['-apple-system', 'BlinkMacSystemFont', 'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      // Mono: For code/data
      mono: ['SF Mono', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      // Display: For hero text
      display: ['Cal Sans', 'Inter', 'system-ui', 'sans-serif'],
    },
    
    sizes: {
      // Display sizes (hero, landing pages)
      '5xl': '3.75rem',    // 60px
      '4xl': '3rem',       // 48px
      '3xl': '2.5rem',     // 40px
      '2xl': '2rem',       // 32px
      'xl': '1.5rem',      // 24px
      
      // Body sizes
      'lg': '1.125rem',    // 18px
      'base': '1rem',      // 16px
      'sm': '0.875rem',    // 14px
      'xs': '0.75rem',     // 12px
    },
    
    weights: {
      thin: 100,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      black: 900,
    },
    
    lineHeights: {
      tight: 1.2,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },
  },
  
  // ==========================================
  // SPACING - Consistent & Rhythmic
  // ==========================================
  spacing: {
    // Container widths
    container: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    
    // Section spacing
    section: {
      mobile: '3rem',     // 48px
      tablet: '4rem',     // 64px
      desktop: '6rem',    // 96px
    },
    
    // Component spacing
    component: {
      xs: '0.5rem',       // 8px
      sm: '1rem',         // 16px
      md: '1.5rem',       // 24px
      lg: '2rem',         // 32px
      xl: '3rem',         // 48px
    },
  },
  
  // ==========================================
  // BORDER RADIUS - Soft & Modern
  // ==========================================
  borderRadius: {
    none: '0',
    sm: '0.25rem',        // 4px
    base: '0.5rem',       // 8px
    md: '0.75rem',        // 12px
    lg: '1rem',           // 16px
    xl: '1.5rem',         // 24px
    '2xl': '2rem',        // 32px
    full: '9999px',
  },
  
  // ==========================================
  // SHADOWS - Depth & Elevation
  // ==========================================
  shadows: {
    // Subtle shadows (cards at rest)
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    
    // Medium shadows (elevated cards)
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    
    // Strong shadows (modals, popovers)
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    
    // Colored shadows (for CTAs)
    primary: '0 10px 25px -5px rgba(37, 99, 235, 0.3)',
    success: '0 10px 25px -5px rgba(34, 197, 94, 0.3)',
    
    // Inner shadows
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  },
  
  // ==========================================
  // ANIMATIONS - Smooth & Polished
  // ==========================================
  animations: {
    durations: {
      fast: '150ms',
      base: '250ms',
      slow: '350ms',
      slower: '500ms',
    },
    
    easings: {
      // Apple-style easings
      ease: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      easeIn: 'cubic-bezier(0.42, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.58, 1)',
      easeInOut: 'cubic-bezier(0.42, 0, 0.58, 1)',
      
      // Custom springs
      spring: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      bounce: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
    },
  },
  
  // ==========================================
  // EFFECTS - Depth & Blur (Microsoft Fluent)
  // ==========================================
  effects: {
    // Glass morphism
    glass: {
      background: 'rgba(255, 255, 255, 0.7)',
      backdropBlur: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.18)',
    },
    
    glassDark: {
      background: 'rgba(0, 0, 0, 0.4)',
      backdropBlur: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    },
    
    // Frosted glass (like macOS)
    frosted: {
      background: 'rgba(255, 255, 255, 0.8)',
      backdropBlur: 'blur(40px) saturate(180%)',
      border: '1px solid rgba(209, 213, 219, 0.3)',
    },
  },
};

export type Theme = typeof theme;
```

---

## UPDATED TAILWIND CONFIG

### File: `tailwind.config.ts`

```typescript
import type { Config } from 'tailwindcss';
import { theme } from './src/config/theme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: theme.colors.primary,
        accent: theme.colors.accent,
        success: theme.colors.success,
        warning: theme.colors.warning,
        error: theme.colors.error,
        gray: theme.colors.gray,
      },
      
      fontFamily: {
        sans: theme.typography.fonts.sans,
        mono: theme.typography.fonts.mono,
        display: theme.typography.fonts.display,
      },
      
      fontSize: theme.typography.sizes,
      fontWeight: theme.typography.weights,
      lineHeight: theme.typography.lineHeights,
      
      borderRadius: theme.borderRadius,
      
      boxShadow: theme.shadows,
      
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '12px',
        lg: '20px',
        xl: '40px',
      },
      
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'slide-down': 'slideDown 0.4s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'shimmer': 'shimmer 2s infinite',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': theme.gradients.primary,
        'gradient-success': theme.gradients.success,
        'gradient-mesh': theme.gradients.mesh,
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## PREMIUM UI COMPONENTS

### File: `src/components/ui/Button.tsx`

```typescript
/**
 * Premium Button Component
 * Apple-inspired design with Microsoft Fluent depth
 */

'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'success';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-250 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variants = {
      primary: 'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 shadow-primary hover:shadow-xl focus:ring-primary-500 active:scale-[0.98]',
      secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 shadow-sm hover:shadow-md focus:ring-gray-500',
      outline: 'border-2 border-gray-300 bg-transparent hover:border-primary-600 hover:bg-primary-50 text-gray-700 hover:text-primary-700 focus:ring-primary-500',
      ghost: 'bg-transparent hover:bg-gray-100 text-gray-700 hover:text-gray-900',
      success: 'bg-gradient-to-r from-success-600 to-success-700 text-white hover:from-success-700 hover:to-success-800 shadow-success hover:shadow-xl focus:ring-success-500 active:scale-[0.98]',
    };
    
    const sizes = {
      sm: 'px-3 py-1.5 text-sm rounded-lg',
      md: 'px-4 py-2.5 text-base rounded-lg',
      lg: 'px-6 py-3 text-lg rounded-xl',
      xl: 'px-8 py-4 text-xl rounded-xl',
    };
    
    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
```

---

### File: `src/components/ui/Card.tsx`

```typescript
/**
 * Premium Card Component
 * Glass morphism with depth
 */

'use client';

import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'elevated' | 'outline';
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hover = false, children, ...props }, ref) => {
    const variants = {
      default: 'bg-white border border-gray-200 shadow-md',
      glass: 'bg-white/70 backdrop-blur-xl border border-white/20 shadow-lg',
      elevated: 'bg-white shadow-xl border-0',
      outline: 'bg-transparent border-2 border-gray-200',
    };
    
    const hoverEffect = hover ? 'hover:shadow-2xl hover:-translate-y-1 transition-all duration-300' : '';
    
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-2xl p-6',
          variants[variant],
          hoverEffect,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
```

---

### File: `src/components/ui/Input.tsx`

```typescript
/**
 * Premium Input Component
 * Clean, minimal, accessible
 */

'use client';

import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helpText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helpText, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {label}
            {props.required && <span className="text-error-500 ml-1">*</span>}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            'w-full px-4 py-3 rounded-xl border border-gray-300',
            'bg-white text-gray-900 placeholder:text-gray-400',
            'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
            'transition-all duration-200',
            'disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50',
            error && 'border-error-500 focus:ring-error-500',
            className
          )}
          {...props}
        />
        {helpText && !error && (
          <p className="mt-1.5 text-sm text-gray-500">{helpText}</p>
        )}
        {error && (
          <p className="mt-1.5 text-sm text-error-600 flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
```

---

## UPDATED PREMIUM HEADER

### File: `src/components/Header.tsx`

```typescript
/**
 * Premium Header - Apple-inspired minimalism
 */

'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { CONTENT } from '@/config/constants';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-md border-b border-gray-200' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200 shadow-lg">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 tracking-tight">
                {CONTENT.site.name}
              </span>
              <span className="text-xs text-gray-600 hidden sm:block">
                {CONTENT.site.tagline}
              </span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium text-sm relative group"
            >
              Calculator
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium text-sm relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <a
              href="mailto:adamou.ben@atlas.systems"
              className="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-primary-600 to-primary-700 text-white text-sm font-medium hover:from-primary-700 hover:to-primary-800 shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
            >
              Contact Us
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
```

---

## PREMIUM LANDING SECTION

### Add this to `src/app/page.tsx` before the form:

```typescript
{/* Hero Section - Big Tech Style */}
{!result && (
  <div className="relative overflow-hidden mb-16">
    {/* Background gradient mesh */}
    <div className="absolute inset-0 bg-gradient-mesh opacity-30 blur-3xl"></div>
    
    <div className="relative text-center px-4 py-16">
      {/* Badge */}
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-6 animate-fade-in">
        <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
        Trusted by humanitarian organizations across Africa
      </div>
      
      {/* Main heading */}
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-tight animate-slide-up">
        Supply Chain Intelligence
        <br />
        <span className="bg-gradient-to-r from-primary-600 via-accent-600 to-primary-800 bg-clip-text text-transparent">
          Made Simple
        </span>
      </h1>
      
      {/* Subheading */}
      <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 animate-fade-in leading-relaxed">
        Get instant, data-driven delivery estimates for humanitarian operations across Cameroon. 
        Professional. Accurate. Free.
      </p>
      
      {/* Trust indicators */}
      <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500 animate-fade-in">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-success-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Always free to use
        </div>
      </div>
    </div>
  </div>
)}
```

---

## PREMIUM CALCULATOR FORM (Enhanced)

### File: `src/components/CalculatorForm.tsx` (Updated with premium design)

```typescript
'use client';

import { useState } from 'react';
import { CalculatorInput } from '@/lib/types';
import { cities } from '@/data/cities';
import { cargoTypes } from '@/data/cargoTypes';
import { CONTENT } from '@/config/constants';
import Button from './ui/Button';
import Input from './ui/Input';
import Card from './ui/Card';

interface Props {
  onCalculate: (input: CalculatorInput) => void;
  isLoading?: boolean;
}

export default function CalculatorForm({ onCalculate, isLoading = false }: Props) {
  const [formData, setFormData] = useState<CalculatorInput>({
    origin: '',
    destination: '',
    cargoType: '',
    weight: 0,
    isUrgent: false,
    season: 'dry',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCalculate(formData);
  };

  const handleReset = () => {
    setFormData({
      origin: '',
      destination: '',
      cargoType: '',
      weight: 0,
      isUrgent: false,
      season: 'dry',
    });
  };

  return (
    <Card variant="glass" className="animate-fade-in">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Form Header */}
        <div className="border-b border-gray-200 pb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Enter Shipment Details
          </h2>
          <p className="text-gray-600">
            Fill in the information below to get your instant estimate
          </p>
        </div>

        {/* Route Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
              <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Route Information</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Origin */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {CONTENT.calculator.form.originLabel}
                <span className="text-error-500 ml-1">*</span>
              </label>
              <div className="relative">
                <select
                  value={formData.origin}
                  onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 appearance-none cursor-pointer hover:border-gray-400"
                  required
                  disabled={isLoading}
                >
                  <option value="">{CONTENT.calculator.form.originPlaceholder}</option>
                  {cities.map(city => (
                    <option key={city.id} value={city.id}>
                      {city.name} ({city.region})
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Destination */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {CONTENT.calculator.form.destinationLabel}
                <span className="text-error-500 ml-1">*</span>
              </label>
              <div className="relative">
                <select
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 appearance-none cursor-pointer hover:border-gray-400"
                  required
                  disabled={isLoading}
                >
                  <option value="">{CONTENT.calculator.form.destinationPlaceholder}</option>
                  {cities.map(city => (
                    <option key={city.id} value={city.id}>
                      {city.name} ({city.region})
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cargo Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-accent-100 flex items-center justify-center">
              <svg className="w-4 h-4 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Cargo Details</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Cargo Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {CONTENT.calculator.form.cargoTypeLabel}
                <span className="text-error-500 ml-1">*</span>
              </label>
              <div className="relative">
                <select
                  value={formData.cargoType}
                  onChange={(e) => setFormData({ ...formData, cargoType: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 appearance-none cursor-pointer hover:border-gray-400"
                  required
                  disabled={isLoading}
                >
                  <option value="">{CONTENT.calculator.form.cargoTypePlaceholder}</option>
                  {cargoTypes.map(cargo => (
                    <option key={cargo.id} value={cargo.id}>
                      {cargo.name}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Weight */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {CONTENT.calculator.form.weightLabel}
                <span className="text-error-500 ml-1">*</span>
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={formData.weight || ''}
                  onChange={(e) => setFormData({ ...formData, weight: Number(e.target.value) })}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                  placeholder={CONTENT.calculator.form.weightPlaceholder}
                  min="1"
                  max="25000"
                  required
                  disabled={isLoading}
                />
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                  <span className="text-gray-500 text-sm font-medium">kg</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Options Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-warning-100 flex items-center justify-center">
              <svg className="w-4 h-4 text-warning-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Additional Options</h3>
          </div>

          {/* Season Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              {CONTENT.calculator.form.seasonLabel}
            </label>
            <div className="grid grid-cols-2 gap-4">
              <label className={`relative flex items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                formData.season === 'dry' 
                  ? 'border-primary-500 bg-primary-50' 
                  : 'border-gray-300 bg-white hover:border-gray-400'
              }`}>
                <input
                  type="radio"
                  value="dry"
                  checked={formData.season === 'dry'}
                  onChange={() => setFormData({ ...formData, season: 'dry' })}
                  className="sr-only"
                  disabled={isLoading}
                />
                <div className="text-center">
                  <svg className={`w-8 h-8 mx-auto mb-2 ${formData.season === 'dry' ? 'text-primary-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <span className={`font-medium ${formData.season === 'dry' ? 'text-primary-700' : 'text-gray-700'}`}>
                    {CONTENT.calculator.form.seasonDry}
                  </span>
                </div>
              </label>
              
              <label className={`relative flex items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                formData.season === 'rainy' 
                  ? 'border-primary-500 bg-primary-50' 
                  : 'border-gray-300 bg-white hover:border-gray-400'
              }`}>
                <input
                  type="radio"
                  value="rainy"
                  checked={formData.season === 'rainy'}
                  onChange={() => setFormData({ ...formData, season: 'rainy' })}
                  className="sr-only"
                  disabled={isLoading}
                />
                <div className="text-center">
                  <svg className={`w-8 h-8 mx-auto mb-2 ${formData.season === 'rainy' ? 'text-primary-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                  <span className={`font-medium ${formData.season === 'rainy' ? 'text-primary-700' : 'text-gray-700'}`}>
                    {CONTENT.calculator.form.seasonRainy}
                  </span>
                </div>
              </label>
            </div>
          </div>

          {/* Urgent Delivery */}
          <div className="bg-gradient-to-r from-warning-50 to-orange-50 p-5 rounded-xl border border-warning-200">
            <label className="flex items-start cursor-pointer group">
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  checked={formData.isUrgent}
                  onChange={(e) => setFormData({ ...formData, isUrgent: e.target.checked })}
                  className="w-5 h-5 rounded border-gray-300 text-primary-600 focus:ring-primary-500 cursor-pointer"
                  disabled={isLoading}
                />
              </div>
              <div className="ml-4">
                <span className="text-base font-semibold text-gray-900 group-hover:text-primary-700 transition-colors">
                  {CONTENT.calculator.form.urgentLabel}
                </span>
                <p className="text-sm text-gray-600 mt-1">
                  Priority delivery with {CONTENT.calculator.form.urgentDescription}
                </p>
              </div>
            </label>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            isLoading={isLoading}
            className="flex-1"
          >
            {isLoading ? 'Calculating...' : (
              <>
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                {CONTENT.calculator.form.submitButton}
              </>
            )}
          </Button>
          <Button
            type="button"
            onClick={handleReset}
            variant="outline"
            size="lg"
            disabled={isLoading}
            className="sm:w-auto"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            {CONTENT.calculator.form.resetButton}
          </Button>
        </div>
      </form>
    </Card>
  );
}
```

---

## PREMIUM RESULTS DISPLAY

### File: `src/components/ResultsDisplay.tsx` (Enhanced)

```typescript
'use client';

import { CalculationResult } from '@/lib/types';
import { Clock, DollarSign, AlertTriangle, CheckCircle, TruckIcon, Package, MapPin, Shield } from 'lucide-react';
import { getCityById } from '@/data/cities';
import { formatCurrency, formatTime } from '@/lib/calculations';
import { CONTENT, LABELS } from '@/config/constants';
import Button from './ui/Button';
import Card from './ui/Card';

interface Props {
  result: CalculationResult;
  onExportPDF: () => void;
  onNewCalculation: () => void;
}

export default function ResultsDisplay({ result, onExportPDF, onNewCalculation }: Props) {
  const originCity = getCityById(result.route.origin);
  const destCity = getCityById(result.route.destination);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Hero Result Card */}
      <Card variant="glass" className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full blur-3xl opacity-30 -mr-32 -mt-32"></div>
        
        <div className="relative">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-success-100 text-success-700 text-sm font-medium mb-4">
                <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Calculation Complete
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                <MapPin className="w-8 h-8 text-primary-600" />
                {originCity?.name} → {destCity?.name}
              </h2>
              <div className="flex flex-wrap items-center gap-4 text-gray-600">
                <span className="flex items-center gap-2">
                  <TruckIcon className="w-4 h-4" />
                  {result.route.distance} {LABELS.distance}
                </span>
                <span>•</span>
                <span className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  {LABELS.roadConditions[result.route.roadCondition]}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-200">
              <div className="text-sm text-gray-600 mb-1">Estimated Time</div>
              <div className="text-2xl font-bold text-primary-600">
                {formatTime(result.estimatedTime.typical)}
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-200">
              <div className="text-sm text-gray-600 mb-1">Total Cost</div>
              <div className="text-2xl font-bold text-primary-600">
                {formatCurrency(result.estimatedCost.total)}
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-200">
              <div className="text-sm text-gray-600 mb-1">Vehicle Type</div>
              <div className="text-lg font-semibold text-gray-900 truncate">
                {result.vehicle.name}
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Time Estimates - Premium Card */}
      <Card variant="elevated" hover>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
            <Clock className="w-6 h-6 text-primary-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              {CONTENT.calculator.results.timeTitle}
            </h3>
            <p className="text-sm text-gray-600">Based on current conditions and historical data</p>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-6 bg-gradient-to-br from-success-50 to-success-100/50 rounded-2xl border border-success-200 transform hover:scale-105 transition-transform duration-200">
            <div className="text-sm font-medium text-success-700 mb-2">
              {CONTENT.calculator.results.timeBest}
            </div>
            <div className="text-3xl font-bold text-success-600 mb-1">
              {formatTime(result.estimatedTime.best)}
            </div>
            <div className="text-xs text-success-600">Optimal conditions</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-2xl border-2 border-primary-300 shadow-md transform hover:scale-105 transition-transform duration-200">
            <div className="text-sm font-medium text-primary-700 mb-2">
              {CONTENT.calculator.results.timeTypical}
            </div>
            <div className="text-3xl font-bold text-primary-600 mb-1">
              {formatTime(result.estimatedTime.typical)}
            </div>
            <div className="text-xs text-primary-600">Most likely</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-warning-50 to-warning-100/50 rounded-2xl border border-warning-200 transform hover:scale-105 transition-transform duration-200">
            <div className="text-sm font-medium text-warning-700 mb-2">
              {CONTENT.calculator.results.timeWorst}
            </div>
            <div className="text-3xl font-bold text-warning-600 mb-1">
              {formatTime(result.estimatedTime.worst)}
            </div>
            <div className="text-xs text-warning-600">With delays</div>
          </div>
        </div>
      </Card>

      {/* Cost Breakdown - Premium Card */}
      <Card variant="elevated" hover>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center">
            <DollarSign className="w-6 h-6 text-accent-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              {CONTENT.calculator.results.costTitle}
            </h3>
            <p className="text-sm text-gray-600">Transparent pricing with no hidden fees</p>
          </div>
        </div>
        
        <div className="space-y-3">
          {[
            { label: CONTENT.calculator.results.costFuel, amount: result.estimatedCost.fuel, icon: '⛽' },
            { label: CONTENT.calculator.results.costVehicle, amount: result.estimatedCost.vehicle, icon: '🚚' },
            { label: CONTENT.calculator.results.costDriver, amount: result.estimatedCost.driver, icon: '👤' },
            { label: CONTENT.calculator.results.costOverhead, amount: result.estimatedCost.overhead, icon: '📋' },
          ].map((item, i) => (
            <div key={i} className="flex justify-between items-center py-3 px-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <span className="text-gray-700 flex items-center gap-3">
                <span className="text-xl">{item.icon}</span>
                {item.label}
              </span>
              <span className="font-semibold text-gray-900">{formatCurrency(item.amount)}</span>
            </div>
          ))}
          
          <div className="mt-6 pt-6 border-t-2 border-gray-200">
            <div className="flex justify-between items-center p-5 rounded-2xl bg-gradient-to-r from-primary-50 to-accent-50">
              <span className="font-bold text-xl text-gray-900">
                {CONTENT.calculator.results.costTotal}
              </span>
              <span className="font-bold text-3xl bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                {formatCurrency(result.estimatedCost.total)}
              </span>
            </div>
          </div>
        </div>
      </Card>

      {/* Cargo & Vehicle Details */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card variant="default" hover>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
              <Package className="w-5 h-5 text-gray-600" />
            </div>
            <h4 className="font-semibold text-gray-900">Cargo Information</h4>
          </div>
          <p className="font-medium text-gray-900 mb-2">{result.cargo.name}</p>
          {result.cargo.description && (
            <p className="text-sm text-gray-600 leading-relaxed">{result.cargo.description}</p>
          )}
        </Card>
        
        <Card variant="default" hover>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
              <TruckIcon className="w-5 h-5 text-gray-600" />
            </div>
            <h4 className="font-semibold text-gray-900">Vehicle Information</h4>
          </div>
          <p className="font-medium text-gray-900 mb-2">{result.vehicle.name}</p>
          <div className="flex gap-4 text-sm text-gray-600">
            <span>Capacity: {result.vehicle.capacity.toLocaleString()} kg</span>
            <span>•</span>
            <span>{result.vehicle.fuelConsumption}" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Real operational data
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-success-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Instant PDF export
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-success-500" fill="currentColor