import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import Home from "../containers/Home";
import PageError from "../components/PageError";
import Layout from "../components/Layout";
import Player from "../components/Player";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/player/:id" component={Player}></Route>
          <Route component={PageError}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
