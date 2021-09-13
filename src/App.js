import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ContactsList from "./pages/ContactsList";
import Favorites from "./pages/Favorites";
import Overview from "./pages/Overview";
import Layout from "./components/Layout";
import useGetUsers from "./hooks/useGetUsers";

const App = () => {
  useGetUsers();
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Overview} />
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/contacts-list" component={ContactsList} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
