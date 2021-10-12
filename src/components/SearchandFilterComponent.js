import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 90%;
  margin: 0 auto;
  @media (max-width: 400px) {
    display: block;
  }
`;

const SearchBar = styled.div`
  border-radius: 4px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -ms-border-radius: 4px;
  -o-border-radius: 4px;
  height: 45px;
  width: 30%;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.element};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  @media (max-width: 400px) {
    width: 100%;
    margin-bottom: 20px;
  }
  @media (min-width: 400px) and (max-width: 500px) {
    width: 100px;
    flex: 1;
    margin-right: 10px;
  }
  @media (max-width: 300px) {
    padding: 0;
  }
`;

const SearchInput = styled.input`
  border: none;
  flex: 1;
  font-size: 14px;
  width: 100%;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.element};
  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled.img`
  height: 14px;
  margin-right: 5px;
  vertical-align: middle;
  padding: 7px;
  cursor: pointer;
`;

const Filter = styled.div`
  height: 45px;
  width: 150px;
  border-radius: 4px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.element};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  @media (max-width: 400px) {
    width: 100%;
  }
  @media (min-width: 400px) and (max-width: 500px) {
    width: 100px;
  }
  @media (max-width: 300px) {
    padding: 0 6px;
  }
`;

const SelectField = styled.p`
  flex: 1;
  font-size: 14px;
  margin-right: 5px;
`;

const SelectIcon = styled.img`
  height: 13px;
`;

const List = styled.ul`
  position: absolute;
  top: 47px;
  left: 0;
  padding: 2px 16px;
  box-sizing: border-box;
  width: 100%;
  list-style-type: none;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.element};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
`;
const ListItem = styled.li`
  padding: 5px 0;
`;

const Bar = styled.section`
  background-color: ${(props) => props.theme.pageBackground};
  color: ${(props) => props.theme.textColor};
  padding: 35px 0;
`;

const SearchandFilter = (props) => {
  const [showList, setShowList] = useState(false);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const width = window.innerWidth;
  return (
    <Bar>
      <Container>
        <SearchBar>
          <SearchIcon
            src={`/images/search_${props.theme}.png`}
            alt="search-icon"
            onClick={() => props.searchByName(input)}
          />
          <SearchInput
            placeholder={
              width < 220
                ? width < 200
                  ? `Search`
                  : `Search country`
                : `Search for a country...`
            }
            onChange={handleChange}
            onKeyDown={(e) => e.key === "Enter" && props.searchByName(input)}
          />
        </SearchBar>
        <Filter onClick={() => setShowList(!showList)}>
          <SelectField>
            {props.filter || (width < 200 ? "Filter" : "Filter by Region")}
          </SelectField>
          <SelectIcon
            src={`/images/down_${props.theme}.png`}
            alt="chevron-icon"
          />
          {showList && (
            <List>
              {["All", "Africa", "Americas", "Asia", "Europe", "Oceania"].map(
                (region) => (
                  <ListItem
                    key={region}
                    onClick={() => props.fetchWithRegion(region)}
                  >
                    {region}
                  </ListItem>
                )
              )}
            </List>
          )}
        </Filter>
      </Container>
    </Bar>
  );
};
export default SearchandFilter;
