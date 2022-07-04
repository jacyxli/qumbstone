import React from "react";
import "@fontsource/noto-sans-jp";
import Navbar from "./navbar";
import Header from "./header";
import ContentContainer from "./content-container";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, Configure } from "react-instantsearch-hooks-web";
import { history } from "instantsearch.js/es/lib/routers";

const routing = {
  router: history(),
  stateMapping: {
    stateToRoute(uiState) {
      const indexUiState = uiState["paddy_joy"];

      return {
        q: indexUiState.query,
        sortBy: indexUiState.sortBy,
        page: indexUiState.page,
      };
    },
    routeToState(routeState) {
      return {
        [process.env.GATSBY_ALGOLIA_INDEX_NAME]: {
          query: routeState.q,
          sortBy: routeState.sortBy,
          page: routeState.page,
        },
      };
    },
  },
};

export default function Layout({ children }) {
  const searchClient = React.useMemo(
    () =>
      algoliasearch(
        process.env.GATSBY_ALGOLIA_APP_ID,
        process.env.GATSBY_ALGOLIA_SEARCH_KEY
      ),
    []
  );
  return (
    <main>
      <Navbar></Navbar>
      <InstantSearch
        searchClient={searchClient}
        indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}
        routing={routing}
      >
        <Configure
          hitsPerPage={8}
          attributesToSnippet={["answer_body", "body"]}
        />
        <ContentContainer>
          <Header />
        </ContentContainer>
        {children}
      </InstantSearch>
    </main>
  );
}
