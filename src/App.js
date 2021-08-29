import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import ContactsList from './pages/ContactsList';
import Favorites from './pages/Favorites';
import GlobalStyle from './styles/GlobalStyle';
import Navbar from './components/Navbar';
import Overview from './pages/Overview';
 
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