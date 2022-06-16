import * as React from "react";
import Layout from "../components/layout";
import Profile from "../components/profile";
import QuestionBox from "../components/question-box";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <Profile />
      {data.allPaddyJoyJson.edges.map((item) => (
        <QuestionBox key={item.node.id} data={item.node} />
      ))}
    </Layout>
  );
};

export const query = graphql`
  query PaddyJoyJsonQuery {
    allPaddyJoyJson {
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

export default IndexPage;
