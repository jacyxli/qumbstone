import React from "react";
import styled from "@emotion/styled";
const OuterContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: auto;
  width: 100%;
  height: 100%;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0;
  width: 300px;
  min-width: 300px;
  height: 100%;
`;

const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0;
  width: calc(100% - 600px);
  max-width: 800px;
  height: 100%;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0;
  width: 300px;
  min-width: 300px;
  height: 100%;
`;

export default function ContentContainer({
  children,
  leftComponent,
  rightComponent,
}) {
  return (
    <OuterContainer>
      <LeftContainer>{leftComponent}</LeftContainer>
      <MiddleContainer>{children}</MiddleContainer>
      <RightContainer>{rightComponent}</RightContainer>
    </OuterContainer>
  );
}
