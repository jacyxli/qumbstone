import * as React from "react";
import Layout from "../components/layout";
import Profile from "../components/profile";
import QuestionBox from "../components/question-box";
import { graphql } from "gatsby";
import Search from "../components/search";
import QuestionListTemplate from "../templates/question-list-template";

const IndexPage = ({ data }) => {
  return (
    <QuestionListTemplate
      data={data}
      pageContext={{
        limit: 10,
        skip: 0,
        currentPage: 1,
        numPages: 299,
      }}
    />
  );
};

export const questionListQuery = graphql`
  {
    allPaddyJoyJson(
      sort: { order: DESC, fields: answer_created_at }
      limit: 10
      skip: 0
    ) {
      edges {
        node {
          id
          answer_body
          answer_created_at
          answer_id
          answer_likes_count
          body
          uuid_hash
        }
      }
    }
  }
`;

export default IndexPage;
