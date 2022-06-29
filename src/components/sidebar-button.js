import React from "react";
import styled from "@emotion/styled";

import IconButton from "@material-ui/core/IconButton";
import StyledLabel from "./styled-label";

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 0.5rem;
`;

const StyledIconButton = styled(IconButton)`
  height: 3.6rem;
  width: 3.6rem;
  min-width: unset;
  min-height: unset;
  margin-left: 0.3rem !important;
  padding: 0 !important;
`;

export default function SidebarButton({
  icon,
  label,
  onClick,
  children,
  className,
  ...attr
}) {
  return (
    <Root css={className}>
      <StyledIconButton onClick={onClick} {...attr}>
        {icon}
      </StyledIconButton>

      {typeof label === "string" ? <StyledLabel>{label}</StyledLabel> : label}

      {children}
    </Root>
  );
}
