import React, {Component} from 'react';
import profileIcon from '../assets/images/dashboard/profile.svg';
import entriesIcon from '../assets/images/dashboard/entries.svg';
import logoutIcon from '../assets/images/dashboard/logout.svg';
import myCampaignsIcon from '../assets/images/dashboard/my-campaigns.svg';
import logo from '../assets/images/dashboard/logo.svg'
import '../assets/css/dashboard.css';
import DashboardMenuBtn from './DashboardMenuBtn';
import MyCampaigns from './MyCampaigns';
import MyEntries from './MyEntries';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.myCampaigns = React.createRef();
        this.myEntries = React.createRef();
        this.state = {
            active: false,
            showHide: "dashboard-hide",
        }
    }

    show() {
        this.setState({
            showHide:"landing-show",
        });
    }

    render() {
        let currBtn = {
            name: "",
        }
        let currDashboard;

        const update = (newBtn) => {
            if (currBtn.name !== newBtn.name) {
                // Transition out the current btn
                if (currBtn.name !== "") {
                    currBtn.out();
                }

                // Hide the current dashboard
                if (currDashboard !== undefined) {
                    currDashboard.hide();
                }

                // Update the current btn
                currBtn = newBtn;
                
                // Show the new dashboard
                switch (newBtn.name) {
                    case "my-campaigns":
                        currDashboard = this.myCampaigns.current;
                        this.myCampaigns.current.show();
                        break;
                    case "my-entries":
                        currDashboard = this.myEntries.current;
                        this.myEntries.current.show()
                        break;
                    default:
                        console.log("invalid btn name");
                }
            }
        }

        return (
            <div className={this.state.showHide}>
                <div className="dashboard-menu">
                    <img className="dashboard-logo" src={logo} alt="logo"></img>
                    <DashboardMenuBtn name="profile" label="Profile" icon={profileIcon} updateDashboard={update}/>
                    <DashboardMenuBtn name="my-campaigns" label="My Campaigns" icon={myCampaignsIcon} updateDashboard={update}/>
                    <DashboardMenuBtn name="my-entries" label="My Entries" icon={entriesIcon} updateDashboard={update}/>
                    <DashboardMenuBtn name="logout" label="Log Out" icon={logoutIcon} updateDashboard={update}/>
                </div>
                <div className="dashboard-subcontainer">
                    <div className="dashboard-content">
                        <MyCampaigns ref={this.myCampaigns}/>
                        <MyEntries ref={this.myEntries}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;