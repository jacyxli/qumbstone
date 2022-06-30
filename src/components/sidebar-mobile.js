import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { navigate } from "gatsby";

import UnfoldLess from "@material-ui/icons/UnfoldLess";
import UnfoldMore from "@material-ui/icons/UnfoldMore";
import Home from "@material-ui/icons/Home";
import KeyboardReturn from "@material-ui/icons/KeyboardReturn";

import SortBy from "./search/sort-by";
import SearchBoxMobile from "./search/search-box-mobile";

import SidebarButton from "./sidebar-button";

const SidebarRoot = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem 0;
  @media only screen and (min-width: 1025px) {
    display: none;
  }
`;

export default function SidebarMobile({
  displaySearch = false,
  displaySort = false,
  displayFold = false,
  displayHome = false,
  displayReturn = false,
  showQuestionOnly,
  handleToggleShowQuestionOnly,
}) {
  const iconColor = "#272727";
  const iconSize = "large";
  return (
    <SidebarRoot>
      {displaySearch && (
        <SearchBoxMobile
          css={css`
            margin-right: 0.5rem;
          `}
        />
      )}
      {displaySort && (
        <SortBy
          items={[
            {
              label: "デフォルト",
              value: "paddy_joy",
            },
            {
              label: "新しい順",
              value: "paddy_joy_sort_date_desc",
            },
            {
              label: "人気順",
              value: "paddy_joy_sort_like_count_desc",
            },
          ]}
        />
      )}
      {(() => {
        if (displayFold) {
          if (showQuestionOnly) {
            return (
              <SidebarButton
                icon={
                  <UnfoldMore
                    fontSize={iconSize}
                    style={{ color: iconColor }}
                  />
                }
                label="SHOW ANSWERS"
                label_jp="回答を表示する"
                onClick={handleToggleShowQuestionOnly}
              />
            );
          } else {
            return (
              <SidebarButton
                icon={
                  <UnfoldLess
                    fontSize={iconSize}
                    style={{ color: iconColor }}
                  />
                }
                label="SHOW QUESTIONS ONLY"
                label_jp="質問のみを見る"
                onClick={handleToggleShowQuestionOnly}
              />
            );
          }
        }
      })()}

      {displayHome && (
        <SidebarButton
          icon={<Home fontSize={iconSize} style={{ color: iconColor }} />}
          label="HOME"
          label_jp="トップページへ"
          onClick={() => navigate("/")}
        />
      )}

      {displayReturn && (
        <SidebarButton
          icon={
            <KeyboardReturn fontSize={iconSize} style={{ color: iconColor }} />
          }
          label="GO BACK"
          label_jp="戻る"
          onClick={() => navigate(-1)}
        />
      )}
    </SidebarRoot>
  );
}
