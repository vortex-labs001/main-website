import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Webrev ⚡ | WhatsApp Booking Websites for Hospitality in Maharashtra',
  description: 'Webrev builds high-converting landing pages and direct WhatsApp booking websites for farmhouses, resorts, boutique hotels, and restaurants across Maharashtra. Live in 5 days. Zero OTA commissions.',
  keywords: [
    'Webrev',
    'WhatsApp booking website',
    'Lonavala farmhouse website developer',
    'Alibaug resort booking page',
    'Maharashtra hotel web agency',
    'Restaurant digital menu developer'
  ],
  authors: [
    { name: 'Tanish Bhagat (Founder & Financial Head)' },
    { name: 'Imaad Mapkar (Founder & Marketing Head)' },
    { name: 'Ronit Dhole (Founder & Research Department Head)' }
  ],
  openGraph: {
    title: 'Webrev ⚡ | Direct WhatsApp Booking Engine Studio',
    description: 'Turn inquiries into paid WhatsApp bookings. Built & live in 5 days for farmhouses, hotels, and restaurants in Maharashtra.',
    url: 'https://webrev.in',
    siteName: 'Webrev Studio',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webrev Studio ⚡',
    description: 'WhatsApp direct booking websites for Maharashtra hospitality properties.',
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
