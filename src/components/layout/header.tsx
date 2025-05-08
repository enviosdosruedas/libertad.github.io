import Link from 'next/link';
import Image from 'next/image';
import { MainNav } from './main-nav';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <Image src="/Libertad.png" alt="Club Libertad Logo" width={40} height={40} className="h-10 w-auto" />
          <span className="font-semibold text-xl text-primary group-hover:text-accent transition-colors">
            Club Libertad
          </span>
        </Link>
        
        <div className="hidden md:flex">
          <MainNav />
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <Link href="/" className="flex items-center space-x-2 mb-4 group">
                  <Image src="/Libertad.png" alt="Club Libertad Logo" width={40} height={40} className="h-10 w-auto" />
                   <span className="font-semibold text-xl text-primary group-hover:text-accent transition-colors">
                    Club Libertad
                  </span>
                </Link>
                {[
                  { href: '/', label: 'Inicio' },
                  { href: '/history', label: 'Historia' },
                  { href: '/team', label: 'Equipo' },
                  { href: '/matches', label: 'Partidos' },
                  { href: '/noticias', label: 'Noticias' },
                  { href: '/contact', label: 'Contacto' },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
