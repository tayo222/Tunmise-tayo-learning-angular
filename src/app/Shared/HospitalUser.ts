export interface HospitalUser {
  id: number;
  firstName: string;
  lastName: string;
  department: string;
  role: string;
  isOnCall?: boolean;
}
