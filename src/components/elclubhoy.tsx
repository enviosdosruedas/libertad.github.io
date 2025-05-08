
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Users, Building, ArrowRight, Zap } from 'lucide-react';

export function ElClubHoy() {
  return (
    <section className="py-12 md:py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Zap className="h-12 w-12 mx-auto text-primary mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
            El Club Hoy: Presente y Futuro
          </h2>
          <p className="mt-3 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre la actualidad de nuestro equipo, nuestros proyectos y cómo ser parte de la familia del Decano.
          </p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <CardHeader className="text-center">
              <Users className="h-12 w-12 mx-auto text-accent mb-4" />
              <CardTitle className="text-2xl text-foreground">Nuestro Equipo Actual</CardTitle>
              <CardDescription className="text-muted-foreground mt-1">
                Conoce a los protagonistas que defienden nuestros colores.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center flex-grow flex flex-col justify-between">
              <p className="text-foreground mb-6 text-base leading-relaxed">
                Nuestro primer equipo está compuesto por una talentosa mezcla de jugadores experimentados y jóvenes promesas, todos dedicados a defender los colores de Libertad con pasión y orgullo. Bajo la dirección de un cuerpo técnico comprometido, trabajamos incansablemente para alcanzar nuestros objetivos en cada competición.
              </p>
              <Button asChild variant="default" size="lg" className="mt-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/team">
                  Conocer al Equipo <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <CardHeader className="text-center">
              <Building className="h-12 w-12 mx-auto text-accent mb-4" />
              <CardTitle className="text-2xl text-foreground">Proyectos en Curso</CardTitle>
               <CardDescription className="text-muted-foreground mt-1">
                Construyendo el futuro de Club Atlético Libertad.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-left flex-grow flex flex-col justify-between">
              <div className="text-foreground mb-6 text-base leading-relaxed space-y-3">
                <p>En Club Atlético Libertad, miramos hacia el futuro con ambición. Estamos desarrollando iniciativas clave para el crecimiento de la institución:</p>
                <ul className="list-disc list-inside space-y-2 pl-2 text-muted-foreground">
                  <li>Modernización de nuestras instalaciones deportivas, incluyendo el estadio principal.</li>
                  <li>Expansión de nuestros programas de desarrollo juvenil para cultivar el talento local.</li>
                  <li>Fortalecimiento de lazos con la comunidad a través de actividades sociales y deportivas.</li>
                </ul>
              </div>
              <Button asChild variant="outline" size="lg" className="mt-auto">
                <Link href="/contact"> {/* Changed from /proyectos to /contact as /proyectos doesn't exist */}
                  Más Información <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
