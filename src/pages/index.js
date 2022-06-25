import * as React from "react";
import Layout from "../components/layout";
import Profile from "../components/profile";
import QuestionBox from "../components/question-box";
import { graphql } from "gatsby";
import Search from "../components/search";
import Seo from "../components/seo";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Index Page" />
      <Profile />
      <Search indexName="paddy_joy" />
      <QuestionBox
        data={{
          answer_likes_count: 24,
          body: "親友がアポロ淫棒論（本当は宇宙に行ってない説）を信じ切っているのですが、どうしたらいいでしょうか？",
          answer_body:
            "ネタにマジレスですが、映画『アポロ13』では、宇宙飛行士がパーティーで美女に「君にドッキングしたい」と口説くシーンがあります。",
          answer_created_at: "1/25/2022, 9:51:07 PM",
        }}
      />
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
