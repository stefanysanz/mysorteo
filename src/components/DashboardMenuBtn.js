import React, {Component} from 'react';

class DashboardMenuBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true,
            overOut: "dashboard-menu-btn-out",
        }
    }

    render() {

        const handleOver = (e) => {
            if (this.state.active) {
                this.setState({
                    overOut:"dashboard-menu-btn-over",
                });
            }
        }
    
        const handleOut = (e) => {
            if (this.state.active) {
                this.setState({
                    overOut:"dashboard-menu-btn-out",
                });
            }
        }

        const handleClick = (e) => {
            if (this.state.active) {
                this.setState({
                    active: false,
                    overOut:"dashboard-menu-btn-over",
                });
                this.props.updateDashboard({
                    label: this.props.label.toLowerCase(),
                    reset: reset,
                });
            }
        }

        const reset = () => {
            this.setState({
                active: true,
                overOut:"dashboard-menu-btn-out",
            });
        }

        return (
            <div className={this.state.overOut} onClick={handleClick} onMouseEnter={handleOver} onMouseLeave={handleOut}>
                <img className="dashboard-menu-btn-icon"src={this.props.icon} alt={this.props.label}></img>
                <div className="dashboard-menu-btn-label">{this.props.label}</div>
            </div>
        );
    }
}

export default DashboardMenuBtn;