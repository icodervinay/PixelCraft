import "../styles/globals.css";
import { ReactNode } from "react";
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://yourdomain.com'), // Replace with your actual domain
  title: 'Your Site Title',
  description: 'Your site description',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'http://localhost:3000', // Replace with your actual URL
    siteName: 'Your Site Name',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@yourhandle',
  },
};

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body>
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
