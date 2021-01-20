import React, {Component} from 'react';

class LandingMenuBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true,
        }
    }

    render() {
        const handleClick = (e) => {
            this.props.showPage(this.props.label.toLowerCase());
        }

        return (
            <div className="landing-menu-btn" onClick={handleClick}>{this.props.label}</div>
        );
    }
}

export default LandingMenuBtn;