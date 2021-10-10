import React from "react";
// ThirdParty libraries
import { ThemeProvider } from "styled-components";

// Components
import AllCountries from "./AllCountriesComponent";
import CountryDetail from "./CountryDetailComponent";
import NavBar from "./NavBarComponent";

// Router
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import { fetchCountries, changeTheme } from "../redux/actions/ActionCreators";

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
    theme: state.theme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCountries: () => dispatch(fetchCountries()),
    changeTheme: (theme) => dispatch(changeTheme(theme)),
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
    const CountryWithID = ({ match, location, history }) => {
      return (
        <CountryDetail
          data={
            this.props.countries.filter(
              (country) => country.id === match.params.id
            )[0]
          }
        />
      );
    };
    return (
      <ThemeProvider theme={themes[this.props.theme.current]}>
        <NavBar theme={this.props.theme.current} changeTheme={this.props.changeTheme} />
        <Switch>
          <Route
            path="/home"
            exact
            component={() => <AllCountries countries={this.props.countries} />}
          />
          <Route path="/countries/:id" exact component={CountryWithID} />
          <Redirect to="/" />
        </Switch>
      </ThemeProvider>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
