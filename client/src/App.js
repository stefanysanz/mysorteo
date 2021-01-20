import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from './pages/Profile/Profile';
import myCampaigns from './pages/myCampaigns';
import myEntries from './pages/myEntries';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Profile} />
          <Route path='/myCampaigns' component={myCampaigns} />
          <Route path='/myEntries' component={myEntries} />
        </Switch>
      </Router>
    </>
  );
}

export default App;