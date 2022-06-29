import { default as React, useMemo } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import ContentContainer from "../components/content-container";
import Hit from "../components/search/hit";
import Profile from "../components/profile";
import Sidebar from "../components/sidebar";
import Pagination from "../components/search/pagination";
import algoliasearch from "algoliasearch/lite";

import { Configure, Hits, InstantSearch } from "react-instantsearch-hooks-web";

const SearchPanel = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

const SearchPanelResults = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
`;

const IndexPage = (props) => {
  const [showQuestionOnly, setShowQuestionOnly] = React.useState(false);
  const handleToggleShowQuestionOnly = () =>
    setShowQuestionOnly(!showQuestionOnly);

  const searchClient = useMemo(
    () =>
      algoliasearch(
        process.env.GATSBY_ALGOLIA_APP_ID,
        process.env.GATSBY_ALGOLIA_SEARCH_KEY
      ),
    []
  );

  return (
    <Layout>
      <Seo title="Index Page" />

      <ContentContainer>
        <Profile />
      </ContentContainer>
      <InstantSearch
        searchClient={searchClient}
        indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}
      >
        <ContentContainer
          rightComponent={
            <Sidebar
              displaySearch={true}
              displaySort={true}
              displayFold={true}
              showQuestionOnly={showQuestionOnly}
              handleToggleShowQuestionOnly={handleToggleShowQuestionOnly}
            />
          }
        >
          <Configure hitsPerPage={8} attributesToSnippet={["answer_body"]} />
          <SearchPanel>
            <SearchPanelResults>
              <Hits
                hitComponent={({ hit }) => (
                  <Hit hit={hit} showQuestionOnly={showQuestionOnly} />
                )}
              />
              <div
                css={css`
                  margin: 2rem auto;
                  text-align: center;
                `}
              >
                <Pagination />
              </div>
            </SearchPanelResults>
          </SearchPanel>
        </ContentContainer>
      </InstantSearch>
    </Layout>
  );
};

export default IndexPage;
