import { User } from "./shared";

export interface Lawyer {
  id: string;
  addressCountry: string;
  addressCity: string;
  addressNumber: string;
  addressStreetName: string;
  barMembershipCard: string;
  coverLetter: string;
  tin: string;
  cv: string;
  digitalAddress: string;
  firstYearOfBarAdmission: string;
  lawCertificate: string;
  licenseNumber: string;
  nationalIDBack: string;
  nationalIDFront: string;
  approvedAt: Date;
  createdAt: Date;
  updatedAt: Date;
  user: User;
}

export interface GetLawyersInputProps {
  filter?: {};
  skip?: number;
  limit?: number;
}

export interface GetLawyersOutputProps {
  lawyers: Lawyer[];
  lawyersLength: number;
}

//approve
export interface ApproveLawyersInputProps {
  id: string;
}

export interface ApproveLawyersOutputProps {
  approveLawyer: boolean;
}

//suspend
export interface SuspendLawyersInputProps {
  id: string;
  reason: string;
}

export interface SuspendLawyersOutputProps {
  suspendUser: boolean;
}

//restore
export interface RestoreLawyersInputProps {
  id: string;
}

export interface RestoreLawyersOutputProps {
  restoreUser: boolean;
}
