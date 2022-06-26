import React from "react";
import styled from "@emotion/styled";
import { Highlight } from "react-instantsearch-hooks-web";
import { navigate } from "gatsby";

const Question = styled.h5`
  font-weight: 600;
  margin-bottom: 0.6rem;
`;

export default function Hit({ hit }) {
  console.log(hit);
  return (
    <article onClick={() => navigate(`/question/${hit.peing_id}`)}>
      <Question>
        <Highlight hit={hit} attribute="question" />
      </Question>
      <p>
        <Highlight attribute="answer" hit={hit} />
      </p>
    </article>
  );
}
