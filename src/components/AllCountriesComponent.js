import React from "react";
import styled from "styled-components";

const AllCountries = ({ countries }) => {
  if (countries.isLoading) {
    return <p>Loading</p>;
  } else {
    return countries.countries.map((country,idx) => {
      return <div key={idx}>{country.name.common}</div>;
    });
  }
};
export default AllCountries;
