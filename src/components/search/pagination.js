import React from "react";
import { usePagination } from "react-instantsearch-hooks-web";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";

import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import ArrowLeft from "@material-ui/icons/ArrowLeft";
import ArrowRight from "@material-ui/icons/ArrowRight";

const PaginatorRoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  color: #272727;
  padding: 0 2rem;

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    padding: 0 0.8rem;
  }

  @media only screen and (max-width: 480px) {
    padding: 0 0.5rem;
  }
`;

const Pages = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  list-style: none;
  box-sizing: border-box;

  li {
    position: relative;
  }
`;

const StyledIconButton = styled(IconButton)`
  height: 3rem;
  width: 3rem;
  min-width: unset;
  min-height: unset;
  margin: 0 1rem !important;
  padding: 0 !important;

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    margin: 0 0.5rem !important;
    height: 2rem;
    width: 2rem;
  }

  @media only screen and (max-width: 480px) {
    margin: 0 0.3rem !important;
    height: 1.5rem;
    width: 1.5rem;
  }
`;

const PageButton = styled(Button)`
  font-size: 1.3rem !important;
  background: none;
  box-sizing: border-box !important;
  min-width: unset !important;
  min-height: unset !important;
  margin: 0 1rem !important;
  padding: 0.4rem 1.4rem !important;
  border-radius: 15px !important;

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    margin: 0 0.5rem !important;
    font-size: 1.2rem !important;
    padding: 0.3rem 0.5rem !important;
  }

  @media only screen and (max-width: 480px) {
    margin: 0 0.3rem !important;
    font-size: 1.1rem !important;
    padding: 0.3rem 0.5rem !important;
  }
`;

export default function Pagination(props) {
  const iconColor = "#272727";
  const iconDisabledColor = "rgba(0, 0, 0, 0.26)";
  const iconSize = "large";
  const disabled = props.disabled;
  const {
    pages,
    currentRefinement,
    nbPages,
    isFirstPage,
    isLastPage,
    canRefine,
    refine,
  } = usePagination(props);

  return (
    <PaginatorRoot>
      <StyledIconButton
        onClick={() => refine(0)}
        disabled={disabled || !canRefine || isFirstPage}
      >
        <FirstPage
          fontSize={iconSize}
          style={{
            color:
              disabled || !canRefine || isFirstPage
                ? iconDisabledColor
                : iconColor,
          }}
        />
      </StyledIconButton>
      <StyledIconButton
        onClick={() => refine(currentRefinement - 1)}
        disabled={disabled || !canRefine || isFirstPage}
      >
        <ArrowLeft
          fontSize={iconSize}
          style={{
            color:
              disabled || !canRefine || isFirstPage
                ? iconDisabledColor
                : iconColor,
          }}
        />
      </StyledIconButton>
      <Pages>
        {pages.map((page, i) => (
          <li key={i}>
            <PageButton
              onClick={() => refine(page)}
              disabled={disabled || !canRefine}
              css={css`
                font-weight: ${currentRefinement === page
                  ? "bold !important"
                  : "regular !important"};
                text-decoration: ${currentRefinement === page
                  ? "underline !important"
                  : "none !important"};
              `}
            >
              {page + 1}
            </PageButton>
          </li>
        ))}
      </Pages>
      <StyledIconButton
        onClick={() => refine(currentRefinement + 1)}
        disabled={disabled || !canRefine || isLastPage}
      >
        <ArrowRight
          fontSize={iconSize}
          style={{
            color:
              disabled || !canRefine || isLastPage
                ? iconDisabledColor
                : iconColor,
          }}
        />
      </StyledIconButton>
      <StyledIconButton
        onClick={() => refine(nbPages - 1)}
        disabled={!canRefine || isLastPage}
      >
        <LastPage
          fontSize={iconSize}
          style={{
            color:
              disabled || !canRefine || isLastPage
                ? iconDisabledColor
                : iconColor,
          }}
        />
      </StyledIconButton>
    </PaginatorRoot>
  );
}
