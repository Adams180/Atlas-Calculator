/**
 * Tailwind configuration
 * ALL COLORS AND DESIGN TOKENS DEFINED HERE
 * Import theme from config for consistency
 */

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
        secondary: theme.colors.secondary,
        gray: theme.colors.gray,
        success: theme.colors.success,
        warning: theme.colors.warning,
        error: theme.colors.error,
        info: theme.colors.info,
      },
      fontFamily: {
        sans: theme.fonts.sans,
        mono: theme.fonts.mono,
      },
      borderRadius: {
        'sm': theme.borderRadius.small,
        'md': theme.borderRadius.medium,
        'lg': theme.borderRadius.large,
        'xl': theme.borderRadius.xl,
      },
      boxShadow: {
        'sm': theme.shadows.small,
        'md': theme.shadows.medium,
        'lg': theme.shadows.large,
      },
    },
  },
  plugins: [],
};

export default config;