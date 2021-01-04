import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home/HomeRoute';
import Navbar from './components/Navbar';
import styled from 'styled-components';

const GlobalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainWrapper = styled.div`
  flex: 1;
`;

function App() {
  return (
    <Router>
      <GlobalWrapper>
        <Navbar />
        <MainWrapper>
          <Switch>
            <Route path='/' exact component={Home} />
          </Switch>
        </MainWrapper>
        <Footer />
      </GlobalWrapper>
    </Router>
  );
}

export default App;
