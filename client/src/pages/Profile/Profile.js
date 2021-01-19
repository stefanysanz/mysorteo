import React, { } from "react";
import {
  Container,
  Card,
  CardBody,
  CardImg,
  Row,
  Col,
  Button
} from "reactstrap"



const Profile = () => {
  return (
    <Container>
      <Row>
        <h1 className="verUser">My Profile</h1>
      </Row>

      <Row>
        <Col sm={3}>
          <Card id="profile pic">
            <CardBody>
              <CardImg className="profilepic"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt="profile pic"
              />
              <br></br>
              <Button color="secondary" className="uploadBtn">
                Upload Profile Picture
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <br></br>
      <br></br>
      <Row>
        <Col md={3} className="verUser">
          First Name:
        </Col>
      </Row>
      <Row>
        <Col md={3} className="verUser">
          Last Name:
        </Col>
      </Row>
      <Row>
        <Col md={3} className="verUser">
          Email:
        </Col>
      </Row>
      <br></br>

      <Button color="info" className="editPasswordBtn">Edit Password</Button>
    </Container>
  );
}

export default Profile