interface PlayerMember {
  fullName: string;
  age: number;
  rank: string;
  id: number;
  
}

interface PlayerSelectProps {
  onChange: () => void;
  playerMembers: PlayerMember[];
}

export type { PlayerMember, PlayerSelectProps };