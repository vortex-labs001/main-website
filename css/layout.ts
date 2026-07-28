import type { Metadata } from 'next';
import './global.css';

export const metadata: Metadata = {
  title: 'Webrev — Web Development Studio for Hospitality in Maharashtra',
  description:
    'A high-performance web development studio crafting conversion-focused digital experiences for farmhouses, resorts, hotels, and fine dining restaurants.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}