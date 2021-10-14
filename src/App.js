import React, { useState, useEffect } from "react";
import store from "./data/stors";
import { Provider } from "react-redux";
import Routes from "./routes/Routes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/layout";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkColor, ClobalStyles } from "./components/themes.js";
const StyledApp = styled.div``;
function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.title = "Yousef Yasin";
    let themes = localStorage.getItem("theme");
    setTheme(themes);
  }, []);
  const themeChange = () => {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkColor}>
          <ClobalStyles />
          <StyledApp>
            <Layout setTheme={themeChange} />
            <Switch>
              <Route component={Routes} />
            </Switch>
          </StyledApp>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}

export default App;
