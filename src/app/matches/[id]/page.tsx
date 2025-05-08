import { matches } from '@/lib/placeholder-data';
import { MatchItem } from '@/components/match-item';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, BarChart2, Youtube, Newspaper } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export async function generateStaticParams() {
  return matches.map((match) => ({
    id: match.id,
  }));
}

export default function MatchDetailPage({ params }: { params: { id: string } }) {
  const match = matches.find((m) => m.id === params.id);

  if (!match) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold text-destructive">Match Not Found</h1>
        <p className="text-muted-foreground mt-4">The match you are looking for does not exist.</p>
        <Button asChild variant="link" className="mt-6">
          <Link href="/matches"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Matches</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-8">
         <Button asChild variant="outline" className="mb-6">
          <Link href="/matches"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Matches</Link>
        </Button>
        <h1 className="text-3xl md:text-4xl font-bold text-center text-primary">
          Match Details
        </h1>
      </header>

      <MatchItem match={match} />

      <Card className="mt-8 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Additional Information</CardTitle>
          <CardDescription>More about the game against {match.opponent}.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-2 text-foreground">Match Summary</h3>
            <p className="text-muted-foreground">
              {match.status === 'past' 
                ? `The match against ${match.opponent} concluded with a score of ${match.score}. It was played on ${new Date(match.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} at ${match.time}, hosted at ${match.venue}.`
                : `Club Libertad is scheduled to play against ${match.opponent} on ${new Date(match.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} at ${match.time}. The match will take place at ${match.venue}.`}
            </p>
             {match.status === 'past' && (
              <p className="text-muted-foreground mt-2">Further details, player statistics, and post-match analysis would be available here.</p>
            )}
          </div>
          
          {match.status === 'past' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-secondary/30">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl"><BarChart2 className="mr-2 h-5 w-5 text-primary" />Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Detailed match statistics (possession, shots, etc.) would be displayed here.</p>
                  <Image src="https://picsum.photos/seed/matchstats/600/300" alt="Match Statistics Placeholder" width={600} height={300} className="rounded-md mt-4 shadow-sm" data-ai-hint="chart graph" />
                </CardContent>
              </Card>
              <Card className="bg-secondary/30">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl"><Youtube className="mr-2 h-5 w-5 text-primary" />Highlights</CardTitle>
                </CardHeader>
                <CardContent>
                  {match.highlightsLink ? (
                    <Button asChild className="w-full">
                      <Link href={match.highlightsLink} target="_blank" rel="noopener noreferrer">Watch Highlights</Link>
                    </Button>
                  ) : (
                    <p className="text-muted-foreground">Match highlights will be available soon.</p>
                  )}
                   <Image src="https://picsum.photos/seed/matchvideo/600/300" alt="Match Video Placeholder" width={600} height={300} className="rounded-md mt-4 shadow-sm" data-ai-hint="soccer game" />
                </CardContent>
              </Card>
            </div>
          )}

          <div>
            <h3 className="font-semibold text-lg mb-2 text-foreground">Related News</h3>
            <div className="space-y-3">
              {[1,2].map(idx => (
                 <Link key={idx} href="#" className="block p-3 rounded-md hover:bg-secondary transition-colors group">
                  <p className="font-medium text-primary group-hover:text-accent">Preview: Libertad prepares for clash with {match.opponent} <Newspaper className="inline ml-1 h-4 w-4" /></p>
                  <p className="text-xs text-muted-foreground">{(new Date(match.date).getTime() - (3-idx)*24*60*60*1000).toLocaleString()}</p>
                </Link>
              ))}
            </div>
          </div>

        </CardContent>
      </Card>
    </div>
  );
}
