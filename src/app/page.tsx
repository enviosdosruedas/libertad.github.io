
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HeroPrincipal } from '../components/hero-principal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Trophy, Users, CalendarDays } from 'lucide-react';
import { ProximosPartidos } from '@/components/proximos-partidos';
import { UltimasNoticias } from '@/components/ultimasnoticias';
import { HistoriaResumen } from '@/components/historiaresumen';
import { ElClubHoy } from '@/components/elclubhoy';
import { HazteSocio } from '@/components/haztesocio';

export default function HomePage() {
  return (
    <div className="flex flex-col ">
      <HeroPrincipal />
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
              Próximos Encuentros
            </h2>
            <p className="mt-3 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              No te pierdas los próximos partidos de Club Atlético Libertad. ¡Acompaña al equipo!
            </p>
          </div>
          <ProximosPartidos limit={3} showViewAllLink={true} />
        </div>
      </section>

      <section className="py-12 md:py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
              Últimas Noticias
            </h2>
            <p className="mt-3 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Mantente al día con las novedades más recientes de Club Atlético Libertad.
            </p>
          </div>
          <UltimasNoticias limit={3} showViewAllLink={true} />
        </div>
      </section>
      
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <HistoriaResumen />
        </div>
      </section>

      <ElClubHoy />
      
      <HazteSocio />
    </div>
  );
}

