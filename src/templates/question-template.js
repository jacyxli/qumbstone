import * as React from "react";
import styled from "@emotion/styled";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import QuestionBox from "../components/question-box";
import Sidebar from "../components/sidebar";
import SidebarMobile from "../components/sidebar-mobile";

import ContentContainer from "../components/content-container";
import Seo from "../components/seo";

const Container = styled.div`
  margin: 4.5rem 0;
  @media only screen and (max-width: 480px) {
    @media only screen and (max-width: 1024px) {
      margin: 2rem 0;
    }
  }
`;

const QuestionTemplate = ({ data }) => {
  return (
    <Layout>
      <Seo title={data.paddyJoyJson.body} />
      <Container>
        <ContentContainer
          rightComponent={<Sidebar displayHome={true} displayReturn={true} />}
        >
          <SidebarMobile displayHome={true} displayReturn={true} />
          <QuestionBox
            key={data.paddyJoyJson.id}
            data={data.paddyJoyJson}
            showFullQuestion={true}
          />
        </ContentContainer>
      </Container>
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
