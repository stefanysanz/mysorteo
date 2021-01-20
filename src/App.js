import React, {Component} from 'react';
import './App.css';
import './fonts.css';
import SignIn from './components/SignIn'
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';

class App extends Component {
  constructor(props) {
    super(props);
    this.signIn = React.createRef();
    this.landing = React.createRef();
    this.dashboard = React.createRef();
    this.state = {
        active: true,
    }
  }

  render() {

    const showSignIn = () => {
      this.signIn.current.show();
    }

    const showDashboard = () => {
      this.signIn.current.hide();
      this.landing.current.hide();
      this.dashboard.current.show();
    }

    return (
      <div className="App">
        <SignIn ref={this.signIn} showDashboard={showDashboard} />
        <Landing ref={this.landing} showSignIn={showSignIn} />
        <Dashboard ref={this.dashboard} />
      </div>
    );
  }
}

export default App;
