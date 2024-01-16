import Background from '@/components/background';
import MyBlogProvider from '@/context/blog-context';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import './globals.css';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Administración de Blog',
  description:
    'En esta página web puedes crear blogs, editarlos y eliminarlos.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='es-En'>
      <body className={inter.className} data-color-mode='dark'>
        <MyBlogProvider>
          <Background />
          {children}
          <Toaster />
          <Footer />
        </MyBlogProvider>
      </body>
    </html>
  );
}
