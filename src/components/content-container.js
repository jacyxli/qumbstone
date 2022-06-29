import React from "react";
import styled from "@emotion/styled";
const OuterContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: auto;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const LeftContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0;
  width: 300px;
  min-width: 300px;
  height: 100%;

  @media only screen and (min-width: 1024px) and (max-width: 1280px) {
    width: 200px;
    min-width: 200px;
  }

  @media only screen and (max-width: 1024px) {
    width: 0px;
    min-width: unset;
  }
`;

const MiddleContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0;
  width: calc(100% - 600px);
  max-width: 800px;
  height: 100%;
  padding: 0;

  @media only screen and (min-width: 1024px) and (max-width: 1280px) {
    width: calc(100% - 400px);
  }

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    width: 100%;
    padding: 0 20px;
  }

  @media only screen and (max-width: 480px) {
    width: 100%;
    padding: 0 10px;
    max-width: unset;
  }
`;

const RightContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0;
  width: 300px;
  min-width: 300px;
  height: 100%;

  @media only screen and (min-width: 1024px) and (max-width: 1280px) {
    width: 200px;
    min-width: 200px;
  }

  @media only screen and (max-width: 1024px) {
    width: 0px;
    min-width: unset;
  }
`;

export default function ContentContainer({
  children,
  leftComponent,
  rightComponent,
  style,
}) {
  return (
    <OuterContainer style={style}>
      <LeftContainer>{leftComponent}</LeftContainer>
      <MiddleContainer>{children}</MiddleContainer>
      <RightContainer>{rightComponent}</RightContainer>
    </OuterContainer>
  );
}
