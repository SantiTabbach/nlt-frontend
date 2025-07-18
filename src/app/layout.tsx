import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type React from 'react';

import { Providers } from './providers';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'No la tires - Rescata comida, salva el planeta',
  description:
    'Plataforma para rescatar comida y reducir el desperdicio alimentario',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
