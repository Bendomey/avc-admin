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

export interface CreateTagInputProps {
  name: string;
}

export interface CreateTagOutputProps {
  createTag: {
    id: string;
  };
}

export interface UpdateTagInputProps {
  id: string;
  name?: string;
}

export interface UpdateTagOutputProps {
  updateTag: boolean;
}

export interface DeleteTagInputProps {
  id: string;
}

export interface DeleteTagOutputProps {
  deleteTag: boolean;
}
