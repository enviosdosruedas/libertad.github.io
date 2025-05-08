
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ShoppingCart, Construction, ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tienda Oficial | Club Libertad',
  description: 'Próximamente: La tienda oficial de Club Atlético Libertad.',
};

export default function TiendaPage() {
  return (
    <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-[calc(100vh-15rem)]">
      <Card className="w-full max-w-md text-center shadow-xl">
        <CardHeader>
          <ShoppingCart className="h-16 w-16 mx-auto text-primary mb-4" />
          <CardTitle className="text-3xl font-bold text-primary">
            Tienda Oficial - Próximamente
          </CardTitle>
          <CardDescription className="text-lg text-muted-foreground mt-2">
            Estamos trabajando para traerte los mejores productos de Club Atlético Libertad.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Construction className="h-24 w-24 mx-auto text-accent opacity-50" />
          <p className="text-foreground">
            Nuestra tienda online estará disponible muy pronto con camisetas, indumentaria oficial, accesorios y mucho más para que lleves tus colores con orgullo.
          </p>
          <p className="text-sm text-muted-foreground">
            ¡Vuelve a visitarnos pronto!
          </p>
          <Button asChild variant="outline" className="group">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Volver al Inicio
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
