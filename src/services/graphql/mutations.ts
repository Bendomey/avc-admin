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
