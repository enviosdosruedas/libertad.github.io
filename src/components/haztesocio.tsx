
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ShieldCheck, ShoppingCart, ArrowRight, Ticket, Gift } from 'lucide-react';

export function HazteSocio() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-primary/5 via-secondary/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <ShieldCheck className="h-16 w-16 mx-auto text-primary mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
            ¡Únete a la Familia Gumarela! Hazte Socio.
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
                  <ZapIcon className="h-5 w-5 mr-3 mt-1 text-primary flex-shrink-0" /> {/* Using ZapIcon as a generic "priority" icon */}
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

          {/* Tienda Oficial */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-card sticky top-24">
              <CardHeader className="text-center">
                <ShoppingCart className="h-10 w-10 mx-auto text-accent mb-3" />
                <CardTitle className="text-2xl text-foreground">Tienda Oficial Libertad</CardTitle>
                <CardDescription>
                  Viste los colores de tu pasión. ¡Productos oficiales para verdaderos Gumarelos!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center p-2 shadow-inner">
                    <Image src="https://picsum.photos/seed/camisetaLibertad/200/200" alt="Camiseta Club Libertad" width={150} height={150} className="object-contain rounded" data-ai-hint="soccer jersey" />
                  </div>
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center p-2 shadow-inner">
                    <Image src="https://picsum.photos/seed/bufandaLibertad/200/200" alt="Bufanda Club Libertad" width={150} height={150} className="object-contain rounded" data-ai-hint="sports scarf" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  Encuentra camisetas, bufandas, gorras y mucho más. <span className="font-semibold text-primary">¡Los socios tienen 15% de descuento!</span>
                </p>
                <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  {/* Placeholder link for the store */}
                  <Link href="/tienda" target="_blank" rel="noopener noreferrer"> 
                    Ir a la Tienda Online <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

// Placeholder for ZapIcon if not available in lucide-react, using a simple SVG.
// In a real scenario, ensure all icons are available or provide fallbacks.
function ZapIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
