import './globals.css';
import type { Metadata } from 'next';
import { Lexend } from 'next/font/google'; // Lexend import kiya
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

// Lexend configuration
// Footwear web ke liye 300 (Light) aur 400 (Regular) weight kaafi 'cool' aur clean dikhte hain
const lexend = Lexend({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'], 
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
      {/* Body tag me lexend.className apply kar diya */}
      <body className={`${lexend.className} antialiased`}>
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