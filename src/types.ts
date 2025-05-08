export interface Milestone {
  id: string;
  year: number | string;
  event: string;
  description: string;
  icon?: React.ElementType;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string; // e.g., Forward, Midfielder, Head Coach
  category: 'Player' | 'Technical Staff';
  imageUrl: string; // Placeholder URL
  jerseyNumber?: number; // Optional for players
  bio?: string; // Optional short bio
}

export interface Match {
  id: string;
  opponent: string;
  opponentLogo?: string; // Placeholder URL
  date: string; // Consider using Date object if timezones are important, string for simplicity
  time: string;
  venue: string; // e.g., "Home", "Away - Opponent Stadium"
  status: 'upcoming' | 'past';
  score?: string; // e.g., "2 - 1", "0 - 0" (only for past matches)
  clubScore?: number;
  opponentScore?: number;
  highlightsLink?: string; // Optional link to highlights
}

export interface NewsArticle {
  id: string;
  title: string;
  date: string; // ISO string for date
  extract: string;
  imageUrl?: string; // Placeholder URL for image
  content: string; // Full content of the news
  category?: string;
}
