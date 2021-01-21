import React, {Component} from 'react';
import '../assets/css/sign-in.css';
import axios from 'axios';
import logo from '../assets/images/dashboard/logo-white-blue.svg'

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showHide: "sign-in-hide",
        }
    }

    show = () => {
        this.setState({
            showHide:"sign-in-show",
        });
    }

    hide = (e) => {
        this.setState({
            showHide:"sign-in-hide",
        });
    }

    render() {

        const signUp = (e) => {
            // Validate input

            // Verify email and password
            axios.post('http://localhost:8000/api/sign-in', {
                email: "a@abc.com",
                password: "123",
            })
                .then(function (res) {
                console.log(res);
            })

            // Handle success
            // Hide sign-in
            this.setState({
                showHide:"sign-in-hide",
            });

            // Show dashboard
            this.props.showDashboard();
        }

        return (
            <div className={this.state.showHide}>
                <div className="sign-up-container">
                    <img className="sign-in-logo" src={logo} alt="sorteo" />
                    <div className="sign-in-inputs">
                        <input className="sign-in-input" placeholder="display name" type="text" />
                        <div className="sign-in-input-spacer"></div>
                        <input className="sign-in-input" placeholder="email" type="text" />
                        <div className="sign-in-input-spacer"></div>
                        <input className="sign-in-input" placeholder="password" type="password" />
                        <div className="sign-in-input-spacer"></div>
                        <input className="sign-in-input" placeholder="verify password" type="password" />
                    </div>
                    <div className="sign-in-btn" onClick={signUp}>Sign-Up</div>
                </div>
                <div className="sign-in-exit-btn" onClick={this.hide}></div>
            </div>
        );
    }
}

export default SignUp;