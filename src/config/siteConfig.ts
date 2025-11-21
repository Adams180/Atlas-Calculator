/**
 * Site-wide configuration
 * Metadata, SEO, social links, etc.
 */

export const siteConfig = {
  name: 'Atlas NGO Supply Chain Calculator',
  description: 'Calculate accurate delivery time and cost estimates for humanitarian supply chain operations across Cameroon',
  url: 'https://atlas.systems', // Update with actual domain
  ogImage: '/og-image.png',
  links: {
    linkedin: 'https://linkedin.com/company/atlas-systems',
    email: 'mailto:adamou.ben@atlas.systems',
  },
  author: {
    name: 'Adamou Ben Adamou',
    email: 'adamou.ben@atlas.systems',
  },
};

export type SiteConfig = typeof siteConfig;