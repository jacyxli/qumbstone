import React from "react";
import styled from "@emotion/styled";
import { navigate } from "gatsby";

import SearchIcon from "@material-ui/icons/Search";
import UnfoldLess from "@material-ui/icons/UnfoldLess";
import UnfoldMore from "@material-ui/icons/UnfoldMore";
import Home from "@material-ui/icons/Home";
import KeyboardReturn from "@material-ui/icons/KeyboardReturn";

import SortBy from "./search/sort-by";

import SidebarButton from "./sidebar-button";

const SidebarRoot = styled.div`
  margin-left: 2rem;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

export default function Sidebar({
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
        <SidebarButton
          icon={<SearchIcon fontSize={iconSize} style={{ color: iconColor }} />}
          label="SEARCH"
          label_jp="検索"
          onClick={() => {
            console.log("click");
          }}
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
