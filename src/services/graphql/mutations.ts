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
