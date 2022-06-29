import { useSearchBox } from "react-instantsearch-hooks-web";
import { useSearchBox } from "react-instantsearch-hooks-web";
import styled from "@emotion/styled";

const SearchBoxRoot = styled.div`
  display: block;
`;

export default function Search(props) {
  const { query, refine, clear, isSearchStalled } = useSearchBox(props);

  return <SearchBoxRoot></SearchBoxRoot>;
}
