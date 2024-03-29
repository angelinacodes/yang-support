import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import NavBar from "./components/menu/menu.js";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import NavBar from "components/menu/menu.js";
import InteractiveContainer from "components/interactive/interactive-container.js";

import UbiVatCalculator from "components/ubi-vat-calculator/ubi-vat-calculator.js";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#133467",
      main: "#133467",
      dark: "#133467",
      contrastText: "#FFFFFF"
    },
    secondary: {
      light: "#DA3248",
      main: "#DA3248",
      dark: "#DA3248",
      contrastText: "#FFFFFF"
    },
    // error: {
    //   light: palette.error[300],
    //   main: palette.error[500],
    //   dark: palette.error[700],
    //   contrastText: getContrastText(palette.error[500])
    // },
    textColor: "#13294B",
    // primary1Color: Colors.white,
    // primary2Color: Colors.indigo700,
    // accent1Color: Colors.redA200,
    // pickerHeaderColor: Colors.darkBlack,
    alternateTextColor: "#133467"
  }
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />

        <Switch>
          <Route exact path="/">
            <StubComponent />
          </Route>
          <Route path="/interactive">
            <InteractiveContainer />
          </Route>
          <Route path="/policies">
            <StubComponent />
          </Route>

          <Route path="/ubi-vat-calculator">
            <UbiVatCalculator />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

const StubComponent = () => {
  return <div></div>;
};
