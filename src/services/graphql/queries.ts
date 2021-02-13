import { gql } from "@apollo/client";

//get countries
export const GET_COUNTRIES = gql`
  query($filter: GetCountriesFilter, $skip: Int, $limit: Int) {
    countries(filter: $filter, pagination: { skip: $skip, limit: $limit }) {
      id
      name
      createdAt
      updatedAt
      currency
      description
    }
    countriesLength(filter: $filter)
  }
`;

//get admins
export const GET_ADMINS = gql`
  query($filter: GetAdminsFilter, $skip: Int, $limit: Int) {
    admins(filter: $filter, pagination: { skip: $skip, limit: $limit }) {
      id
      fullname
      email
      phone
      role
      suspendedAt
      suspendedReason
      createdAt
      updatedAt
    }
    adminsLength(filter: $filter)
  }
`;
