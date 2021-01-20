import React, {Component} from 'react';
import '../assets/css/sign-in.css';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showHide: "sign-in-hide",
        }
    }

    show() {
        this.setState({
            showHide:"sign-in-show",
        });
    }

    render() {

        const hide = (e) => {
            this.setState({
                showHide:"sign-in-hide",
            });
        }

        const signIn = (e) => {
            this.setState({
                showHide:"sign-in-hide",
            });
            this.props.showDashboard();
        }

        return (
            <div className={this.state.showHide}>
                <div className="sign-in-container">
                    <img className="sign-in-logo" src={this.props.logo} alt="sorteo" />
                    <div className="sign-in-inputs">
                        <input className="sign-in-input" placeholder="email" type="text" />
                        <div className="sign-in-input-spacer"></div>
                        <input className="sign-in-input" placeholder="password" type="password" />
                    </div>
                    <div className="sign-in-submit-btn" onClick={signIn}>Sign-In</div>
                </div>
                <div className="sign-in-exit-btn" onClick={hide}></div>
            </div>
        );
    }
}

export default SignIn;