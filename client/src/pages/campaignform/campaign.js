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
                <MenuItem id='instaTag' onClick={popupState.close}>Instagram</MenuItem>
                <MenuItem id='youtubeTag' onClick={popupState.close}>YouTube</MenuItem>
                <MenuItem id='twitterTag' onClick={popupState.close}>Twitter</MenuItem>
                <MenuItem id='twitchTag' onClick={popupState.close}>Twitch</MenuItem>
                <MenuItem id='facebookTag' onClick={popupState.close}>Facebook</MenuItem>
                <MenuItem id='facebookTag' onClick={popupState.close}>Snapchat</MenuItem>
                <MenuItem id='otherTag' onClick={popupState.close}>Other</MenuItem>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
        <br></br>
        <br></br>
        <TextField label="Handle..." id="campaignHandle" />
        <br></br>
        <br></br>
        <Button variant="outlined" color="primary" id="campaignSubmit">Submit</Button>

      </div>
    </>)




}

export default campaignForm;