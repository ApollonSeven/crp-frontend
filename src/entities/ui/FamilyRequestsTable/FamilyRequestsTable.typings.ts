interface FamilyMember {
    fullName: string;
    age: number;
    role: string;
  }
  
  interface FamilyRequestsTableProps {
    familyMembers: FamilyMember[];
  }
  
  export type { FamilyMember, FamilyRequestsTableProps };
