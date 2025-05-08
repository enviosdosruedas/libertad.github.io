import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Trophy, Users, CalendarDays } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col ">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/80 via-primary to-red-700 text-primary-foreground shadow-lg">
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/seed/stadium/1920/1080"
            alt="Club Libertad Stadium"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
            data-ai-hint="football stadium"
          />
           <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block mb-8 p-4 bg-white/20 rounded-lg shadow-xl">
            <div className="flex flex-col items-center">
              <Image src="/Libertad.png" alt="Club Libertad Logo" width={96} height={96} className="h-24 w-auto" />
              <span className="mt-2 font-semibold text-2xl text-primary-foreground">
                Club Libertad
              </span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Welcome to Club Atlético Libertad
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            The official home of the Gumarelo. Discover our history, team, and latest news.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg shadow-md transition-transform hover:scale-105">
              <Link href="/matches">Upcoming Matches <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg shadow-md transition-transform hover:scale-105">
              <Link href="/history">Our Legacy</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Explore Our Club</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/history" className="group">
              <Card className="hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <CardHeader className="items-center text-center">
                  <Trophy className="h-12 w-12 text-primary mb-4 group-hover:text-accent transition-colors" />
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">Our Rich History</CardTitle>
                </CardHeader>
                <CardContent className="text-center flex-grow">
                  <p className="text-muted-foreground">Founded in 1906, explore the legacy and triumphs of Club Libertad.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/team" className="group">
              <Card className="hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <CardHeader className="items-center text-center">
                  <Users className="h-12 w-12 text-primary mb-4 group-hover:text-accent transition-colors" />
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">Meet the Team</CardTitle>
                </CardHeader>
                <CardContent className="text-center flex-grow">
                  <p className="text-muted-foreground">Get to know our talented players and dedicated technical staff.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/matches" className="group">
              <Card className="hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <CardHeader className="items-center text-center">
                  <CalendarDays className="h-12 w-12 text-primary mb-4 group-hover:text-accent transition-colors" />
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">Matches & Results</CardTitle>
                </CardHeader>
                <CardContent className="text-center flex-grow">
                  <p className="text-muted-foreground">Stay updated with our match schedule and latest game results.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
