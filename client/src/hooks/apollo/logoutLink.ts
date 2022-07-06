/* eslint-disable array-callback-return */
import { onError } from "@apollo/client/link/error";
import { GraphQLError } from "graphql";

export function LogoutLink() {

  const logoutLink = onError(({ graphQLErrors, networkError }) => {
    graphQLErrors?.map( (e: GraphQLError) => {
            console.log('logged out');
        });
    console.log("network-error", networkError);
    console.log("graphql-error", graphQLErrors);
    if(!window.location.href.includes('/login')){
      //  localStorage.clear()
      // window.location.href= '/login'
    }
  });

  return { logoutLink };
}