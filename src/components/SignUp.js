import React, {Component} from 'react';
import '../assets/css/sign-in.css';
import axios from 'axios';
import logo from '../assets/images/dashboard/logo-white-blue.svg'

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showHide: "sign-in-hide",
            displayName: "",
            email: "",
            password: "",
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

            // Check if user exists

            // Create user
            axios.post('http://localhost:3001/api/users', {
                displayName: this.state.displayName,
                email: this.state.email,
                password: this.state.password,
            })
            .then((res) => {
                console.log(res);
                showDashboard()
            })
            .catch((res) => {
                console.log(res)
            })
        }

        const showDashboard = () => {
            // Hide sign-in
            this.setState({
                showHide:"sign-in-hide",
            });

            // Show dashboard
            this.props.showDashboard();
        }

        const updateDisplayName = (e) => {
            this.setState({
                displayName: e.target.value,
            });
        }

        const updateEmail = (e) => {
            this.setState({
                email: e.target.value,
            });
        }
        const updatePassword = (e) => {
            this.setState({
                password: e.target.value,
            });
        }

        return (
            <div className={this.state.showHide}>
                <div className="sign-up-container">
                    <img className="sign-in-logo" src={logo} alt="sorteo" />
                    <div className="sign-in-inputs">
                        <input className="sign-in-input" placeholder="display name" type="text" onChange={updateDisplayName} />
                        <div className="sign-in-input-spacer"></div>
                        <input className="sign-in-input" placeholder="email" type="text" onChange={updateEmail} />
                        <div className="sign-in-input-spacer"></div>
                        <input className="sign-in-input" placeholder="password" type="password" onChange={updatePassword} />
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