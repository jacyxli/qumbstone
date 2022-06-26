import * as React from "react";

import Layout from "../components/layout";
import QuestionBox from "../components/question-box";
import Sidebar from "../components/sidebar";
import ContentContainer from "../components/content-container";
import Search from "../components/search";
import Seo from "../components/seo";

import SearchIcon from "@material-ui/icons/Search";
import Home from "@material-ui/icons/Home";
import KeyboardReturn from "@material-ui/icons/KeyboardReturn";

import { graphql } from "gatsby";
import { navigate } from "gatsby";

const QuestionTemplate = ({ data }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Layout>
      <Seo title="Index Page" />

      <Search indexName="paddy_joy" open={open} handleClose={handleClose} />

      <ContentContainer
        style={{ marginTop: "4.5rem" }}
        rightComponent={
          <Sidebar
            funcs={[
              {
                icon: (
                  <KeyboardReturn
                    fontSize="large"
                    style={{ color: "#272727" }}
                  />
                ),
                label: "GO BACK",
                label_jp: "戻る",
                func: () => navigate(-1),
              },
              {
                icon: <Home fontSize="large" style={{ color: "#272727" }} />,
                label: "HOME",
                label_jp: "トップページへ戻る",
                func: () => navigate("/"),
              },
              {
                icon: (
                  <SearchIcon fontSize="large" style={{ color: "#272727" }} />
                ),
                label: "SEARCH",
                label_jp: "検索",
                func: handleOpen,
              },
            ]}
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
