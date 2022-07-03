import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import 'react-notifications-component/dist/theme.css'
import apolloLogger from "apollo-link-logger";


import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  HttpLink,
  split,
} from "@apollo/client";
import { getMainDefinition } from '@apollo/client/utilities';
import { LogoutLink } from 'hooks/apollo/logoutLink';
import { webSocketLink } from 'hooks/apollo/webSocketLink';
import { AuthLink } from 'hooks/apollo/authLink';

const { wsLink } = webSocketLink();
const { logoutLink } = LogoutLink();


const cleanTypeName = new ApolloLink((operation, forward) => {
  if (operation.variables) {
    const omitTypename = (key: any, value: any) =>
      key === "__typename" ? undefined : value;
    operation.variables = JSON.parse(
      JSON.stringify(operation.variables),
      omitTypename
    );
  }
  return forward(operation);
});

const httpLink = new HttpLink({
  uri: `${process.env.REACT_APP_GRAPH_URL}`,
});

// split links
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

// auth link
const { authLink } = AuthLink();
// configure apollo client
const createApolloClient = () => {
  return new ApolloClient({
    link: ApolloLink.from([
      apolloLogger,
      logoutLink,
      authLink,
      cleanTypeName,
      splitLink,
    ]),
    cache: new InMemoryCache({
      typePolicies: {
        "shop_sales_by_date": {
          keyFields: ["id", "date"],
        },
        "monthly_sales": {
          keyFields: ["shop", "name","monthly"],
        },
        "weekly_sales": {
          keyFields: ["shop", "name","weekly"],
        },
        "yearly_sales": {
          keyFields: ["shop", "name","yearly"],
        },
        "top_products_daily": {
          keyFields: ["p_code", "name","daily"],
        },
      },
    }),
  });
};

/** setup apollo client */
const client = createApolloClient();


const newLocal = document.getElementById('root');
const root = ReactDOM.createRoot(newLocal as Element);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
