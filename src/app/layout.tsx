import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Atlas - NGO Supply Chain Calculator',
  description: 'Get instant, data-driven delivery time and cost estimates for humanitarian supply chain operations across Cameroon.',
  keywords: ['logistics', 'supply chain', 'NGO', 'humanitarian', 'Cameroon', 'Africa', 'calculator'],
  authors: [{ name: 'Adamou Ben Adamou' }],
  openGraph: {
    title: 'Atlas - NGO Supply Chain Calculator',
    description: 'Instant logistics estimates for humanitarian operations in Cameroon',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="min-h-screen bg-gradient-page">
        {children}
      </body>
    </html>
  );
}