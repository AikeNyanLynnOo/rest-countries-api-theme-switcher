import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";

// components
import { List, ListItemProperty } from "./AllCountriesComponent";

const Wrapper = styled.section`
  background-color: ${(props) => props.theme.pageBackground};
  color: ${(props) => props.theme.textColor};
  padding: 0 0 35px 0;
  min-height: 100vh;
`;

const BtnContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-top: 0;
`;

const BackBtn = styled.button`
  border-radius: 4px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -ms-border-radius: 4px;
  -o-border-radius: 4px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 5px 25px;
  background-color: ${(props) => props.theme.element};
  color: ${(props) => props.theme.textColor};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  &:focus {
    outline: none;
    border: none;
  }
`;

const Icon = styled.img`
  height: 14px;
  margin-right: 5px;
  padding: 7px 7px 7px 0;
`;

const Flex = styled.div`
  width: 90%;
  height: auto;
  margin: 35px auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 450px) {
    display: block;
  }
`;

const Flag = styled.img`
  width: 40%;
  height: 100%;
  @media (max-width: 450px) {
    width: 100%;
  }
`;

const Description = styled.div`
  width: 55%;
  heigth: 100%;
  @media (max-width: 450px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const Title = styled.h2`
  font-weight: 800;
  margin: 0 20px 10px 0;
`;

const DescriptionFlex = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 450px) {
    & ul {
      margin: 20px 0;
    }
    display: block;
  }
`;

const TagContainer = styled.div`
  margin: 10px 7px;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1000px) {
    margin-left: 0;
  }
`;

const Tag = styled.span`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  padding: 5px 10px;
  border-radius: 4px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -ms-border-radius: 4px;
  -o-border-radius: 4px;
  margin: 5px 7px 5px 0;
  background-color: ${(props) => props.theme.element};
`;

const DescriptionFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 20px;
  align-items: center;
  @media (max-width: 450px) {
    margin: 10px 0;
    display: block;
  }
`;

const CountryDetail = ({ country, theme }) => {
  if (!country) {
    return <Redirect to="/" />;
  } else {
    return (
      <Wrapper>
        <BtnContainer>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color:
                theme === "light" ? "hsl(200, 15%, 8%)" : "hsl(0, 0%, 100%)",
            }}
          >
            <BackBtn>
              <Icon src={`./images/back_${theme}.png`} />
              Back
            </BackBtn>
          </Link>
        </BtnContainer>
        <Flex>
          <Flag src={`${country.flags.png}`} alt="flag-img" />
          <Description>
            <Title>{country.name.official}</Title>
            <DescriptionFlex>
              <List>
                <li>
                  <ListItemProperty>Native Name : </ListItemProperty>
                  {
                    country.name.nativeName[
                      Object.keys(country.name.nativeName)[0]
                    ].official
                  }
                </li>
                <li>
                  <ListItemProperty>Population : </ListItemProperty>
                  {country.population}
                </li>
                <li>
                  <ListItemProperty>Region : </ListItemProperty>{" "}
                  {country.region}
                </li>
                <li>
                  <ListItemProperty>Sub Region : </ListItemProperty>
                  {country.subregion}
                </li>
                <li>
                  <ListItemProperty>Capital : </ListItemProperty>
                  {country.capital}
                </li>
              </List>
              <List>
                <li>
                  <ListItemProperty>Top Level Domains : </ListItemProperty>
                  {country.tld.join(",")}
                </li>
                <li>
                  <ListItemProperty>Currencies : </ListItemProperty>
                  {country.currencies &&
                    country.currencies[Object.keys(country.currencies)[0]]
                      .name}{" "}
                  -{" "}
                  {country.currencies &&
                    country.currencies[Object.keys(country.currencies)[0]]
                      .symbol}
                </li>
                <li>
                  <ListItemProperty>Languages : </ListItemProperty>
                  {Object.keys(country.languages).map((key, idx) => {
                    if (idx === Object.keys(country.languages).length - 1) {
                      return <span key={idx}>{country.languages[key]} </span>;
                    }
                    return <span>{country.languages[key]}, </span>;
                  })}
                </li>
              </List>
            </DescriptionFlex>
            <DescriptionFooter>
              <ListItemProperty>Border Countries : </ListItemProperty>
              <TagContainer>
                {(country.borders &&
                  country.borders.map((border, idx) => {
                    return <Tag key={idx}>{border}</Tag>;
                  })) ||
                  " No border countries"}
              </TagContainer>
            </DescriptionFooter>
          </Description>
        </Flex>
      </Wrapper>
    );
  }
};
export default CountryDetail;
