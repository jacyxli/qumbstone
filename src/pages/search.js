import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import ContentContainer from "../components/content-container";
import Profile from "../components/profile";
import Sidebar from "../components/sidebar";
import SidebarMobile from "../components/sidebar-mobile";
import Hits from "../components/search/hits";

import Pagination from "../components/search/pagination";

import { Configure } from "react-instantsearch-hooks-web";
import { Location } from "@reach/router";

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

export default function Search(props) {
  const [showQuestionOnly, setShowQuestionOnly] = React.useState(false);
  const [searchWord, setSearchWord] = React.useState();

  const handleToggleShowQuestionOnly = () =>
    setShowQuestionOnly(!showQuestionOnly);

  return (
    <Location>
      {(locationProps) => {
        return (
          <Layout>
            <Seo title="SEARCH" />

            <ContentContainer>
              <Profile />
            </ContentContainer>
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
              <Configure
                hitsPerPage={8}
                attributesToSnippet={["answer_body", "body"]}
              />
              <SearchPanel>
                <SidebarMobile
                  displaySearch={true}
                  displaySort={true}
                  displayFold={true}
                  showQuestionOnly={showQuestionOnly}
                  handleToggleShowQuestionOnly={handleToggleShowQuestionOnly}
                  search={searchWord}
                  setSearchWord={(searchWord) => setSearchWord(searchWord)}
                />
                <SearchPanelResults>
                  <Hits showQuestionOnly={showQuestionOnly} />

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
          </Layout>
        );
      }}
    </Location>
  );
}
