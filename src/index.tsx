import { ApolloClient, ApolloProvider } from "@apollo/client";
import React from "react";
import { render } from "react-dom";

import { cache } from "./cache";
import { schema } from "./schema";
import { Game } from "./components/Game";
import "./index.css";

const client = new ApolloClient({ cache, typeDefs: schema });

render(
  <ApolloProvider client={client}>
    <Game />
  </ApolloProvider>,
  document.getElementById("root")
);
