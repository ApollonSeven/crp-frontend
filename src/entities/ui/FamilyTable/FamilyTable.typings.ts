interface FamilyMember {
    fullName: string;
    age: number;
    role: string;
  }
  
  interface FamilyTableProps {
    familyMembers: FamilyMember[];
  }
  
  export type { FamilyMember, FamilyTableProps };
