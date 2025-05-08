import type { Milestone, TeamMember, Match } from '@/types';
import { ScrollText, Award, CalendarCheck2, Users, User, Shirt, ShieldAlert, CalendarDays, Clock, MapPinIcon, Swords, Trophy, BarChart } from 'lucide-react';

export const historicalMilestones: Milestone[] = [
  {
    id: '1',
    year: 1906,
    event: 'Club Foundation',
    description: 'Club Atlético Libertad was founded, beginning a rich history in Paraguayan football.',
    icon: ScrollText,
  },
  {
    id: '2',
    year: '1910s-1940s',
    event: 'Early Championships',
    description: 'Secured multiple national championships, establishing itself as a dominant force. (e.g., 1910, 1917, 1920, 1930, 1943, 1945)',
    icon: Trophy,
  },
  {
    id: '3',
    year: 1955,
    event: 'Professional Era Triumph',
    description: 'Won the first championship in the professional era of Paraguayan football.',
    icon: Award,
  },
  {
    id: '4',
    year: '1976 & 2006',
    event: 'Copa Libertadores Semi-Finals',
    description: 'Reached the semi-finals of the prestigious Copa Libertadores, marking significant international achievements.',
    icon: BarChart,
  },
  {
    id: '5',
    year: '2000s-Present',
    event: 'Modern Dominance & Consistent Success',
    description: 'Experienced a golden age with numerous league titles (Apertura & Clausura) and consistent participation in international tournaments.',
    icon: CalendarCheck2,
  },
];

export const teamPlayers: TeamMember[] = [
  {
    id: 'p1',
    name: 'Martín Silva',
    role: 'Goalkeeper',
    category: 'Player',
    imageUrl: 'https://picsum.photos/seed/MartinSilva/200/200',
    jerseyNumber: 1,
    bio: 'Experienced goalkeeper known for his commanding presence and sharp reflexes.',
  },
  {
    id: 'p2',
    name: 'Iván Ramírez',
    role: 'Right Back',
    category: 'Player',
    imageUrl: 'https://picsum.photos/seed/IvanRamirez/200/200',
    jerseyNumber: 2,
    bio: 'Dynamic right back, contributing both defensively and in attack.',
  },
  {
    id: 'p3',
    name: 'Diego Viera',
    role: 'Center Back',
    category: 'Player',
    imageUrl: 'https://picsum.photos/seed/DiegoViera/200/200',
    jerseyNumber: 3,
    bio: 'Solid and reliable defender, a leader at the back.',
  },
  {
    id: 'p4',
    name: 'Roque Santa Cruz',
    role: 'Forward',
    category: 'Player',
    imageUrl: 'https://picsum.photos/seed/RoqueSantaCruz/200/200',
    jerseyNumber: 24,
    bio: 'Legendary striker with a wealth of experience and a keen eye for goal.',
  },
  {
    id: 'p5',
    name: 'Lorenzo Melgarejo',
    role: 'Winger/Forward',
    category: 'Player',
    imageUrl: 'https://picsum.photos/seed/LorenzoMelgarejo/200/200',
    jerseyNumber: 10,
    bio: 'Versatile attacker, known for his speed and goal-scoring ability.',
  },
  {
    id: 'p6',
    name: 'Héctor Villalba',
    role: 'Winger',
    category: 'Player',
    imageUrl: 'https://picsum.photos/seed/HectorVillalba/200/200',
    jerseyNumber: 7,
    bio: 'Pacy winger with excellent dribbling skills and crossing ability.'
  },
];

export const technicalStaff: TeamMember[] = [
  {
    id: 's1',
    name: 'Ariel Galeano',
    role: 'Head Coach',
    category: 'Technical Staff',
    imageUrl: 'https://picsum.photos/seed/ArielGaleano/200/200',
    bio: 'Strategic thinker leading the team with passion and tactical acumen.',
  },
  {
    id:s2: 's2',
    name: 'Juan Samudio',
    role: 'Assistant Coach',
    category: 'Technical Staff',
    imageUrl: 'https://picsum.photos/seed/JuanSamudio/200/200',
    bio: 'Provides crucial support to the head coach and player development.'
  },
  {
    id: 's3',
    name: 'Dr. Luis Moreno',
    role: 'Team Doctor',
    category: 'Technical Staff',
    imageUrl: 'https://picsum.photos/seed/DrLuisMoreno/200/200',
    bio: 'Ensures the health and fitness of the players.',
  },
];


export const matches: Match[] = [
  {
    id: 'm1',
    opponent: 'Cerro Porteño',
    opponentLogo: 'https://picsum.photos/seed/CerroPorteno/40/40',
    date: '2024-08-15',
    time: '20:00',
    venue: 'Estadio Defensores del Chaco',
    status: 'upcoming',
  },
  {
    id: 'm2',
    opponent: 'Olimpia',
    opponentLogo: 'https://picsum.photos/seed/Olimpia/40/40',
    date: '2024-08-22',
    time: '19:30',
    venue: 'Estadio Tigo La Huerta',
    status: 'upcoming',
  },
  {
    id: 'm3',
    opponent: 'Guaraní',
    opponentLogo: 'https://picsum.photos/seed/Guarani/40/40',
    date: '2024-07-28',
    time: '17:00',
    venue: 'Estadio Rogelio Livieres',
    status: 'past',
    score: '2 - 1',
    clubScore: 2,
    opponentScore: 1,
  },
  {
    id: 'm4',
    opponent: 'Nacional',
    opponentLogo: 'https://picsum.photos/seed/Nacional/40/40',
    date: '2024-07-21',
    time: '16:00',
    venue: 'Estadio Tigo La Huerta',
    status: 'past',
    score: '0 - 0',
    clubScore: 0,
    opponentScore: 0,
  },
];
