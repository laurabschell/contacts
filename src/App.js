import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import ContactsList from './components/ContactsList';
import Favorites from './components/Favorites';
import GlobalStyle from './components/GlobalStyle';
import Navbar from './components/Navbar';
import Overview from './components/Overview';
 
function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
            <Route path="/">
              <Overview />
            </Route>
            <Route path="/favorites">
              <Favorites />
            </Route>
            <Route path="/contacts-list">
              <ContactsList />
            </Route>
        </Switch>
      </div>
      <GlobalStyle />
    </Router>
  );
}

export default App;