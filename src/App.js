import React from "react";

import Header from "./components/Header";

import styled from "styled-components";
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

function App() {
  return (
    <StyledApp>
      <Header />
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={New} />
      </Router>
    </StyledApp>
  );
}

export default App;
