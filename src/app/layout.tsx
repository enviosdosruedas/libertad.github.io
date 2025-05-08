import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';

// Removed erroneous function calls:
// const geistSans = GeistSans({
//   variable: '--font-geist-sans',
// });
// const geistMono = GeistMono({
//   variable: '--font-geist-mono',
// });

export const metadata: Metadata = {
  title: 'Club Libertad Oficial',
  description: 'Sitio Oficial de Club Atletico Libertad',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          GeistSans.variable, // Use .variable directly
          GeistMono.variable  // Use .variable directly
        )}
      >
        <div className="relative flex min-h-dvh flex-col bg-background">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
