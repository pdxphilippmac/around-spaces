import React from "react";

import Header from "./components/Header";

import styled, { ThemeProvider } from "styled-components";
// import { GlobalStyle } from "./components/GlobalStyle.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";

const StyledApp = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #275950;
`;
const theme = {
  main: "yellow"
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <Header theme={theme} />

        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/about/" component={New} />
        </Router>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
