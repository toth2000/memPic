import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import Auth from "./components/auth/Auth";

const App = () => {

  return (
    <BrowserRouter>
    <Container maxWidth="lg">
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact component={Auth} />
        </Switch>
    </Container>
    </BrowserRouter>
  );
};

export default App;
