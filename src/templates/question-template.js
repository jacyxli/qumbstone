import * as React from "react";

import Layout from "../components/layout";
import QuestionBox from "../components/question-box";
import Sidebar from "../components/sidebar";
import ContentContainer from "../components/content-container";
import Seo from "../components/seo";

import { graphql } from "gatsby";

const QuestionTemplate = ({ data }) => {
  return (
    <Layout>
      <Seo title="Index Page" />

      <ContentContainer
        style={{ marginTop: "4.5rem" }}
        rightComponent={
          <Sidebar
            displaySearch={true}
            displayHome={true}
            displayReturn={true}
          />
        }
      >
        <QuestionBox
          key={data.paddyJoyJson.id}
          data={data.paddyJoyJson}
          showFullQuestion={true}
        />
      </ContentContainer>
    </Layout>
  );
};

export const questionQuery = graphql`
  query questionQuery($uuid_hash: String) {
    paddyJoyJson(uuid_hash: { eq: $uuid_hash }) {
      id
      answer_body
      answer_created_at
      answer_id
      answer_likes_count
      body
      uuid_hash
    }
  }
`;

export default QuestionTemplate;
