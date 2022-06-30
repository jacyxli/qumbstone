import * as React from "react";
import styled from "@emotion/styled";

import Layout from "../components/layout";
import Seo from "../components/seo";
import ContentContainer from "../components/content-container";
import Sidebar from "../components/sidebar";
import SidebarMobile from "../components/sidebar-mobile";

const Container = styled.div`
  margin: 4.5rem 0;
  @media only screen and (max-width: 480px) {
    margin: 2rem 1.5rem;
  }
`;

const Text = styled.div`
  margin-top: 1rem;
  & h5 {
    margin-top: 1rem;
  }
`;

const AboutPage = (props) => {
  return (
    <Layout>
      <Seo title="質問墓とは？" />
      <Container>
        <ContentContainer>
          <SidebarMobile displayHome={true} displayReturn={true} />

          <h2>質問墓とは？</h2>
        </ContentContainer>

        <ContentContainer
          rightComponent={<Sidebar displayReturn={true} displayHome={true} />}
        >
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
        </ContentContainer>
      </Container>
    </Layout>
  );
};

export default AboutPage;
