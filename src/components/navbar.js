import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/icons/Menu";

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

export default function Navbar(props) {
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
            <Link to="/contact-us">CONTACT US</Link>
          </NavMenuItem>
          <NavToggle>
            <IconButton onClick={props.toggleMenu}>
              <Menu
                style={{
                  width: "1.6em",
                  height: "1.6em",
                }}
              />
            </IconButton>
          </NavToggle>
        </ul>
      </nav>
    </Header>
  );
}
