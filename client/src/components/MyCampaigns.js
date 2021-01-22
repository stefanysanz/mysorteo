import React, {Component} from 'react';
import MyCampaignsList from './MyCampaignsList';
import '../assets/css/campaigns.css';

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
                <div className="campaigns-menu">

                </div>
                <div className="campaigns-content">
                    <MyCampaignsList />
                </div>
            </div>
        );
    }
}

export default MyCampaigns;