import React, {Component} from 'react';
import axios from 'axios';
import tilePhoto from '../assets/images/f8_450x250.jpg'
import MyCampaignTile from './MyCampaignTile';

class MyCampaignsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            containerClass: "mycampaigns-list-hide",
            tiles: [],
        }
    }

    show = () => {
        this.setState({
            containerClass:"mycampaigns-list-show",
        });
        const tiles = [];
        axios.get('http://localhost:3001/api/users/123/campaigns')
        .then(res => {
            for (let i = 0; i < res.data.campaigns.length; i++) {
                const campaign = res.data.campaigns[i];
                tiles.push(<MyCampaignTile key={i} src={tilePhoto} title={campaign.title} daysLeft="0" id={campaign._id} startDate={campaign.startDate} endDate={campaign.endDate}/>)
            }
            this.setState({
                tiles: tiles,
            });
        })
    }

    hide = () => {
        this.setState({
            containerClass:"mycampaigns-list-hide",
        });
    }

    componentDidMount() {
        const tiles = [];
        axios.get('http://localhost:3001/api/users/123/campaigns')
        .then(res => {
            for (let i = 0; i < res.data.campaigns.length; i++) {
                const campaign = res.data.campaigns[i];
                tiles.push(<MyCampaignTile key={i} src={tilePhoto} title={campaign.title} daysLeft="0" id={campaign._id} startDate={campaign.startDate} endDate={campaign.endDate}/>)
            }
            this.setState({
                tiles: tiles,
            });
        })
    }

    render() {
        return (
            <div className={this.state.containerClass}>
                <div className="mycampaigns-list-tiles">
                    {this.state.tiles}
                </div>
            </div>
        );
    }
}

export default MyCampaignsList;