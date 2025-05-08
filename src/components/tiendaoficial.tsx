import Link from 'next/link';
import Image from 'next/image'; // Added Image import
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
// Added ShoppingCart import
import { ArrowRight, ShoppingCart } from 'lucide-react'; 

export function TiendaOficial() {
    return (
     <div className="lg:col-span-2">
            <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-card sticky top-24">
              <CardHeader className="text-center">
                {/* Used imported ShoppingCart */}
                <ShoppingCart className="h-10 w-10 mx-auto text-accent mb-3" />
                <CardTitle className="text-2xl text-foreground">Tienda Oficial Libertad</CardTitle>
                <CardDescription>
                  Viste los colores de tu pasión. ¡Productos oficiales para verdaderos hinchas del Decano!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center p-2 shadow-inner">
                    {/* Used imported Image */}
                    <Image src="https://picsum.photos/seed/camisetaLibertad/200/200" alt="Camiseta Club Libertad" width={150} height={150} className="object-contain rounded" data-ai-hint="soccer jersey" />
                  </div>
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center p-2 shadow-inner">
                     {/* Used imported Image */}
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
       // Removed extra closing div and extraneous '<' 
    );
}
