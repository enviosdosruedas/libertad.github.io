import { MatchItem } from '@/components/match-item';
import { matches as allMatchesFromPlaceholder } from '@/lib/placeholder-data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CalendarDays } from 'lucide-react';
import { ProximosPartidos } from '@/components/proximos-partidos';

export default function MatchesPage() {
  const pastMatches = allMatchesFromPlaceholder.filter((match) => match.status === 'past').sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Centro de Partidos
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Mantente al día con los encuentros y resultados de Club Atlético Libertad.
        </p>
      </header>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:w-1/2 mx-auto mb-10">
          <TabsTrigger value="upcoming">Próximos Partidos</TabsTrigger>
          <TabsTrigger value="past">Resultados Anteriores</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming">
          <ProximosPartidos showViewAllLink={false} />
        </TabsContent>

        <TabsContent value="past">
          {pastMatches.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastMatches.map((match) => (
                <MatchItem key={match.id} match={match} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <CalendarDays className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <p className="text-xl text-muted-foreground">No hay resultados de partidos anteriores disponibles.</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
