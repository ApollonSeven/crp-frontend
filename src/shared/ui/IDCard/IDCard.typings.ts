
export interface IDCardProps {
  state: string;
  id: string;
  expireDate: string;
  familyName: string;
  lastName: string;
  street: string;
  dateofBirth: string;
  photoURL: string;
  donor: boolean;
  sex?: 'M' | 'F';
  height: string;
  hair?: 'BRN' | 'BLD' | 'GNG' | 'WHT' | 'BLK';
  weight: number;
  eyes?: 'BRN' | 'BLK' | 'WHT' | 'GRN' | 'GRY' | 'BLU';
  issued: string;
  documentD11r: string;
  signature: string;
}
