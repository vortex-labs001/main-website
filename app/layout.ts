import type { Metadata } from 'next';
import './global.css'; // <-- Required for styles to load

export const metadata: Metadata = {
  title: 'Webrev — Web Development Studio',
  description: 'High-performance websites for hospitality brands in Maharashtra.',
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