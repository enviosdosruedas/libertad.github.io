import Image from 'next/image';
import type { TeamMember } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Shield } from 'lucide-react'; // Shield for jersey number

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <CardHeader className="p-0 relative">
        <div className="aspect-[4/3] relative w-full">
          <Image
            src={member.imageUrl}
            alt={member.name}
            layout="fill"
            objectFit="cover"
            data-ai-hint="person portrait"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow flex flex-col">
        <div className="flex-grow">
          <Badge variant={member.category === 'Player' ? 'default' : 'secondary'} className="mb-2 bg-primary text-primary-foreground">
            {member.category}
          </Badge>
          <CardTitle className="text-2xl font-semibold mb-1 text-foreground">{member.name}</CardTitle>
          <CardDescription className="text-primary mb-3">{member.role}</CardDescription>
          {member.category === 'Player' && member.jerseyNumber && (
            <div className="flex items-center text-sm text-muted-foreground mb-3">
              <Shield className="h-4 w-4 mr-2 text-primary" />
              Jersey: {member.jerseyNumber}
            </div>
          )}
          {member.bio && <p className="text-sm text-muted-foreground line-clamp-3">{member.bio}</p>}
        </div>
      </CardContent>
    </Card>
  );
}
