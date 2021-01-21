import React, {Component} from 'react';
import CampaignTileDetail from './CampaignTileDetail';
import TxtBtn from './TxtBtn';

class MyCampaignTile extends Component {
    render() {
        return (
            <div className="campaign-tile">
                <div className="campaign-tile-container">
                    <div className="campaign-tile-days-left">{this.props.daysLeft} days left!</div>
                    <img src={this.props.src} alt="f8"></img>
                    <div className="campaign-tile-subcontainer">
                        <div className="campaign-tile-title">{this.props.title}</div>
                        <div className="campaign-tile-details">
                            <CampaignTileDetail title="ID" value={this.props.id}/>
                            <CampaignTileDetail title="Start Date" value={this.props.startDate}/>
                            <CampaignTileDetail title="End Date" value={this.props.endDate}/>
                            <CampaignTileDetail title="Winner" value="John Smith"/>
                        </div>
                        <div className="campaign-tile-btns">
                            <TxtBtn label="Edit" classMod="left" />
                            <TxtBtn label="View" classMod="right" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyCampaignTile;