import { Admin } from "./admin";

export interface GetLegalAreasInputProps {
  filter?: {};
  skip?: number;
  limit?: number;
}

export interface GetLegalAreasOutputProps {
  legalAreas: LegalArea[];
  legalAreasLength: number;
}

export interface LegalArea {
  id: string;
  name: string;
  description: string;
  image: string;
  createdBy: Admin;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateLegalAreaInputProps {
  name: string;
  description?: string;
  image?: string;
}

export interface CreateLegalAreaOutputProps {
  createLegalArea: {
    id: string;
  };
}

export interface UpdateLegalAreaInputProps {
  id: string;
  name?: string;
  description?: string;
  image?: string;
}

export interface UpdateLegalAreaOutputProps {
  updateLegalArea: boolean;
}

export interface DeleteLegalAreaInputProps {
  id: string;
}

export interface DeleteLegalAreaOutputProps {
  deleteLegalArea: boolean;
}
