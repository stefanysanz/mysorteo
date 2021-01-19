import React, {Component} from 'react';

class CampaignTileDetail extends Component {
    render() {
        return (
            <div className="campaign-tile-detail">
                <div className="campaign-tile-detail-title">{this.props.title}:</div>
                <div className="campaign-tile-detail-value">{this.props.value}</div>
            </div>
        );
    }
}

export default CampaignTileDetail;