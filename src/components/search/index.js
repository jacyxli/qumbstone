import { createRef, default as React, useState, useMemo } from "react";
import styled from "@emotion/styled";
import algoliasearch from "algoliasearch/lite";
import { css } from "@emotion/react";
import SearchIcon from "@material-ui/icons/Search";
import Hit from "./hit";

import Modal from "@material-ui/core/Modal";

import {
  Configure,
  DynamicWidgets,
  RefinementList,
  Hits,
  InstantSearch,
  Pagination,
  SearchBox,
  PoweredBy,
} from "react-instantsearch-hooks-web";

const SearchModal = styled.div`
  display: flex;
  background: #ffffff;
  width: 800px;
  max-height: calc(100vh - 14rem);
  min-height: 200px;
  margin: 6rem auto 8rem auto;
  padding: 0 2rem;
  box-shadow: rgb(10 25 41 / 70%) 0px 4px 20px;
  border: 1px solid #717171;
  border-radius: clamp(0px, (100vw - 750px) * 9999, 10px);
  position: relative;
`;

const SearchPanel = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;
const SearchPanelFilters = styled.div`
  display: flex;
`;

const SearchPanelResults = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
`;

export default function Search({ indexName, open, handleClose }) {
  const searchClient = useMemo(
    () =>
      algoliasearch(
        process.env.GATSBY_ALGOLIA_APP_ID,
        process.env.GATSBY_ALGOLIA_SEARCH_KEY
      ),
    []
  );

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="search-modal"
      aria-describedby="search-modal"
    >
      <SearchModal>
        <InstantSearch searchClient={searchClient} indexName={indexName}>
          <Configure hitsPerPage={4} />
          <SearchPanel>
            <SearchPanelFilters>
              <DynamicWidgets fallback={RefinementList}></DynamicWidgets>
            </SearchPanelFilters>
            <SearchPanelResults>
              <SearchBox
                placeholder="キーワードを入力してください"
                submitIconComponent={() => (
                  <SearchIcon fontSize="large" style={{ color: "#272727" }} />
                )}
                classNames={{
                  root: "search-box-root",
                  form: "search-box-form",
                  input: "search-box-input",
                }}
              />
              <Hits
                classNames={{
                  root: "hits-root",
                  list: "hits-list",
                  item: "hits-item",
                }}
                hitComponent={Hit}
              />
              <div
                css={css`
                  margin: 2rem auto;
                  text-align: center;
                `}
              >
                <Pagination />
              </div>
              <div
                css={css`
                  display: flex;
                  width: 100%;
                  align-items: center;
                  justify-content: flex-end;
                  margin-bottom: 2rem;
                `}
              >
                <PoweredBy />
              </div>
            </SearchPanelResults>
          </SearchPanel>
        </InstantSearch>
      </SearchModal>
    </Modal>
  );
}
