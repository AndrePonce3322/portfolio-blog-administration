import Background from '@/components/background';
import MyBlogProvider from '@/context/blog-context';
import type { Metadata } from 'next';
import { Onest } from 'next/font/google';
import { Toaster } from 'sonner';
import './globals.css';
import { Footer } from '@/components/footer';

const onest = Onest({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Administración de Blog',
  description:
    'En esta página web puedes crear blogs, editarlos y eliminarlos de mi blog personal que se encuentra en andrepg.vercel.app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='es-En'>
      <body className={onest.className} data-color-mode='dark'>
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
