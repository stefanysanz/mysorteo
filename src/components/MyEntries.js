import React, {Component} from 'react';
import MyEntiresList from './MyEntriesList';
import DashboardMenuBtn from './DashboardMenuBtn';
import allIcon from '../assets/images/dashboard/all.svg';
import '../assets/css/campaigns.css';

class MyEntries extends Component {
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
        let currBtn = {
            label: "",
        }

        const updateDashboard = (btn) => {
            // Reset the current btn
            if (currBtn.label !== "") {
                currBtn.reset();
            }

            // Update the dashboard
            switch (btn.label) {
                case "view all":
                    break;
                default:
            }

            currBtn = btn;
        }

        return (
            <div className={this.state.containerClass}>
                <div className="campaigns-menu">
                    <div className="campaigns-menu-btns">
                            <DashboardMenuBtn icon={allIcon} label="View All" updateDashboard={updateDashboard} />
                        </div>
                    </div>
                <div className="campaigns-content">
                    <MyEntiresList />
                </div>
            </div>
        );
    }
}

export default MyEntries;