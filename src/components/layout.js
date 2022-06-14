import React from "react";
import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";
import "@fontsource/noto-sans-jp";
import Navbar from "./navbar";
import Header from "./header";
import Profile from "./profile";

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0 auto;
  width: 800px;
  height: 100%;
`;

export default function Layout({ children }) {
  return (
    <main>
      <Global
        styles={css`
          * {
            font-family: "Noto Sans Japanese", "Noto Sans CJK JP", sans-serif;
            overflow: visible;
            box-sizing: border-box;
            scroll-behavior: smooth;
          }

          html {
            font-size: 10px;
          }

          body {
            font-size: 1.6rem;
          }

          html,
          body {
            height: 100%;
            color: $black;
          }

          *,
          *::before,
          *::after {
            box-sizing: inherit;
          }

          body,
          ul,
          ol,
          p,
          h1,
          h2,
          h3,
          h4,
          h5,
          input,
          textarea {
            margin: 0;
            padding: 0;
          }

          a {
            text-decoration: none;
          }

          h1,
          .heading-size-45 {
            font-size: 4.5rem;
            font-weight: bold;
          }

          h2,
          .heading-size-30 {
            font-size: 3rem;
            font-weight: bold;
          }

          h3,
          .heading-size-24 {
            font-size: 2.4rem;
            font-weight: bold;
          }

          h4,
          .heading-size-18 {
            font-size: 1.8rem;
            font-weight: normal;
          }

          h5,
          .heading-size-15 {
            font-size: 1.5rem;
            font-weight: normal;
          }

          p,
          .heading-size-12 {
            font-size: 1.2rem;
            font-weight: lighter;
          }

          small,
          .heading-size-9 {
            font-size: 0.9rem;
            font-weight: lighter;
          }
        `}
      />

      <Navbar toggleMenu={() => console.log("menu toggled")}></Navbar>

      <OuterContainer>
        <Container>
          <Header />
          <Profile />
        </Container>
      </OuterContainer>

      {children}
    </main>
  );
}
