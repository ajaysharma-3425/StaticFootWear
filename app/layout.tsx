import './globals.css';
import type { Metadata } from 'next';
import { Ubuntu } from 'next/font/google'; // Ubuntu font import kiya
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

// Font configuration
const ubuntu = Ubuntu({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'], // Light, Regular, Medium, aur Bold weights
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Minal Footwear',
  description: 'Premium footwear for men, women, and kids',
  icons: {
    icon: '/images/footcare.png',
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
      {/* Body tag me ubuntu.className apply kar diya */}
      <body className={`${ubuntu.className} antialiased`}>
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