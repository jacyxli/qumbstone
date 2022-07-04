import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const ellipsis1 = keyframes`
0% {
    transform: scale(0);
}
100% {
    transform: scale(1);
}
`;

const ellipsis2 = keyframes`
0% {
    ransform: translate(0, 0);
}
100% {
    transform: translate(24px, 0);
}
`;

const ellipsis3 = keyframes`
0% {
    transform: scale(1);
}
100% {
    transform: scale(0);
}
`;

const LoaderRoot = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  & div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #717171;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  & div:nth-of-type(1) {
    left: 8px;
    animation: ${ellipsis1} 0.6s infinite;
  }
  & div:nth-of-type(2) {
    left: 8px;
    animation: ${ellipsis2} 0.6s infinite;
  }
  & div:nth-of-type(3) {
    left: 32px;
    animation: ${ellipsis2} 0.6s infinite;
  }
  & div:nth-of-type(4) {
    left: 56px;
    animation: ${ellipsis3} 0.6s infinite;
  }
`;
export default function Loader() {
  return (
    <LoaderRoot>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </LoaderRoot>
  );
}
