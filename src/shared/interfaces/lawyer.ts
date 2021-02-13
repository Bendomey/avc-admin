import { User } from "./shared";

export interface Lawyer {
  id: string;
  addressCountry: string;
  addressCity: string;
  addressNumber: string;
  addressStreetNumber: string;
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
