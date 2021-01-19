import React, {Component} from 'react';

class CampaignTileBtn extends Component {
    constructor(props) {
        super(props);
        this.btnClass = "campaign-tile-btn " + this.props.pos;
    }

    render() {
        return (
            <div className={this.btnClass}>{this.props.label}</div>
        );
    }
}

export default CampaignTileBtn;