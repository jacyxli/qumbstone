import React from "react";
import styled from "@emotion/styled";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import "@fontsource/noto-sans-jp";

import ContentContainer from "../components/content-container";
import Navbar from "../components/navbar";

const HeaderRoot = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  & h1 {
    font-size: 7.2rem;
    line-height: 120%;
  }

  @media only screen and (max-width: 480px) {
    & h1 {
      font-size: 6.6rem;
      line-height: 120%;
    }

    & h3 {
      font-size: 2rem;
    }
  }
`;
const ImageContainer = styled.div`
  max-width: 60%;
`;

const TopButton = styled(Link)`
  margin-top: 3rem;
  font-size: 1.5rem;
  font-weight: 600;
  text-decoration: none;
  border: 1px solid #272727;
  border-radius: 4px;
  padding: 0.8rem 1.4rem;
  background: white;

  &:hover {
    background: #f1f1f1;
  }
`;
// markup
const NotFoundPage = () => {
  return (
    <main>
      <Navbar></Navbar>
      <ContentContainer>
        <HeaderRoot>
          <ImageContainer>
            <StaticImage
              src="../images/illustration.png"
              alt="Qumbstone Illustration"
              placeholder="blurred"
              layout="Constrained"
              width={300}
            />
          </ImageContainer>
          <h1>404</h1>
          <h3>ページが見つかりませんでした</h3>
          <TopButton to="/">ホームへ</TopButton>
        </HeaderRoot>
      </ContentContainer>
    </main>
  );
};

export default NotFoundPage;
