import { gql } from "@apollo/client";

//for login
export const LOGIN = gql`
  mutation ($email: String!, $password: String!) {
    loginAdmin(email: $email, password: $password) {
      admin {
        id
        fullname
        email
        phone
        phoneVerifiedAt
        role
        createdAt
        updatedAt
      }
      token
    }
  }
`;

//for countries
export const CREATE_COUNTRY = gql`
  mutation (
    $name: String!
    $currency: String
    $description: String
    $image: String
  ) {
    createCountry(
      name: $name
      currency: $currency
      description: $description
      image: $image
    ) {
      id
    }
  }
`;

export const UPDATE_COUNTRY = gql`
  mutation (
    $id: ID!
    $name: String
    $currency: String
    $description: String
    $image: String
  ) {
    updateCountry(
      countryId: $id
      name: $name
      currency: $currency
      description: $description
      image: $image
    )
  }
`;

export const DELETE_COUNTRY = gql`
  mutation ($id: ID!) {
    deleteCountry(countryId: $id)
  }
`;

//for admins
export const CREATE_ADMIN = gql`
  mutation ($name: String!, $email: String!, $role: AdminRole!) {
    createAdmin(fullname: $name, email: $email, role: $role) {
      id
    }
  }
`;

export const UPDATE_ADMIN = gql`
  mutation ($id: ID!, $role: AdminRole) {
    updateAdminDetails(adminId: $id, role: $role)
  }
`;

export const SUSPEND_ADMIN = gql`
  mutation ($id: ID!, $reason: String!) {
    suspendAdmin(adminId: $id, reason: $reason)
  }
`;

export const RESTORE_ADMIN = gql`
  mutation ($id: ID!) {
    restoreAdmin(adminId: $id)
  }
`;

export const SUSPEND_USER = gql`
  mutation ($id: ID!, $reason: String!) {
    suspendUser(userId: $id, reason: $reason)
  }
`;

export const RESTORE_USER = gql`
  mutation ($id: ID!) {
    restoreUser(userId: $id)
  }
`;

export const APPROVE_LAWYER = gql`
  mutation ($id: ID!) {
    approveLawyer(lawyerId: $id)
  }
`;

//for tags
export const CREATE_TAG = gql`
  mutation ($name: String!) {
    createTag(name: $name) {
      id
    }
  }
`;

export const UPDATE_TAG = gql`
  mutation ($name: String, $id: ID!) {
    updateTag(name: $name, tagId: $id)
  }
`;

export const DELETE_TAG = gql`
  mutation ($id: ID!) {
    deleteTag(tagId: $id)
  }
`;

//for legal areas
export const CREATE_LEGAL_AREA = gql`
  mutation ($name: String!, $description: String, $image: String) {
    createLegalArea(name: $name, description: $description, image: $image) {
      id
    }
  }
`;

export const UPDATE_LEGAL_AREA = gql`
  mutation ($id: ID!, $name: String, $description: String, $image: String) {
    updateLegalArea(
      legalAreaId: $id
      name: $name
      description: $description
      image: $image
    )
  }
`;

export const DELETE_LEGAL_AREA = gql`
  mutation ($id: ID!) {
    deleteLegalArea(legalAreaId: $id)
  }
`;

//for faqs
export const CREATE_FAQ = gql`
  mutation ($question: String!, $answer: String!) {
    createFaq(question: $question, answer: $answer) {
      id
    }
  }
`;

export const UPDATE_FAQ = gql`
  mutation ($id: ID!, $question: String, $answer: String) {
    updateFaq(faqId: $id, question: $question, answer: $answer)
  }
`;

export const DELETE_FAQ = gql`
  mutation ($id: ID!) {
    deleteFaq(faqId: $id)
  }
`;

//for posts
export const CREATE_POST = gql`
  mutation (
    $title: String!
    $details: String!
    $tag: ID!
    $status: BlogPostStatus!
    $image: String
  ) {
    createPost(
      title: $title
      details: $details
      tag: $tag
      status: $status
      image: $image
    ) {
      id
    }
  }
`;

export const UPDATE_POST = gql`
  mutation (
    $id: ID!
    $title: String
    $details: String
    $tag: ID
    $status: BlogPostStatus
    $image: String
  ) {
    updatePost(
      postId: $id
      title: $title
      details: $details
      tag: $tag
      status: $status
      image: $image
    )
  }
`;

export const DELETE_POST = gql`
  mutation ($id: ID!) {
    deletePost(postId: $id)
  }
`;

export const UPDATE_SERVICE = gql`
  mutation (
    $id: ID!
    $name: String
    $description: String
    $price: Float
    $type: ServiceType
  ) {
    updateService(
      serviceId: $id
      name: $name
      description: $description
      price: $price
      type: $type
    )
  }
`;
