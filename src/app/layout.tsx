import { SearchContextProvider } from '@/context/search';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Criado com Next.JS v14.2.3 - Manoel Pereira dos Santos',
  description: 'Criado com Next.JS v14.2.3 - Manoel Pereira dos Santos'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SearchContextProvider>{children}</SearchContextProvider>
      </body>
    </html>
  );
}
