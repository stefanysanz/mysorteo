import React, {Component} from 'react';
import tilePhoto from '../assets/images/f8_450x250.jpg'
import '../assets/css/campaigns.css';
import MyCampaignTile from './MyCampaignTile';
import CampaignTileBtn from './CampaignTileBtn';

class MyCampaigns extends Component {
    constructor(props) {
        super(props);
        this.state = {
            containerClass: "campaigns hide",
        }
    }

    show = () => {
        this.setState({
            containerClass:"campaigns show",
        });
    }

    hide = () => {
        this.setState({
            containerClass:"campaigns hide",
        });
    }

    render() {
        return (
            <div className={this.state.containerClass}>
                <div className="campaigns-header">
                    <div className="campaigns-breadcrumbs">My Campaigns</div>
                    <CampaignTileBtn label="Create" pos="right"/>   
                </div>
                <div className="campaigns-divider"></div>
                <div className="campaign-tiles-container">
                    <div className="campaign-tiles">
                        <MyCampaignTile src={tilePhoto} title="Win a Ferrari F8" daysLeft="0" id="c53e22b5-79a0-4459-b752-4d3c8cb81734" startDate="1.1.2021" endDate="1.2.2021"/>
                        <MyCampaignTile src={tilePhoto} title="Win a Ferrari F8" daysLeft="0" id="c53e22b5-79a0-4459-b752-4d3c8cb81734" startDate="1.1.2021" endDate="1.2.2021"/>
                        <MyCampaignTile src={tilePhoto} title="Win a Ferrari F8" daysLeft="0" id="c53e22b5-79a0-4459-b752-4d3c8cb81734" startDate="1.1.2021" endDate="1.2.2021"/>  
                        <MyCampaignTile src={tilePhoto} title="Win a Ferrari F8" daysLeft="0" id="c53e22b5-79a0-4459-b752-4d3c8cb81734" startDate="1.1.2021" endDate="1.2.2021"/>
                        <MyCampaignTile src={tilePhoto} title="Win a Ferrari F8" daysLeft="0" id="c53e22b5-79a0-4459-b752-4d3c8cb81734" startDate="1.1.2021" endDate="1.2.2021"/>
                        <MyCampaignTile src={tilePhoto} title="Win a Ferrari F8" daysLeft="0" id="c53e22b5-79a0-4459-b752-4d3c8cb81734" startDate="1.1.2021" endDate="1.2.2021"/>    
                    </div>
                </div>
            </div>
        );
    }
}

export default MyCampaigns;