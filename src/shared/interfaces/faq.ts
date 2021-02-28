import { Admin } from "./admin";

export interface GetFAQsInputProps {
  filter?: {};
  skip?: number;
  limit?: number;
}

export interface GetFAQsOutputProps {
  faqs: FAQ[];
  faqsLength: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  createdBy: Admin;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateFAQInputProps {
  question: string;
  answer: string;
}

export interface CreateFAQOutputProps {
  createFaq: {
    id: string;
  };
}

export interface UpdateFAQInputProps {
  id: string;
  question?: string;
  answer?: string;
}

export interface UpdateFAQOutputProps {
  updateFaq: boolean;
}

export interface DeleteFAQInputProps {
  id: string;
}

export interface DeleteFAQOutputProps {
  deleteFaq: boolean;
}
