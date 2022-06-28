import React from "react";
import styled from "@emotion/styled";

import IconButton from "@material-ui/core/IconButton";

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
  margin: 0 !important;
  padding: 0 !important;
`;

const Label = styled.label`
  display: block;
  font-size: 1.5rem;
  font-weight: 200;
  margin-left: 1rem;
  @media only screen and (min-width: 1024px) and (max-width: 1280px) {
    display: none;
  }
`;

export default function SidebarButton({
  icon,
  label,
  onClick,
  children,
  ...attr
}) {
  return (
    <Root>
      <StyledIconButton onClick={onClick} {...attr}>
        {icon}
      </StyledIconButton>

      {typeof label === "string" ? <Label>{label}</Label> : label}

      {children}
    </Root>
  );
}
