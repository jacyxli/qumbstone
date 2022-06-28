import React from "react";
import { useSortBy } from "react-instantsearch-hooks-web";
import styled from "@emotion/styled";
import Sort from "@material-ui/icons/Sort";

import IconButton from "@material-ui/core/IconButton";
import Popper from "@material-ui/core/Popper";
import Fade from "@material-ui/core/Fade";

import SidebarButton from "../sidebar-button";

const Label = styled.label`
  display: block;
  font-size: 1.5rem;
  font-weight: 200;
  margin-left: 1rem;
  @media only screen and (min-width: 1024px) and (max-width: 1280px) {
    display: none;
  }
`;

const CurrentRefinement = styled.span`
  font-size: 1.5rem;
  font-weight: 200;
  margin-left: 0.2rem;
  color: #717171;
  @media only screen and (min-width: 1024px) and (max-width: 1280px) {
    display: none;
  }
`;

const Menu = styled.ul`
  background: white;
  box-sizing: border-box;
  overflow: hidden;
  margin-top: 0.2rem;
  box-shadow: #eaeaea 0px 4px 10px;
  border-color: 1px solid #eaeaea;
  min-width: 10rem;

  & li {
    padding: 1.2rem 2rem;
    border-bottom: 1px solid #f1f1f1;
    cursor: pointer;

    &:hover {
      background: #f1f1f1;
    }
  }

  & li:last-child {
    border-bottom: none;
  }
`;

export default function SortBy(props) {
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

  return (
    <SidebarButton
      icon={<Sort fontSize="large" style={{ color: "#272727" }} />}
      label={
        <Label>
          SORT BY - <CurrentRefinement>{label}</CurrentRefinement>
        </Label>
      }
      onClick={handleClick("bottom-start")}
    >
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Menu>
              {options.map((option, i) => (
                <li
                  key={i}
                  onClick={() => {
                    if (option.value !== currentRefinement) {
                      refine(option.value);
                    }
                    setOpen(false);
                  }}
                >
                  {option.label}
                </li>
              ))}
            </Menu>
          </Fade>
        )}
      </Popper>
    </SidebarButton>
  );
}
