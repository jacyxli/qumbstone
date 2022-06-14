import React from "react";
import styled from "@emotion/styled";
import { StaticImage } from "gatsby-plugin-image";
import Qumbstone from "../images/qumbstone.svg";

const HeaderRoot = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export default function Header(props) {
  return (
    <HeaderRoot>
      <StaticImage
        src="../images/illustration.png"
        alt="Qumbstone Illustration"
        placeholder="blurred"
        layout="fixed"
        width={160}
        height={155}
      />
      <div
        css={{
          margin: "1.5rem 0 0.5rem 0",
        }}
      >
        <img src={Qumbstone} alt="質問墓" height="45px" />
      </div>
      <h4>検索可能な質問箱のアーカイブ</h4>
    </HeaderRoot>
  );
}
