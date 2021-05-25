import { Service } from "./service";
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
export interface CreatePackageInputProps {
  name: string;
  description?: string;
  amountPerMonth: number;
  amountPerYear: number;
  packageServices: PackageService[];
}

export interface PackageService {
  serviceId: string;
  quantity: number | undefined;
  isActive: boolean | undefined;
}

export interface CreatePackageOutputProps {
  createPackage: Package;
}

//for approving
export interface ApproveCustomPackageInputProps {
  id: string;
  amountPerMonth: number;
  amountPerYear: number;
}
export interface ApproveCustomPackageOutputProps {
  ApproveCustomPackages: boolean;
}

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

export interface IPackageService {
  id: string;
  package: Package;
  service: Service;
  isActive: boolean;
  quantity: number;
  type: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface GetPackageServicesInputProps {
  filter?: {
    package?: string;
    service?: string;
  };
  skip?: number;
  limit?: number;
}

export interface GetPackageServicesOutputProps {
  packageServices: IPackageService[];
  packageServicesLength: number;
}
