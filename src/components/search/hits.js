import { useHits } from "react-instantsearch-hooks-web";
import React from "react";
import styled from "@emotion/styled";
import SentimentDissatisfied from "@material-ui/icons/SentimentDissatisfied";

import Hit from "./hit";
import Loader from "../loader";

const HitsRoot = styled.ol`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const HitsItem = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const NoResultsRoot = styled.article`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 4rem 0 8rem 0;
`;

export default function Hits(props) {
  const { hits, results } = useHits(props);
  const showQuestionOnly = props.showQuestionOnly;
  const { nbHits, query, processingTimeMS } = results;
  const iconColor = "#272727";

  //loading
  if (nbHits === 0 && processingTimeMS === 0) {
    return (
      <HitsRoot>
        <HitsItem>
          <NoResultsRoot>
            <Loader />
          </NoResultsRoot>
        </HitsItem>
      </HitsRoot>
    );
  } else if (nbHits === 0 && query !== "" && processingTimeMS !== 0) {
    return (
      <HitsRoot>
        <HitsItem>
          <NoResultsRoot>
            <SentimentDissatisfied
              style={{
                color: iconColor,
                fontSize: "6rem",
                marginBottom: "1rem",
              }}
            />
            <h3 style={{ fontWeight: "400" }}>検索結果がありません</h3>
            <h4>NO RESULTS FOUND</h4>
          </NoResultsRoot>
        </HitsItem>
      </HitsRoot>
    );
  } else {
    return (
      <HitsRoot>
        {hits.map((item, i) => (
          <HitsItem key={i}>
            <Hit hit={item} showQuestionOnly={showQuestionOnly} />
          </HitsItem>
        ))}
      </HitsRoot>
    );
  }
}
