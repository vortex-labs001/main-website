import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Webrev | High-Performance Web Development Studio',
  description: 'Webrev crafts custom, high-converting websites and digital solutions for growing businesses. Fast delivery, bespoke design, and modern web engineering.',
  keywords: [
    'Webrev',
    'Web Development Studio',
    'Custom Website Design',
    'High Performance Web Development',
    'Bespoke Web Development Agency'
  ],
  authors: [
    { name: 'Tanish Bhagat - Founder & Financial Head' },
    { name: 'Imaad Mapkar - Founder & Marketing Head' },
    { name: 'Ronit Dhole - Founder & Research Department Head' }
  ],
  openGraph: {
    title: 'Webrev | High-Performance Web Development Studio',
    description: 'We build custom, modern web applications and high-converting websites tailored for growing brands.',
    url: 'https://webrev.in',
    siteName: 'Webrev Studio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webrev Studio',
    description: 'High-performance web development and custom digital solutions.',
  },
  robots: {
    index: true,
    follow: true,
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
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Syne:wght@700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
