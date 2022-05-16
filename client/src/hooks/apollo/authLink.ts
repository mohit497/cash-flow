import { setContext } from "@apollo/client/link/context";

export function AuthLink() {
  // auth link
  const authLink = setContext((_, { headers }) => {
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "x-hasura-student-token": window.sessionStorage.getItem(
          "student_access_token"
        ),
      },
    };
  });

  return { authLink };
}