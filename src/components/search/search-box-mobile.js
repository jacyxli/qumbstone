import React from "react";
import { useSearchBox } from "react-instantsearch-hooks-web";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import IconButton from "@material-ui/core/IconButton";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/OutlinedInput";

import SearchIcon from "@material-ui/icons/Search";
import Cancel from "@material-ui/icons/Cancel";

const SearchBoxRoot = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  height: 36px;
  flex: 1;
`;

const Form = styled(FormControl)`
  display: flex;
  align-items: center;
  margin-bottom: 0;
  transition: 1s ease-in-out;
  width: 100%;

  overflow: hidden !important;
  height: 36px;

  & fieldset {
    border-radius: 18px !important;
    border-color: #272727;
    border-width: 1px;
  }

  &:hover fieldset {
    border-width: 1.5px !important;
    border-color: #717171 !important;
  }

  .Mui-focused fieldset{
    border-width: 2px !important;
    border-color: #272727 !important;
  },
`;

const StyledInput = styled(Input)`
  padding-left: 10px !important;
  font-size: 1.3rem !important;
  height: 100%;

  & input {
    margin-left: 0.6rem !important;
    background: transparent !important;
    padding: 6px 0 7px 0 !important;
  }

  @media only screen and (min-width: 1024px) and (max-width: 1280px) {
    font-size: 1.1rem !important;

    & input {
      margin-left: -0.6rem !important;
      background: transparent !important;
      padding: 6px 0 7px 0 !important;
    }
  }
`;

export default function SearchBoxMobile(props) {
  const iconColor = "#272727";
  const iconSize = "large";
  const rootRef = React.createRef();

  const { query, refine, clear } = useSearchBox(props);
  const [searchWord, setSearchWord] = React.useState(query);

  const handleChange = (e) => {
    setSearchWord(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      if (searchWord) {
        refine(searchWord);
      }
    }
  };

  const handleClear = (e) => {
    setSearchWord("");
    clear();
  };

  return (
    <SearchBoxRoot ref={rootRef} className={props.className}>
      <Form fullWidth variant="outlined">
        <StyledInput
          id="search"
          value={searchWord}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="質問墓を検索"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon fontSize={iconSize} style={{ color: iconColor }} />
            </InputAdornment>
          }
          endAdornment={
            searchWord && (
              <InputAdornment position="end">
                <IconButton
                  css={css`
                    width: unset !important;
                    height: unset !important;
                    padding: 0 !important;
                  `}
                  onClick={handleClear}
                >
                  <Cancel fontSize="medium" style={{ color: "#717171" }} />
                </IconButton>
              </InputAdornment>
            )
          }
          fullWidth
        />
      </Form>
    </SearchBoxRoot>
  );
}
