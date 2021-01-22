import React, {Component} from 'react';
import '../assets/css/about.css';
import TxtBtn from './TxtBtn';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showHide: "about-hide",
        }
    }

    show = () => {
        this.setState({
            showHide:"about-show",
        });
    }

    hide = () => {
        this.setState({
            showHide:"about-hide",
        });
    }

    render() {

        return (
            <div className={this.state.showHide}>
                <div className="about-header">
                    <div className="about-menu">
                        <TxtBtn label="EXIT" click={this.props.showLanding} />
                    </div>
                </div>
                <div className="about-copy">
                    <div className="about-copy-container">
                        <div>
                            <div className="about-copy-header">ABOUT</div>
                            <div>Sor<span className="sorteo-blue">teo</span> provides a platform for companies, charitable foundations</div>
                            <div>and individuals to grow a following via transparent,</div>
                            <div>easy-to-manage giveaways.</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;