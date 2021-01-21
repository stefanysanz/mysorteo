import React, {Component} from 'react';
import '../assets/css/landing.css';
import bg from '../assets/images/landing.jpg';
import logo from '../assets/images/dashboard/logo-white-blue.svg'
import TxtBtn from './TxtBtn';

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showHide: "landing-show",
        }
    }

    show = () => {
        this.setState({
            showHide:"landing-show",
        });
    }

    hide = () => {
        this.setState({
            showHide:"landing-hide",
        });
    }

    render() {
        const showPage = (btnLabel) => {
            switch (btnLabel) {
                case "about":
                    this.props.showAbout();
                    break;
                case "sign-up":
                    this.props.showSignUp();
                    break;
                case "sign-in":
                    this.props.showSignIn();
                    break;
                default:
            }
        }

        return (
            <div className={this.state.showHide}>
                <div className="landing-header">
                    <img className="landing-logo" src={logo} alt="sorteo" />
                    <div className="landing-menu">
                        <TxtBtn label="About" classMod="left ml20" click={showPage} />
                        <TxtBtn label="Sign-In" classMod="left ml20" click={showPage} />
                        <TxtBtn label="Sign-Up" classMod="left ml20" click={showPage} />
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