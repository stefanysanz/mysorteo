import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import myCampaigns from './pages/myCampaigns';
import myEntries from './pages/myEntries';
import signIn from './pages/signin/signin.js'
import signUp from './pages/signup/signup.js'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Profile} />
          <Route path='/myCampaigns' component={myCampaigns} />
          <Route path='/myEntries' component={myEntries} />
          <Route path='/signIn' component={signIn} />
          <Route path='/signUp' components={signUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;