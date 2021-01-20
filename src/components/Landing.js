import React, {Component} from 'react';
import '../assets/css/landing.css';
import '../assets/css/sign-in.css';
import bg from '../assets/images/landing.jpg';
import logo from '../assets/images/dashboard/logo.svg'
import LandingMenuBtn from './LandingMenuBtn';
import SignIn from './SignIn';

class Landing extends Component {
    constructor(props) {
        super(props);
        this.signIn = React.createRef();
        this.state = {
            active: true,
            showHide: "landing-show",
        }
    }

    hide() {
        this.setState({
            showHide:"landing-hide",
        });
    }

    render() {
        const showPage = (page) => {
            switch (page) {
                case "sign-in":
                    this.signIn.current.show();
                    break;
                default:
            }
        }

        return (
            <div className={this.state.showHide}>
                <SignIn ref={this.signIn} logo={logo} showDashboard={this.props.showDashboard} />
                <div className="landing-header">
                    <img className="landing-logo" src={logo} alt="sorteo" />
                    <div className="landing-menu">
                        <LandingMenuBtn label="About" showPage={showPage} />
                        <LandingMenuBtn label="How-It-Works" showPage={showPage} />
                        <LandingMenuBtn label="Sign-In" showPage={showPage} />
                    </div>
                </div>
                <div className="landing-copy">
                    <div className="landing-copy-container">
                        <div>
                            <div className="landing-copy-header">LAUNCH</div>
                            <div>Campaigns that transform brands,</div>
                            <div>move causes to the forefront</div>
                            <div>and give rise to a</div>
                            <div>following</div>
                        </div>
                    </div>
                </div>
                <div className="landing-background">
                    <div className="landing-background-overlay"></div>
                    <img src={bg} alt="background" />
                </div>
            </div>
        );
    }
}

export default Landing;