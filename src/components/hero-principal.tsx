
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroPrincipal() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/80 via-primary to-red-700 text-primary-foreground shadow-lg">
      <div className="absolute inset-0">
        <Image
          src="/HeroPrincipal.png"
          alt="Estadio del Club Libertad"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
          data-ai-hint="football stadium"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-block mb-8 p-4 bg-white/20 rounded-lg shadow-xl">
          <div className="flex flex-col items-center">
            <Image src="/Logo.svg" alt="Escudo del Club Libertad" width={96} height={96} className="h-24 w-auto" />
            <span className="mt-2 font-semibold text-2xl text-primary-foreground">
              Club Atlético Libertad
            </span>
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          El corazón futbolero de Canelones desde 1906
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Fundado con la pasión del fútbol uruguayo naciente. Descubre nuestra rica historia, el equipo actual y las últimas novedades del "Libertad".
        </p>
        <div className="space-x-4">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg shadow-md transition-transform hover:scale-105">
            <Link href="/matches">Próximos Partidos <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3 rounded-lg shadow-md transition-transform hover:scale-105"
          >
            <Link href="/history">Nuestro Legado</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
