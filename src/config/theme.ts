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