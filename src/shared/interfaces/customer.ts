import { User } from "./shared";

export interface Customer {
  id: string;
  user: User;
  addressCountry: string;
  addressCity: string;
  addressNumber: string;
  addressStreetNumber: string;
  digitalAddress: string;
  tin: string;
  type: string;
  companyName: string;
  companyEntityType: string;
  companyEntityTypeOther: string;
  companyDateOfRegistration: Date;
  companyCountryOfRegistration: string;
  companyRegistrationNumber: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface GetCustomersInputProps {
  filter?: {};
  skip?: number;
  limit?: number;
}

export interface GetCustomersOutputProps {
  customers: Customer[];
  customersLength: number;
}

//suspend
export interface SuspendCustomersInputProps {
  id: string;
  reason: string;
}

export interface SuspendCustomersOutputProps {
  suspendUser: boolean;
}

//restore
export interface RestoreCustomersInputProps {
  id: string;
}

export interface RestoreCustomersOutputProps {
  restoreUser: boolean;
}
