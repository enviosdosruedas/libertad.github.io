import Image from 'next/image';
import Link from 'next/link';
import type { Match } from '@/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Clock, MapPin, ShieldCheck, ShieldX, Tv, ArrowRight } from 'lucide-react';

interface MatchItemProps {
  match: Match;
}

export function MatchItem({ match }: MatchItemProps) {
  const matchDate = new Date(match.date);
  const formattedDate = matchDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const isPast = match.status === 'past';
  const isWin = isPast && match.clubScore !== undefined && match.opponentScore !== undefined && match.clubScore > match.opponentScore;
  const isDraw = isPast && match.clubScore !== undefined && match.opponentScore !== undefined && match.clubScore === match.opponentScore;
  const isLoss = isPast && match.clubScore !== undefined && match.opponentScore !== undefined && match.clubScore < match.opponentScore;

  let statusBadgeVariant: "default" | "secondary" | "destructive" | "outline" = "default";
  let statusIcon = <CalendarDays className="h-4 w-4 mr-2" />;

  if (isPast) {
    if (isWin) {
      statusBadgeVariant = "default"; // Greenish if theme supports it, or primary
      statusIcon = <ShieldCheck className="h-4 w-4 mr-2 text-green-500" />;
    } else if (isDraw) {
      statusBadgeVariant = "secondary";
      statusIcon = <CalendarDays className="h-4 w-4 mr-2 text-yellow-500" />; // Or some neutral icon
    } else if (isLoss) {
      statusBadgeVariant = "destructive";
      statusIcon = <ShieldX className="h-4 w-4 mr-2 text-red-500" />;
    }
  }


  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <CardHeader className="bg-secondary/30 p-4">
        <div className="flex justify-between items-center">
          <Badge variant={isPast ? "secondary" : "default"} className={isPast ? "" : "bg-primary text-primary-foreground animate-pulse"}>
            {isPast ? "Played" : "Upcoming"}
          </Badge>
          <div className="text-sm text-muted-foreground flex items-center">
             <CalendarDays className="h-4 w-4 mr-1 text-primary" /> {formattedDate}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="flex items-center justify-around w-full">
            <div className="flex flex-col items-center w-1/3">
              <Image src="/Libertad.png" alt="Club Libertad Logo" width={64} height={64} className="h-12 w-12 md:h-16 md:w-16 object-contain" />
              <span className="font-semibold mt-2 text-lg text-foreground">Club Libertad</span>
            </div>
            <div className="flex flex-col items-center">
              {isPast ? (
                <span className="text-3xl md:text-4xl font-bold text-primary">{match.score}</span>
              ) : (
                <span className="text-2xl md:text-3xl font-bold text-muted-foreground">VS</span>
              )}
              <span className="text-sm text-muted-foreground mt-1 flex items-center">
                <Clock className="h-3 w-3 mr-1" /> {match.time}
              </span>
            </div>
            <div className="flex flex-col items-center w-1/3">
              {match.opponentLogo ? (
                <Image src={match.opponentLogo} alt={match.opponent} width={64} height={64} className="h-12 w-12 md:h-16 md:w-16 object-contain" data-ai-hint="sports logo" />
              ) : (
                <div className="h-12 w-12 md:h-16 md:w-16 bg-muted rounded-full flex items-center justify-center">
                  <Tv className="h-6 w-6 text-muted-foreground" />
                </div>
              )}
              <span className="font-semibold mt-2 text-lg text-foreground">{match.opponent}</span>
            </div>
          </div>
          
          <div className="text-sm text-muted-foreground flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-primary" /> {match.venue}
          </div>

          {isPast && (
             <Badge variant={statusBadgeVariant} className="mt-2">
              {isWin && "VICTORY"}
              {isDraw && "DRAW"}
              {isLoss && "DEFEAT"}
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 bg-secondary/30">
        <Button asChild variant="ghost" className="w-full text-primary hover:text-accent group">
          <Link href={`/matches/${match.id}`}>
            Match Details <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
