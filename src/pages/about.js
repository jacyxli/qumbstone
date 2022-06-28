import * as React from "react";
import styled from "@emotion/styled";

import Layout from "../components/layout";
import Seo from "../components/seo";
import ContentContainer from "../components/content-container";
import Sidebar from "../components/sidebar";
import Search from "../components/search";

import SearchIcon from "@material-ui/icons/Search";
import Home from "@material-ui/icons/Home";
import KeyboardReturn from "@material-ui/icons/KeyboardReturn";

import { navigate } from "gatsby";

const AboutRoot = styled.div`
  margin: 0;
  @media only screen and (max-width: 1024px) {
    margin: 0 1.5rem;
  }
`;

const Text = styled.div`
  margin-top: 1rem;
  & h5 {
    margin-top: 1rem;
  }
`;

const AboutPage = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Layout>
      <Seo title="Index Page" />

      <Search indexName="paddy_joy" open={open} handleClose={handleClose} />
      <ContentContainer style={{ marginTop: "4.5rem" }}>
        <h2>質問墓とは？</h2>
      </ContentContainer>

      <ContentContainer
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
        <AboutRoot>
          <Text>
            <h5>
              このプロジェクトは、Peing社が運営する『質問箱』のモバイルアプリが終了するにあたり、過去の質問と回答をアーカイブしておきたいというアルファ回答者中田さん（
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/paddy_joy"
              >
                @paddy_joy
              </a>
              ）さんの方のニーズに応える目的で3,000近い全回答をダウンロードしたことに始まります。
            </h5>
            <h5>
              その際、中田さんの質問箱の読者の方々から、自分たちもアーカイブが欲しい、できるならば検索できるようにしてほしいという要望もいただき、検索可能なウェブアプリとして公開に至りました。
            </h5>
            <h5>
              現時点では中田さんの質問のみが載っておりますが、もし他のアルファ回答者さんで似たようなサービスが欲しい方がいらっしゃれば、ぜひご連絡くださいませ。
            </h5>
          </Text>
        </AboutRoot>
      </ContentContainer>
    </Layout>
  );
};

export default AboutPage;
