import React, {Component} from 'react';
import axios from 'axios';

class MyCampaignsCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showHide: "mycampaigns-list-hide",
            title: "",
            startDate: "",
            endDate: "",
            description: "",
        }
    }

    show = () => {
        this.setState({
            showHide:"mycampaigns-list-show",
        });
    }

    hide = () => {
        this.setState({
            showHide:"mycampaigns-list-hide",
        });
    }

    render() {

        const updateTitle = (e) => {
            this.setState({
                title: e.target.value,
            });
        }

        const updateStartDate = (e) => {
            this.setState({
                startDate: e.target.value,
            });
        }

        const updateEndDate = (e) => {
            this.setState({
                endDate: e.target.value,
            });
        }

        const updateDescription = (e) => {
            this.setState({
                description: e.target.value,
            });
        }

        const createCampaign = (e) => {
            // Validate form

            // Create campaign record
            axios.post('http://localhost:3001/api/users/123/campaigns', {
                title: this.state.title,
                startDate: this.state.startDate,
                endDate: this.state.endDate,
                description: this.state.description,
            })
                .then(function (res) {
                console.log(res);
            })

            // Reset form
            resetForm()
        }

        const resetForm = () => {
            let title = document.getElementById("create-campaign-title");
            title.value = "";
            let startDate = document.getElementById("create-campaign-start-date");
            startDate.value = "";
            let endDate = document.getElementById("create-campaign-end-date");
            endDate.value = "";
            let description = document.getElementById("create-campaign-description");
            description.value = "";
        }

        return (
            <div className={this.state.showHide}>
                <div className="mycampaigns-create-form">
                    <input id="create-campaign-title" className="mycampaigns-create-form-input" type="text" placeholder="Win a..." onChange={updateTitle} />
                    <input id="create-campaign-start-date" className="mycampaigns-create-form-input" type="text" placeholder="Start Date (MM-DD-YYYY)" onChange={updateStartDate} />
                    <input id="create-campaign-end-date" className="mycampaigns-create-form-input" type="text" placeholder="End Date (MM-DD-YYYY)" onChange={updateEndDate} />
                    <textarea id="create-campaign-description" className="mycampaigns-create-form-textarea" placeholder="Description" onChange={updateDescription}></textarea>
                    <div className="mycampaigns-create-form-create-btn" onClick={createCampaign}>Create</div>
                </div>
            </div>
        );
    }
}

export default MyCampaignsCreate;