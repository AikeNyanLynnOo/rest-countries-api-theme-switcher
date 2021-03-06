import React from "react";
// ThirdParty libraries
import { ThemeProvider } from "styled-components";

// Components
import AllCountries from "./AllCountriesComponent";
import CountryDetail from "./CountryDetailComponent";
import NavBar from "./NavBarComponent";
import SearchandFilter from "./SearchandFilterComponent";

// Router
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import {
  fetchCountries,
  changeTheme,
  fetchWithRegion,
  searchByName,
} from "../redux/actions/ActionCreators";

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
    theme: state.theme,
    filter: state.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCountries: () => dispatch(fetchCountries()),
    changeTheme: (theme) => dispatch(changeTheme(theme)),
    fetchWithRegion: (region) => dispatch(fetchWithRegion(region)),
    searchByName: (name) => dispatch(searchByName(name)),
  };
};

// Themes
const LightTheme = {
  pageBackground: "hsl(0, 0%, 98%)",
  textColor: "hsl(200, 15%, 8%)",
  element: "hsl(0, 0%, 100%)",
  input: "hsl(0, 0%, 52%)",
};

const DarkTheme = {
  pageBackground: "hsl(207, 26%, 17%)",
  textColor: "hsl(0, 0%, 100%)",
  element: "hsl(209, 23%, 22%)",
  input: "hsl(0, 0%, 100%)",
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

class Main extends React.Component {
  componentDidMount() {
    this.props.fetchCountries();
  }

  render() {
    const CountryWithName = ({ match, location, history }) => {
      return (
        <CountryDetail
          theme={this.props.theme.current}
          country={
            this.props.countries.countries.filter(
              (country) => country.name.common === match.params.name
            )[0]
          }
          name={match.params.name}
        />
      );
    };
    return (
      <ThemeProvider theme={themes[this.props.theme.current]}>
        <NavBar
          theme={this.props.theme.current}
          changeTheme={this.props.changeTheme}
        />
        <SearchandFilter
          theme={this.props.theme.current}
          filter={this.props.filter.current}
          fetchWithRegion={this.props.fetchWithRegion}
          searchByName={this.props.searchByName}
        />
        <Switch>
          <Route
            path="/"
            exact
            component={() => (
              <AllCountries
                theme={this.props.theme.current}
                countries={this.props.countries}
              />
            )}
          />
          <Route path="/countries/:name" exact component={CountryWithName} />
          <Redirect to="/" />
        </Switch>
      </ThemeProvider>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
