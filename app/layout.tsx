import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Minal Footwear',
  description: 'Premium footwear for men, women, and kids',
  // Browser tab (Deepseek jaisa icon) ke liye yahan sahi path hai:
  icons: {
    icon: '/images/footcare.png',      // 'public' word hata diya hai
    shortcut: '/images/footcare.png',
    apple: '/images/footcare.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}