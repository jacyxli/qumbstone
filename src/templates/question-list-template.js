import * as React from "react";

import SearchIcon from "@material-ui/icons/Search";
import Sort from "@material-ui/icons/Sort";
import UnfoldLess from "@material-ui/icons/UnfoldLess";
import UnfoldMore from "@material-ui/icons/UnfoldMore";

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
  const [open, setOpen] = React.useState(false);
  const [showQuestionOnly, setShowQuestionOnly] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleToggleShowQuestionOnly = () =>
    setShowQuestionOnly(!showQuestionOnly);

  return (
    <Layout>
      <Seo title="Index Page" />

      <Search indexName="paddy_joy" open={open} handleClose={handleClose} />

      <ContentContainer>
        <Profile />
      </ContentContainer>
      <ContentContainer
        rightComponent={
          <Sidebar
            funcs={[
              {
                icon: (
                  <SearchIcon fontSize="large" style={{ color: "#272727" }} />
                ),
                label: "SEARCH",
                label_jp: "検索",
                func: handleOpen,
              },
              {
                icon: <Sort fontSize="large" style={{ color: "#272727" }} />,
                label: "SORT",
                label_jp: "ソート",
                func: handleOpen,
              },
              showQuestionOnly
                ? {
                    icon: (
                      <UnfoldMore
                        fontSize="large"
                        style={{ color: "#272727" }}
                      />
                    ),
                    label: "SHOW ANSWERS",
                    label_jp: "回答を表示する",
                    func: handleToggleShowQuestionOnly,
                  }
                : {
                    icon: (
                      <UnfoldLess
                        fontSize="large"
                        style={{ color: "#272727" }}
                      />
                    ),
                    label: "SHOW QUESTIONS ONLY",
                    label_jp: "質問のみを見る",
                    func: handleToggleShowQuestionOnly,
                  },
            ]}
          />
        }
      >
        <div>
          {data.allPaddyJoyJson.edges.map((item, i) => (
            <QuestionBox
              key={item.node.id}
              data={item.node}
              showQuestionOnly={showQuestionOnly}
            />
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
          uuid_hash
        }
      }
    }
  }
`;

export default QuestionListTemplate;
