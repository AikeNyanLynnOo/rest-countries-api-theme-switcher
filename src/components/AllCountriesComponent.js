import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
// components

const Wrapper = styled.section`
  background-color: ${(props) => props.theme.pageBackground};
  color: ${(props) => props.theme.textColor};
  padding: 0 0 35px 0;
  min-height: 100vh;
`;
const CardGrid = styled.section`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(
      0,
      1fr
    );
  grid-gap: 50px;
  background-color: ${(props) => props.theme.pageBackground};
  color: ${(props) => props.theme.textColor};
  @media (min-width: 700px) and (max-width: 1000px) {
    grid-gap: 20px 10px;
  }
  @media (max-width: 700px) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    grid-gap: 20px 10px;
  }
  @media (max-width: 375px) {
    grid-template-columns: minmax(0, 1fr);
    grid-gap: 30px 10px;
  }
`;

const Card = styled.div`
  font-size: 14px;
  cursor: pointer;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  height: 320px;
  background-color: ${(props) => props.theme.element};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
`;
const FlagImg = styled.img`
  display: block;
  width: 100%;
  height: 160px;
  margin-bottom: 10px;
  border-top-left-radius: 5px;
  -webkit-border-top-left-radius: 5px;
  -moz-border-top-left-radius: 5px;
  -ms-border-top-left-radius: 5px;
  -o-border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  -webkit-border-top-right-radius: 5px;
  -moz-border-top-right-radius: 5px;
  -ms-border-top-right-radius: 5px;
  -o-border-top-right-radius: 5px;
`;
const Description = styled.div`
  height: 140px;
  overflow-y: scroll;
`;
const Title = styled.h2`
  font-weight: 600;
  margin: 10px 20px;
`;
export const List = styled.ul`
  list-style-type: none;
  margin: 10px 20px;
  font-weight: 300;
  & li {
    margin: 6px auto;
  }
`;
export const ListItemProperty = styled.span`
  font-weight: 600;
`;
const Loading = styled.h3`
  text-align: center;
  font-weight: 600;
  font-size: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const AllCountries = ({ countries, theme }) => {
  if (countries.isLoading) {
    return (
      <Wrapper>
        <Loading>Loading...</Loading>
      </Wrapper>
    );
  } else if (countries.errMessage) {
    return (
      <Wrapper>
        <Loading>{countries.errMessage}</Loading>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <CardGrid>
          {countries.countries.map((country, idx) => {
            return (
              <Link
                to={`/countries/${country.name.common}`}
                style={{
                  textDecoration: "none",
                  color:
                    theme === "light"
                      ? "hsl(200, 15%, 8%)"
                      : "hsl(0, 0%, 100%)",
                }}
                key={idx}
              >
                <Card>
                  <FlagImg src={`${country.flags.png}`} alt="flag-img" />
                  <Description className="card-description">
                    <Title>{country.name.common}</Title>
                    <List>
                      <li>
                        <ListItemProperty>Population</ListItemProperty> :{" "}
                        {country.population}
                      </li>
                      <li>
                        <ListItemProperty>Region</ListItemProperty> :{" "}
                        {country.region}
                      </li>
                      <li>
                        <ListItemProperty>Capital</ListItemProperty> :{" "}
                        {country.capital}
                      </li>
                    </List>
                  </Description>
                </Card>
              </Link>
            );
          })}
        </CardGrid>
      </Wrapper>
    );
  }
};
export default AllCountries;
