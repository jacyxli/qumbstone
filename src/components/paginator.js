import React from "react";
import PropTypes from "prop-types";

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

const Dot = styled.li`
  background: none;
  border: none;
  pointer-event: none;
`;

function PageButton({ goToPage, children, isCurrentPage = false }) {
  return (
    <li>
      <Button
        css={css`
          font-size: 1.3rem !important;
          background: none;
          box-sizing: border-box !important;
          min-width: unset !important;
          min-height: unset !important;
          margin: 0 1rem !important;
          padding: 0.4rem 1.4rem !important;
          font-weight: ${isCurrentPage
            ? "bold !important"
            : "regular !important"};
          text-decoration: ${isCurrentPage
            ? "underline !important"
            : "none !important"};

          @media only screen and (max-width: 480px) {
            margin: 0 0.5rem !important;
            padding: 0.3rem 1rem !important;
          }
        `}
        onClick={goToPage}
      >
        {children}
      </Button>
    </li>
  );
}

function IconBtn({ children, ...attr }) {
  return (
    <IconButton
      css={css`
        height: 3rem;
        width: 3rem;
        min-width: unset;
        min-height: unset;
        margin: 0 1rem !important;
        padding: 0 !important;

        @media only screen and (max-width: 480px) {
          margin: 0 0.5rem !important;
          height: 2rem;
          width: 2rem;
        }
      `}
      {...attr}
    >
      {children}
    </IconButton>
  );
}

class Paginator extends React.Component {
  render() {
    const { currentPage, lastPage, style, disabled, goToPage } = this.props;
    const customStyle = style ? style : {};

    return (
      <PaginatorRoot
        style={{
          ...customStyle,
          pointerEvents: disabled ? "none" : "auto",
        }}
      >
        <IconBtn onClick={() => goToPage(1)} disabled={currentPage === 1}>
          <FirstPage fontSize="large" style={{ color: "#272727" }} />
        </IconBtn>

        <IconBtn
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ArrowLeft fontSize="large" style={{ color: "#272727" }} />
        </IconBtn>

        {lastPage > 5 ? (
          <Pages>
            <PageButton
              goToPage={() => goToPage(1)}
              isCurrentPage={currentPage === 1}
            >
              1
            </PageButton>

            {currentPage > 3 && <Dot>...</Dot>}

            {(() => {
              let num = 0;
              if (currentPage === 1) {
                num = 1;
              } else if (currentPage === 2) {
                num = 0;
              } else if (currentPage > 2 && currentPage < lastPage - 1) {
                num = -1;
              } else if (currentPage === lastPage - 1) {
                num = -2;
              } else if (currentPage === lastPage) {
                num = -3;
              }

              return Array.from(Array(3).keys()).map((i) => (
                <PageButton
                  key={currentPage + i + num}
                  goToPage={() => goToPage(currentPage + i + num)}
                  isCurrentPage={currentPage === currentPage + i + num}
                >
                  {currentPage + i + num}
                </PageButton>
              ));
            })()}

            {currentPage < lastPage - 2 && <Dot>...</Dot>}

            <PageButton
              goToPage={() => goToPage(lastPage)}
              isCurrentPage={currentPage === lastPage}
            >
              {lastPage}
            </PageButton>
          </Pages>
        ) : (
          <Pages>
            {Array.from(Array(lastPage).keys()).map((i) => (
              <PageButton
                key={i + 1}
                goToPage={() => goToPage(i + 1)}
                isCurrentPage={currentPage === i + 1}
              >
                {i + 1}
              </PageButton>
            ))}
          </Pages>
        )}

        <IconBtn
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === lastPage}
        >
          <ArrowRight fontSize="large" style={{ color: "#272727" }} />
        </IconBtn>

        <IconBtn
          onClick={() => goToPage(lastPage)}
          disabled={currentPage === lastPage}
        >
          <LastPage fontSize="large" style={{ color: "#272727" }} />
        </IconBtn>
      </PaginatorRoot>
    );
  }
}

Paginator.propTypes = {
  currentPage: PropTypes.number.isRequired,
  lastPage: PropTypes.number.isRequired,
  goToPage: PropTypes.func.isRequired,
  style: PropTypes.object,
};

export default Paginator;
