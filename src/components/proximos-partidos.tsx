'use client';

import type { FC } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, Clock, MapPin, Users, ArrowRight } from 'lucide-react';
import React, { useState, useEffect } from 'react';

// Define the type for a partido, mirroring what's in partidos-data.ts implicitly
interface Partido {
  id: string;
  local: string;
  visitante: string;
  fecha: string; // ISO string date
  lugar: string;
}

interface ProximosPartidosProps {
  showViewAllLink?: boolean;
  limit?: number;
}

export const ProximosPartidos: FC<ProximosPartidosProps> = ({ showViewAllLink = true, limit }) => {
  const [partidosData, setPartidosData] = useState<Partido[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Import the data module inside useEffect.
    // This ensures that if Math.random() is used in partidos-data.ts,
    // it's effectively handled client-side post-hydration for this component's usage.
    import('@/lib/partidos-data').then(module => {
      setPartidosData(module.partidos);
      setIsLoading(false);
    }).catch(error => {
      console.error("Failed to load partidos data:", error);
      setIsLoading(false); // Ensure loading stops even on error
    });
  }, []);

  const partidosToShow = limit ? partidosData.slice(0, limit) : partidosData;

  if (isLoading) {
    return (
        <div className="text-center py-10">
            <CalendarDays className="h-16 w-16 mx-auto text-muted-foreground mb-4 animate-pulse" />
            <p className="text-xl text-muted-foreground">Cargando próximos partidos...</p>
        </div>
    );
  }

  if (!partidosToShow || partidosToShow.length === 0) {
    return (
      <div className="text-center py-10">
        <CalendarDays className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
        <p className="text-xl text-muted-foreground">No hay próximos partidos programados.</p>
        <p className="text-sm text-muted-foreground">Por favor, revisa más tarde para actualizaciones.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partidosToShow.map((partido) => {
          const matchDateTime = new Date(partido.fecha);
          // Date formatting can also be a source of hydration errors if server/client timezones or locales differ.
          // Using specific locales like 'es-ES' helps, but ensure server environment is consistent or dates are UTC.
          let formattedDate = '';
          let formattedTime = '';

          // Ensure Date methods are called only on client after hydration for safety, or ensure consistent server/client timezone
          if (!isLoading) { // Or check if window is defined, but useEffect already handles client-side only logic
            formattedDate = matchDateTime.toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'long',
            });
            formattedTime = matchDateTime.toLocaleTimeString('es-ES', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
            });
          }


          return (
            <Card key={partido.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col bg-card">
              <CardHeader className="bg-secondary/30 p-4">
                <CardTitle className="text-lg text-primary flex items-center justify-between">
                  <span>Próximo Partido</span>
                  <CalendarDays className="h-5 w-5 text-primary/80" />
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 flex-grow space-y-4">
                <div className="flex items-center justify-around text-center">
                  <div className="flex flex-col items-center w-2/5 space-y-1">
                    <div className="h-16 w-16 bg-muted rounded-full flex items-center justify-center mb-1" data-ai-hint="team logo">
                      {partido.local === "CLUB ATLETICO LIBERTAD" ? (
                        <img src="/Libertad.png" alt="Club Libertad Logo" className="h-10 w-10 object-contain" />
                      ) : (
                        <Users className="h-8 w-8 text-muted-foreground" />
                      )}
                    </div>
                    <span className="font-semibold text-base text-foreground truncate w-full" title={partido.local}>
                      {partido.local}
                    </span>
                    <span className="text-xs text-muted-foreground">(Local)</span>
                  </div>
                  <span className="text-2xl font-bold text-muted-foreground">VS</span>
                  <div className="flex flex-col items-center w-2/5 space-y-1">
                     <div className="h-16 w-16 bg-muted rounded-full flex items-center justify-center mb-1" data-ai-hint="team logo">
                       {partido.visitante === "CLUB ATLETICO LIBERTAD" ? (
                        <img src="/Libertad.png" alt="Club Libertad Logo" className="h-10 w-10 object-contain" />
                      ) : (
                        <Users className="h-8 w-8 text-muted-foreground" />
                      )}
                    </div>
                    <span className="font-semibold text-base text-foreground truncate w-full" title={partido.visitante}>
                      {partido.visitante}
                    </span>
                     <span className="text-xs text-muted-foreground">(Visitante)</span>
                  </div>
                </div>
                <div className="border-t border-border pt-4 space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CalendarDays className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                    <span>{formattedDate || 'Calculando fecha...'}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                    <span>{formattedTime ? `${formattedTime} hs.` : 'Calculando hora...'}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                    <span>{partido.lugar}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {showViewAllLink && partidosData.length > 0 && (
        <div className="text-center mt-12">
          <Button asChild variant="default" size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/matches">
              Ver Todos los Partidos <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
};
