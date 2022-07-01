import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { Link } from "gatsby";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/icons/Menu";
import useClickOutside from "./use-click-outside";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6rem;
  padding: 1rem 2rem;
  margin: 0 auto;
  box-sizing: border-box;
`;

const NavMenuItem = styled.li`
  display: block;
  padding-left: 1.5rem;
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

const NavToggle = styled.li`
  display: none;
  @media only screen and (max-width: 1024px) {
    display: block;
  }
`;

const NavToggleMenuContainer = styled.ul`
  background: white;
  width: 98%;
  position: absolute;
  left: 0;
  box-sizing: border-box;
  overflow: hidden;
  margin: 1%;
  z-index: 1;
  box-shadow: #eaeaea 0px 4px 10px;
  border-color: 1px solid #eaeaea;

  & a {
    text-decoration: none !important;
  }

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

export default function Navbar(props) {
  const rootRef = React.createRef();

  const [open, setOpen] = React.useState(false);
  const handleToggleMenu = () => setOpen(!open);

  useClickOutside(rootRef, () => setOpen(false));

  return (
    <Header>
      <Link
        to="/"
        css={{
          color: "black",
          fontWeight: "bold",
          fontSize: "3rem",
          textDecoration: "none",
        }}
      >
        Qumbstone
      </Link>
      <nav>
        <ul
          css={{
            display: "flex",
            alignItems: "center",
            color: "black",
            listStyleType: "none",
            fontSize: "1.4rem",
            "& li": {
              "& a": {
                color: "black",
                textDecoration: "none",

                "&:hover": {
                  textDecoration: "underline",
                },
              },
            },
          }}
        >
          <NavMenuItem>
            <Link to="/about">質問墓とは</Link>
          </NavMenuItem>
          <NavMenuItem>
            <a
              target="_blank"
              rel="noreferrer"
              href={process.env.GATSBY_CONTACT_US_TWITTER}
            >
              CONTACT US
            </a>
          </NavMenuItem>
          <NavToggle>
            <IconButton onClick={handleToggleMenu}>
              <Menu
                style={{
                  width: "1.6em",
                  height: "1.6em",
                }}
              />
            </IconButton>
            <NavToggleMenuContainer
              ref={rootRef}
              css={css`
                border: ${open ? "0px solid #eaeaea" : "0px solid transparent"};
                max-height: ${open ? "300px" : 0};
                transition: max-height 1s linear, border 1s linear;
              `}
            >
              <Link to="/about" onClick={() => setOpen(false)}>
                <li>質問墓とは</li>
              </Link>

              <a
                target="_blank"
                rel="noreferrer"
                href={process.env.GATSBY_CONTACT_US_TWITTER}
              >
                <li>CONTACT US</li>
              </a>
            </NavToggleMenuContainer>
          </NavToggle>
        </ul>
      </nav>
    </Header>
  );
}
