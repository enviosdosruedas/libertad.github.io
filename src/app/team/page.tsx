import { TeamMemberCard } from '@/components/team-member-card';
import { teamPlayers, technicalStaff } from '@/lib/placeholder-data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users } from 'lucide-react';

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Our Squad
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Meet the dedicated players and staff of Club Atlético Libertad.
        </p>
      </header>

      <Tabs defaultValue="players" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:w-1/2 mx-auto mb-8">
          <TabsTrigger value="players">Players</TabsTrigger>
          <TabsTrigger value="staff">Technical Staff</TabsTrigger>
        </TabsList>
        
        <TabsContent value="players">
          <section>
            <h2 className="text-3xl font-semibold mb-8 text-center text-foreground">
              First Team Players
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {teamPlayers.map((player) => (
                <TeamMemberCard key={player.id} member={player} />
              ))}
            </div>
          </section>
        </TabsContent>

        <TabsContent value="staff">
          <section>
            <h2 className="text-3xl font-semibold mb-8 text-center text-foreground">
              Technical & Support Staff
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {technicalStaff.map((staff) => (
                <TeamMemberCard key={staff.id} member={staff} />
              ))}
            </div>
          </section>
        </TabsContent>
      </Tabs>
    </div>
  );
}
