import React, { Fragment, useContext } from "react";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
  from,
  HttpLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import Auth, { BASE_URL } from "../cookie.config";
import { toaster } from "evergreen-ui";
import { AuthContext } from "../context";

const ClientApollo = ({ children }) => {
  const httpLink = new HttpLink({
    uri: BASE_URL,
  });
  const [{ signOut }] = useContext(AuthContext);

  const authLink = new ApolloLink((operation, forward) => {
    let authorization = null;
    let auth = Auth.getCipher();
    let customHeaders = {};
    if (auth) {
      authorization = JSON.parse(auth).token;
      customHeaders.Authorization = `Bearer ${authorization}`;
    }

    operation.setContext({
      headers: {
        ...customHeaders,
      },
    });
    return forward(operation);
  });

  const errorLink = onError(({ networkError, graphQLErrors }) => {
    if (graphQLErrors?.length > 0) {
      if (graphQLErrors[0].message === "AuthorizationExpired") {
        signOut();
        return toaster.warning("Oops...", {
          description: "Your session expired",
        });
      }
    }

    if (networkError) {
      return toaster.warning("Oops, something went wrong", {
        description: networkError.message,
      });
    }
  });

  let link = from([authLink, errorLink, httpLink]);

  const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache(),
  });
  return (
    <Fragment>
      <ApolloProvider client={client}> {children}</ApolloProvider>
    </Fragment>
  );
};

export default ClientApollo;
