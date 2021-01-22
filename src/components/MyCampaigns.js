import React, {Component} from 'react';
import MyCampaignsCreate from './MyCampaignsCreate';
import MyCampaignsList from './MyCampaignsList';
import DashboardMenuBtn from './DashboardMenuBtn';
import createIcon from '../assets/images/dashboard/create.svg';
import allIcon from '../assets/images/dashboard/all.svg';
import '../assets/css/campaigns.css';

class MyCampaigns extends Component {
    constructor(props) {
        super(props);
        this.myCampaignsCreate = React.createRef();
        this.myCampaignsList = React.createRef();
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
        let currBtn = {
            label: "",
        }

        let currDashboard;

        const updateDashboard = (btn) => {
            // Reset the current btn
            if (currBtn.label !== "") {
                currBtn.reset();
            }

            // Hide the current dashboard
            if (currDashboard !== undefined) {
                currDashboard.current.hide();
            }

            // Update the dashboard
            switch (btn.label) {
                case "create":
                    currDashboard = this.myCampaignsCreate;
                    break;
                case "view all":
                    currDashboard = this.myCampaignsList;
                    break;
                default:
            }
            currDashboard.current.show();

            currBtn = btn;
        }

        return (
            <div className={this.state.containerClass}>
                <div className="campaigns-menu">
                    <div className="campaigns-menu-btns">
                        <DashboardMenuBtn icon={createIcon} label="Create" updateDashboard={updateDashboard} />
                        <DashboardMenuBtn icon={allIcon} label="View All" updateDashboard={updateDashboard} />
                    </div>
                </div>
                <div className="campaigns-content">
                    <MyCampaignsCreate ref={this.myCampaignsCreate} />
                    <MyCampaignsList ref={this.myCampaignsList} />
                </div>
            </div>
        );
    }
}

export default MyCampaigns;