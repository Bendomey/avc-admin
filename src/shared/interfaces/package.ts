import { User } from "./shared";

export interface Package {
  id: string;
  name: string;
  amountPerMonth: number;
  amountPerYear: number;
  description: string;
  status: string;
  requestedBy: User;
  createdAt: Date;
  updatedAt: Date;
}

export interface GetPackagesInputProps {
  filter?: {
    type?: "MAIN" | "REQUESTED";
  };
  skip?: number;
  limit?: number;
}

export interface GetPackagesOutputProps {
  packages: Package[];
  packagesLength: number;
}

// for adding
// export interface CreatePackageInputProps {
//   name: string;
//   currency?: string;
//   description?: string;
//   image?: string;
// }

// export interface CreatePackageOutputProps {
//   createPackage: boolean;
// }

// for updating
// export interface UpdatePackageInputProps {
//   id: string;
//   name?: string;
//   price?: number;
//   description?: string;
//   type?: string;
// }

// export interface UpdatePackageOutputProps {
//   updatePackage: boolean;
// }

// for deleting
// export interface DeletePackageInputProps {
//   id: string;
// }

// export interface DeletePackageOutputProps {
//   deletePackage: boolean;
// }
