import React, {Component} from 'react';
import tilePhoto from '../assets/images/f8_450x250.jpg'
import MyCampaignTile from './MyCampaignTile';

class MyCampaignsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            containerClass: "mycampaigns-list",
        }
    }

    show = () => {
        
    }

    hide = () => {
        
    }

    render() {
        return (
            <div className={this.state.containerClass}>
                <div className="mycampaigns-list-tiles">
                    <MyCampaignTile src={tilePhoto} title="Win a Ferrari F8" daysLeft="0" id="c53e22b5-79a0-4459-b752-4d3c8cb81734" startDate="1.1.2021" endDate="1.2.2021"/>
                    <MyCampaignTile src={tilePhoto} title="Win a Ferrari F8" daysLeft="0" id="c53e22b5-79a0-4459-b752-4d3c8cb81734" startDate="1.1.2021" endDate="1.2.2021"/>
                    <MyCampaignTile src={tilePhoto} title="Win a Ferrari F8" daysLeft="0" id="c53e22b5-79a0-4459-b752-4d3c8cb81734" startDate="1.1.2021" endDate="1.2.2021"/>  
                    <MyCampaignTile src={tilePhoto} title="Win a Ferrari F8" daysLeft="0" id="c53e22b5-79a0-4459-b752-4d3c8cb81734" startDate="1.1.2021" endDate="1.2.2021"/>
                    <MyCampaignTile src={tilePhoto} title="Win a Ferrari F8" daysLeft="0" id="c53e22b5-79a0-4459-b752-4d3c8cb81734" startDate="1.1.2021" endDate="1.2.2021"/>
                    <MyCampaignTile src={tilePhoto} title="Win a Ferrari F8" daysLeft="0" id="c53e22b5-79a0-4459-b752-4d3c8cb81734" startDate="1.1.2021" endDate="1.2.2021"/>
                </div>
            </div>
        );
    }
}

export default MyCampaignsList;