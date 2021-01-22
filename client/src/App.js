import React, {Component} from 'react';
import './App.css';
import './fonts.css';
import './ui.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Landing from './components/Landing';


class App extends Component {
  constructor(props) {
    super(props);
    this.signUp = React.createRef();
    this.signIn = React.createRef();
    this.about = React.createRef();
    this.dashboard = React.createRef();
    this.landing = React.createRef();
  }

  render() {

    const showSignUp = () => {
      this.signUp.current.show();
    }

    const showSignIn = () => {
      this.signIn.current.show();
    }

    const showAbout = () => {
      this.signUp.current.hide();
      this.signIn.current.hide();
      this.about.current.show();
      this.dashboard.current.hide();
      this.landing.current.hide();
    }

    const showDashboard = () => {
      this.signUp.current.hide();
      this.signIn.current.hide();
      this.about.current.hide();
      this.dashboard.current.show();
      this.landing.current.hide();
    }

    const showLanding = () => {
      this.signUp.current.hide();
      this.signIn.current.hide();
      this.about.current.hide();
      this.dashboard.current.hide();
      this.landing.current.show();
    }

    return (
      <div className="App">
        <SignUp ref={this.signUp} showDashboard={showDashboard} />
        <SignIn ref={this.signIn} showDashboard={showDashboard} />
        <About ref={this.about} showLanding={showLanding} />
        <Landing ref={this.landing} showAbout={showAbout} showSignIn={showSignIn} showSignUp={showSignUp} />
        <Dashboard ref={this.dashboard} showLanding={showLanding} />
      </div>
    );
  }
}

export default App;
