import React from 'react';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';

import ThemeProvider from '@/providers/ThemeProvider';

const fontSans = FontSans({ subsets: ['latin'] });

export const metadata = {
  title: 'TransGo - K3 Website',
  description: 'Go Safe, Go Smart with TransGo!',
  icons: {
    icon: [
      { url: './favicon.ico', sizes: 'any' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fontSans.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
