export interface Admin {
  id: string;
  fullname: string;
  email: string;
  phone: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
  suspendedAt: Date;
  suspendedReason: Date;
}

export interface GetAdminsInputProps {
  filter?: {};
  skip?: number;
  limit?: number;
}

export interface GetAdminsOutputProps {
  admins: Admin[];
  adminsLength: number;
}

export interface CreateAdminInputProps {
  name: string;
  email: string;
  role: string;
}

export interface CreateAdminOutputProps {
  createAdmin: {
    id: string;
  };
}

export interface UpdateAdminInputProps {
  id: string;
  role?: string;
}

export interface UpdateAdminOutputProps {
  updateAdminDetails: boolean;
}

export interface SuspendAdminInputProps {
  id: string;
  reason: string;
}

export interface SuspendAdminOutputProps {
  suspendAdmin: boolean;
}

export interface RestoreAdminInputProps {
  id: string;
}

export interface RestoreAdminOutputProps {
  restoreAdmin: boolean;
}
