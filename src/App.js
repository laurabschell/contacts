import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import ContactsList from './components/ContactsList';
import Favorites from './components/Favorites';
// import Body from './components/Body';
import GlobalStyle from './components/GlobalStyle';
import Navbar from './components/Navbar';
import Overview from './components/Overview';
 
function App() {
  return (
    <div className='App'>

      <Router>
      <Navbar />
        <Switch>
          <Route path="/" component={Overview} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/contacts-list" component={ContactsList} />
        </Switch>
      </Router>

      <GlobalStyle />
    </div>
  );
}

export default App;