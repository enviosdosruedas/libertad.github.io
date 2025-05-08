import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HeroPrincipal } from '../components/hero-principal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Trophy, Users, CalendarDays } from 'lucide-react';
import { ProximosPartidos } from '@/components/proximos-partidos';
import { UltimasNoticias } from '@/components/ultimasnoticias';

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
      
      <section className="py-12 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Trophy className="h-12 w-12 mx-auto text-accent mb-4" />
                <CardTitle className="text-2xl text-foreground">Nuestra Historia</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Desde 1906 forjando un legado de pasión y fútbol en Canelones.</p>
                <Button asChild variant="outline">
                  <Link href="/history">Descubrir Legado <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 mx-auto text-accent mb-4" />
                <CardTitle className="text-2xl text-foreground">Nuestro Equipo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Conoce a los jugadores y cuerpo técnico que defienden nuestros colores.</p>
                <Button asChild variant="outline">
                  <Link href="/team">Ver Plantel <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CalendarDays className="h-12 w-12 mx-auto text-accent mb-4" />
                <CardTitle className="text-2xl text-foreground">Únete al Club</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Forma parte de la familia Gumarela. Información de contacto y cómo asociarte.</p>
                <Button asChild variant="outline">
                  <Link href="/contact">Contactanos <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
