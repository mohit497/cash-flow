import { WebSocketLink } from "@apollo/client/link/ws";

export function webSocketLink() {
  const wsLink = new WebSocketLink({
    uri: `${process.env.REACT_APP_GRAPH_URL_WS}`,
    options: {
      reconnect: true,
      connectionParams: {
        headers: { "x-hasura-admin-secret": "myadminsecretkey" },
      },
    },
  });

  return { wsLink };
}