import React, {Component} from 'react';
import logo from '../images/dashboard/'
import TxtBtn from './TxtBtn';
import MyCampaigns from './MyCampaigns';
import MyEntries from './MyEntries';
import '../assets/css/dashboard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.myCampaigns = React.createRef();
        this.myEntries = React.createRef();
        this.state = {
            showHide: "dashboard-hide",
        }
    }

    show = () => {
        this.setState({
            showHide:"dashboard-show",
        });
    }

    hide = () => {
        this.setState({
            showHide:"dashboard-hide",
        });
    }

    render() {

        let currDashboard;

        const showDashboard = (btnLabel) => {
            if (currDashboard !== undefined) {
                currDashboard.current.hide();
            }
            switch (btnLabel) {
                case "my campaigns":
                    currDashboard = this.myCampaigns;
                    currDashboard.current.show();
                    break;
                case "my entries":
                    currDashboard = this.myEntries;
                    currDashboard.current.show();
                    break;
                case "log-out":
                    this.props.showLanding();
                    break;
                default:
            }
        }

        return (
            <div className={this.state.showHide}>
                <div className="dashboard-header">
                    <div className="left">
                        <img className="dashboard-logo" src={logo} alt="sorteo" />
                        <TxtBtn label="My Campaigns" classMod="left ml20" click={showDashboard} />
                        <TxtBtn label="My Entries" classMod="left ml20" click={showDashboard} />
                    </div>
                    <div className="right">
                        <TxtBtn label="Log-Out" classMod="left ml20" click={showDashboard} />
                        <div className="dashboard-profile-btn">
                            <div className="dashboard-profile-btn-initials">P</div>
                        </div>
                    </div>
                </div>
                <div className="dashboard-content">
                    <MyCampaigns ref={this.myCampaigns} />
                    <MyEntries ref={this.myEntries} />
                </div>
            </div>
        );
    }
}

export default Dashboard;