import * as React from "react";

import Layout from "../components/layout";
import Profile from "../components/profile";
import QuestionBox from "../components/question-box";
import Paginator from "../components/paginator";
import Sidebar from "../components/sidebar";
import ContentContainer from "../components/content-container";
import Search from "../components/search";
import Seo from "../components/seo";

import { graphql } from "gatsby";
import { navigate } from "gatsby";

const QuestionListTemplate = ({ data, pageContext }) => {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Layout>
      <Seo title="Index Page" />

      <Search indexName="paddy_joy" open={open} handleClose={handleClose} />

      <ContentContainer>
        <Profile />
      </ContentContainer>
      <ContentContainer
        rightComponent={<Sidebar handleOpenSearch={handleOpen} />}
      >
        <div>
          {data.allPaddyJoyJson.edges.map((item, i) => (
            <QuestionBox key={item.node.id} data={item.node} />
          ))}
        </div>
        <Paginator
          style={{ margin: "5rem 0" }}
          currentPage={pageContext.currentPage}
          lastPage={pageContext.numPages}
          goToPage={(page) => {
            console.log(page);
            navigate(`/questions/${page}`);
          }}
        />
      </ContentContainer>
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
