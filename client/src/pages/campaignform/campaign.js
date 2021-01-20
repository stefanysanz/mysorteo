import { TextField, Button, Menu, MenuItem } from '@material-ui/core'
import React from 'react';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import './campaign.css'


function campaignForm() {
  return (
    <>
      
      <div id="campaignWrap">
        <h1>Campaign Form</h1>
        <br></br>
        <TextField label="Win a..." id="campaignTitle" />
        <br></br>
        <br></br>
        <TextField label="Description..." id="campaignDescription" />
        <br></br>
        <br></br>
        <TextField label="Start Date..." id="campaignStart" />
        <br></br>
        <br></br>
        <TextField label="End Date..." id="campaignEnd" />
        <br></br>
        <br></br>
        <br></br>
        <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
            <React.Fragment>
              <Button variant='outlined' id='campaignPlatform' color='primary' {...bindTrigger(popupState)}>
                Platform
      </Button>
              <Menu {...bindMenu(popupState)}>
                <MenuItem onClick={popupState.close}>Instagram</MenuItem>
                <MenuItem onClick={popupState.close}>YouTube</MenuItem>
                <MenuItem onClick={popupState.close}>Twitter</MenuItem>
                <MenuItem onClick={popupState.close}>Twitch</MenuItem>
                <MenuItem onClick={popupState.close}>Facebook</MenuItem>
                <MenuItem onClick={popupState.close}>Other</MenuItem>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
        <br></br>
        <br></br>
        <TextField label="Handle..." value="@" id="campaignHandle" />
        <br></br>
        <br></br>
        <Button variant="outlined" color="primary" id="campaignSubmit">Submit</Button>
        
      </div>
    </>)




}

export default campaignForm;