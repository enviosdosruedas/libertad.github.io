import { MatchItem } from '@/components/match-item';
import { matches as allMatches } from '@/lib/placeholder-data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CalendarDays } from 'lucide-react';

export default function MatchesPage() {
  const upcomingMatches = allMatches.filter((match) => match.status === 'upcoming').sort((a,b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const pastMatches = allMatches.filter((match) => match.status === 'past').sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Match Center
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Stay updated with Club Libertad's fixtures and results.
        </p>
      </header>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:w-1/2 mx-auto mb-10">
          <TabsTrigger value="upcoming">Upcoming Matches</TabsTrigger>
          <TabsTrigger value="past">Past Results</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming">
          {upcomingMatches.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingMatches.map((match) => (
                <MatchItem key={match.id} match={match} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <CalendarDays className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <p className="text-xl text-muted-foreground">No upcoming matches scheduled at the moment.</p>
              <p className="text-sm text-muted-foreground">Please check back later for updates.</p>
            </div>
          )}
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
              <p className="text-xl text-muted-foreground">No past match results available yet.</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
