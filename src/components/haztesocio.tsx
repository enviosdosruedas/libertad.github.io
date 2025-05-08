
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
// Added Zap icon import
import { ShieldCheck, ShoppingCart, ArrowRight, Ticket, Gift, Zap } from 'lucide-react'; 
import { TiendaOficial } from './tiendaoficial';

export function HazteSocio() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-primary/5 via-secondary/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <ShieldCheck className="h-16 w-16 mx-auto text-primary mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
            ¡Únete a la Familia del Decano! Hazte Socio.
          </h2>
          <p className="mt-3 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Vive la pasión por Club Atlético Libertad desde adentro. Disfruta de beneficios exclusivos y apoya a tu equipo como nunca antes.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Beneficios y Cómo Unirse */}
          <div className="lg:col-span-3 space-y-8">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center">
                  <Gift className="h-7 w-7 mr-3 text-accent" />
                  Beneficios Exclusivos para Socios
                </CardTitle>
                <CardDescription>
                  Ser socio de Club Libertad te da más que solo fútbol.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div className="flex items-start">
                  <Ticket className="h-5 w-5 mr-3 mt-1 text-primary flex-shrink-0" />
                  <p><span className="font-semibold text-foreground">Descuentos en Entradas:</span> Accede a precios preferenciales para todos nuestros partidos de local.</p>
                </div>
                <div className="flex items-start">
                  <ShieldCheck className="h-5 w-5 mr-3 mt-1 text-primary flex-shrink-0" />
                  <p><span className="font-semibold text-foreground">Eventos Exclusivos:</span> Participa en encuentros con jugadores, cenas de gala y actividades únicas para socios.</p>
                </div>
                <div className="flex items-start">
                  <ShoppingCart className="h-5 w-5 mr-3 mt-1 text-primary flex-shrink-0" />
                  <p><span className="font-semibold text-foreground">Descuentos en Tienda Oficial:</span> Obtén un 15% de descuento en todos los productos de nuestra tienda oficial.</p>
                </div>
                 <div className="flex items-start">
                   {/* Changed from ZapIcon to Zap */}
                  <Zap className="h-5 w-5 mr-3 mt-1 text-primary flex-shrink-0" /> 
                  <p><span className="font-semibold text-foreground">Prioridad en Compras:</span> Ten acceso anticipado a la venta de entradas para partidos importantes y finales.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">¿Cómo Hacerte Socio?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Es muy fácil ser parte del club de tus amores. Acércate a nuestra sede social o contáctanos para conocer los planes de membresía y comenzar a disfrutar de todos los beneficios.
                </p>
                <Button asChild size="lg" className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/contact">
                    Quiero Ser Socio <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <TiendaOficial /> 
        </div> {/* This closes the grid div */}
      </div>
    </section> 
  );
}
