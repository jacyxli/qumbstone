import React from "react";
import PropTypes from "prop-types";

import styled from "@emotion/styled";
import { css } from "@emotion/react";

import Search from "@material-ui/icons/Search";
import Sort from "@material-ui/icons/Sort";
import UnfoldLess from "@material-ui/icons/UnfoldLess";

import IconButton from "@material-ui/core/IconButton";

import { navigate } from "gatsby";

function Button({ icon, label, onClick, ...attr }) {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 0.5rem;
      `}
    >
      <IconButton
        css={css`
          height: 3.6rem;
          width: 3.6rem;
          min-width: unset;
          min-height: unset;
          margin: 0 !important;
          padding: 0 !important;
        `}
        onClick={onClick}
        {...attr}
      >
        {icon}
      </IconButton>
      <label
        css={css`
          font-size: 1.5rem;
          font-weight: 200;
          margin-left: 1rem;
        `}
      >
        {label}
      </label>
    </div>
  );
}

const SidebarRoot = styled.div`
  margin-left: 2rem;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { keyword: "" };
  }

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  };

  handleEnterKeyPressed = (e) => {
    if (e.keyCode === 13) {
      if (this.state.keyword) {
        navigate(`search?keyword=${this.state.keyword}`);
      }
    }
  };

  render() {
    const { handleOpenSearch } = this.props;

    return (
      <SidebarRoot>
        <Button
          icon={<Search fontSize="large" style={{ color: "#272727" }} />}
          label="SEARCH"
          onClick={handleOpenSearch}
        />
        <Button
          icon={<Sort fontSize="large" style={{ color: "#272727" }} />}
          label="SORT"
        />
        <Button
          icon={<UnfoldLess fontSize="large" style={{ color: "#272727" }} />}
          label="SHOW QUESTIONS ONLY"
        />
      </SidebarRoot>
    );
  }
}

Sidebar.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Sidebar;
