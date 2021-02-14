import { gql } from "@apollo/client";

//for login
export const LOGIN = gql`
  mutation($email: String!, $password: String!) {
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
  mutation(
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
  mutation(
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
  mutation($id: ID!) {
    deleteCountry(countryId: $id)
  }
`;

//for admins
export const CREATE_ADMIN = gql`
  mutation($name: String!, $email: String!, $role: AdminRole!) {
    createAdmin(fullname: $name, email: $email, role: $role) {
      id
    }
  }
`;

export const UPDATE_ADMIN = gql`
  mutation($id: ID!, $role: AdminRole) {
    updateAdminDetails(adminId: $id, role: $role)
  }
`;

export const SUSPEND_ADMIN = gql`
  mutation($id: ID!, $reason: String!) {
    suspendAdmin(adminId: $id, reason: $reason)
  }
`;

export const RESTORE_ADMIN = gql`
  mutation($id: ID!) {
    restoreAdmin(adminId: $id)
  }
`;

export const SUSPEND_USER = gql`
  mutation($id: ID!, $reason: String!) {
    suspendUser(userId: $id, reason: $reason)
  }
`;

export const RESTORE_USER = gql`
  mutation($id: ID!) {
    restoreUser(userId: $id)
  }
`;

export const APPROVE_LAWYER = gql`
  mutation($id: ID!) {
    approveLawyer(lawyerId: $id)
  }
`;
