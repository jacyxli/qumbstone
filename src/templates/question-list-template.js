import * as React from "react";
import Layout from "../components/layout";
import Profile from "../components/profile";
import QuestionBox from "../components/question-box";
import Paginator from "../components/paginator";

import { graphql } from "gatsby";
import { navigate } from "gatsby";

const QuestionListTemplate = ({ data, pageContext }) => {
  console.log(pageContext);
  return (
    <Layout>
      <Profile />
      {data.allPaddyJoyJson.edges.map((item, i) => (
        <QuestionBox key={item.node.id} data={item.node} />
      ))}
      <Paginator
        style={{ margin: "5rem 0" }}
        currentPage={pageContext.currentPage}
        lastPage={pageContext.numPages}
        goToPage={(page) => {
          console.log(page);
          navigate(`/questions/${page}`);
        }}
      />
    </Layout>
  );
};

export const questionListQuery = graphql`
  query questionListQuery($skip: Int!, $limit: Int!) {
    allPaddyJoyJson(
      sort: { order: DESC, fields: answer_created_at }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          answer_body
          answer_created_at
          answer_id
          answer_likes_count
          body
        }
      }
    }
  }
`;

export default QuestionListTemplate;
