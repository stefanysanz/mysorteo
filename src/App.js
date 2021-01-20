import React, {Component} from 'react';
import './App.css';
import './fonts.css';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';

class App extends Component {
  constructor(props) {
    super(props);
    this.landing = React.createRef();
    this.dashboard = React.createRef();
    this.state = {
        active: true,
    }
  }

  render() {

    const showDashboard = () => {
      this.landing.current.hide();
      this.dashboard.current.show();
    }

    return (
      <div className="App">
        <Landing ref={this.landing} showDashboard={showDashboard} />
        <Dashboard ref={this.dashboard} />
      </div>
    );
  }
}

export default App;
