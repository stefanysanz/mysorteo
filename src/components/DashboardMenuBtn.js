import React, {Component} from 'react';

class DashboardMenuBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            btnClass: "dashboard-menuBtn",
        }
    }

    render() {

        const handleOver = (e) => {
            if (!this.state.active) {
                this.setState({
                    btnClass:"dashboard-menuBtn dashboard-menuBtn-over",
                });
            }
        }
    
        const handleOut = (e) => {
            if (!this.state.active) {
                out();
            }
        }

        const handleClick = (e) => {
            if (!this.state.active) {
                this.setState({
                    active: true,
                    btnClass:"dashboard-menuBtn dashboard-menuBtn-click",
                });
                this.props.updateDashboard({
                    name: this.props.name,
                    out: out,
                });
            }
        }

        const out = () => {
            this.setState({
                active: false,
                btnClass:"dashboard-menuBtn dashboard-menuBtn-out",
            });
        }

        return (
            <div className={this.state.btnClass} onClick={handleClick} onMouseOver={handleOver} onMouseOut={handleOut}>
                <img className="dashboard-menuBtn-icon"src={this.props.icon} alt={this.props.label}></img>
                <div className="dashboard-menuBtn-label">{this.props.label}</div>
            </div>
        );
    }
}

export default DashboardMenuBtn;