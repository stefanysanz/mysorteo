import React, {Component} from 'react';

class TxtBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true,
        }
    }

    render() {
        const classMod = "txt-btn " + this.props.classMod;

        const handleClick = (e) => {
            this.props.click(this.props.label.toLowerCase());
        }

        return (
            <div className={classMod} onClick={handleClick}>{this.props.label}</div>
        );
    }
}

export default TxtBtn;