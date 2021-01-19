import './signup.css'
import React from 'react'
import { Box, TextField, Button, Link } from '@material-ui/core'
import logo from '../../images/logo.svg'

const signUp = () => {
  return (
    <body>
      <Box id="signUpCard" color='primary'>
        <img alt="logo placeholder" id="logoSignIn" src={logo}></img>
        <Button id="xBtn" href="/" variant="outlined" color="primary">X</Button>
        <hr></hr>
        <TextField type="name" id="firstName" label="First Name" />
        <br></br>
        <br></br>
        <br></br>
        <TextField type="name" id="firstName" label="First Name" />
        <br></br>
        <br></br>
        <br></br>
        <TextField type="email" id="emailInput" label="Enter your email" />
        <br></br>
        <br></br>
        <br></br>
        <TextField id="passwordHash" label="Enter Password" type="password" autoComplete="current-password" />
        <br></br>
        <br></br>
        <br></br>
        <TextField id="passwordHash" label="Verify Password" type="password" autoComplete="current-password" />
        <br></br>
        <br></br>
        <br></br>
        <Link href="signIn">Already have an account?</Link>
        <br></br>
        <br></br>
        <br></br>
        <Button variant='contained' color='primary'>
          Submit
        </Button>
      </Box>
    </body>
  )
}

export default signUp;