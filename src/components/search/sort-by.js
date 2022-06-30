import React from "react";
import { useSortBy } from "react-instantsearch-hooks-web";
import styled from "@emotion/styled";
import Sort from "@material-ui/icons/Sort";

import Popper from "@material-ui/core/Popper";
import Fade from "@material-ui/core/Fade";

import useClickOutside from "../use-click-outside";
import SidebarButton from "../sidebar-button";
import StyledLabel from "../styled-label";
import StyledCurrentRefinement from "../styled-current-refinement";

const Menu = styled.ul`
  background: white;
  box-sizing: border-box;
  overflow: hidden;
  margin-top: 0.2rem;
  box-shadow: #eaeaea 0px 4px 10px;
  border-color: 1px solid #eaeaea;
  min-width: 10rem;

  & li {
    border-bottom: 1px solid #f1f1f1;

    & button {
      background: none;
      color: inherit;
      border: none;
      font: inherit;
      cursor: pointer;
      outline: inherit;
      width: 100%;
      padding: 1.2rem 2rem;
      cursor: pointer;

      &:hover {
        background: #f1f1f1;
      }
    }
  }

  & li:last-child {
    border-bottom: none;
  }
`;

export default function SortBy(props) {
  const rootRef = React.createRef();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState("bottom-start");

  const { currentRefinement, options, refine } = useSortBy(props);

  const label = options.filter((item) => item.value === currentRefinement)[0]
    .label;

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(!open);
    setPlacement(newPlacement);
  };

  useClickOutside(rootRef, () => setOpen(false));

  return (
    <div ref={rootRef} className={props.className}>
      <SidebarButton
        icon={<Sort fontSize="large" style={{ color: "#272727" }} />}
        label={
          <StyledLabel>
            SORT BY - <StyledCurrentRefinement>{label}</StyledCurrentRefinement>
          </StyledLabel>
        }
        onClick={handleClick("bottom-start")}
      >
        <Popper
          open={open}
          anchorEl={anchorEl}
          placement={placement}
          transition
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Menu>
                {options.map((option, i) => (
                  <li key={i}>
                    <button
                      onClick={() => {
                        if (option.value !== currentRefinement) {
                          refine(option.value);
                        }
                        setOpen(false);
                      }}
                    >
                      {option.label}
                    </button>
                  </li>
                ))}
              </Menu>
            </Fade>
          )}
        </Popper>
      </SidebarButton>
    </div>
  );
}
