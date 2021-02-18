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

//get lawyers
export const GET_LAWYERS = gql`
  query($filter: GetLawyersFilter, $skip: Int, $limit: Int) {
    lawyers(filter: $filter, pagination: { skip: $skip, limit: $limit }) {
      id
      user {
        id
        lastName
        otherNames
        firstName
        email
        phone
        setupAt
        suspendedAt
        createdAt
        updatedAt
      }
      addressCountry
      addressCity
      addressNumber
      addressStreetName
      barMembershipCard
      coverLetter
      approvedAt
      cv
      digitalAddress
      firstYearOfBarAdmission
      lawCertificate
      licenseNumber
      nationalIDBack
      nationalIDFront
      tin
      createdAt
      updatedAt
    }
    lawyersLength(filter: $filter)
  }
`;

//get customers
export const GET_CUSTOMERS = gql`
  query($filter: GetCustomersFilter, $skip: Int, $limit: Int) {
    customers(filter: $filter, pagination: { skip: $skip, limit: $limit }) {
      id
      user {
        id
        lastName
        otherNames
        firstName
        email
        phone
        setupAt
        suspendedAt
        createdAt
        updatedAt
      }
      addressCountry
      addressCity
      addressNumber
      addressStreetName
      digitalAddress
      tin
      companyName
      type
      companyEntityType
      companyEntityTypeOther
      companyDateOfRegistration
      companyCountryOfRegistration
      companyRegistrationNumber
      createdAt
      updatedAt
    }
    customersLength(filter: $filter)
  }
`;
