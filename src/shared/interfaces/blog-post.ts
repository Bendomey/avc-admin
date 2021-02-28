import { Admin } from "./admin";
import { Tag } from "./tag";

export interface GetPostsInputProps {
  filter?: {};
  skip?: number;
  limit?: number;
}

export interface GetPostsOutputProps {
  posts: Post[];
  postsLength: number;
}

export interface Post {
  id: string;
  title: string;
  details: string;
  image: string;
  status: string;
  tag: Tag;
  createdBy: Admin;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreatePostInputProps {
  title: string;
  details: string;
  tag: string;
  status: string;
  image?: string;
}

export interface CreatePostOutputProps {
  createPost: {
    id: string;
  };
}

export interface UpdatePostInputProps {
  id: string;
  title?: string;
  details?: string;
  tag?: string;
  status?: string;
  image?: string;
}

export interface UpdatePostOutputProps {
  updatePost: boolean;
}

export interface DeletePostInputProps {
  id: string;
}

export interface DeletePostOutputProps {
  deletePost: boolean;
}
