import React from "react";
import "@fontsource/noto-sans-jp";
import Navbar from "./navbar";
import Header from "./header";
import ContentContainer from "./content-container";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, Configure } from "react-instantsearch-hooks-web";

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
        routing={true}
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
