import React from 'react';
import Container from './components/Container';
import GlobalStyle from './components/GlobalStyle';
import Navbar from './components/Navbar';
 
function App() {
  return (
    <div className='App'>
      <Navbar />
      <Container />
      <GlobalStyle />
    </div>
  );
}

export default App;