import { Admin } from "./admin";

export interface GetTagsInputProps {
  filter?: {};
  skip?: number;
  limit?: number;
}

export interface GetTagsOutputProps {
  tags: Tag[];
  tagsLength: number;
}

export interface Tag {
  id: string;
  name: string;
  createdBy: Admin;
  createdAt: Date;
  updatedAt: Date;
}
