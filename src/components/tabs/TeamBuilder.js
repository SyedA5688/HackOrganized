import React from 'react';
import { Container, Card, Row, Col, Form, Button } from 'react-bootstrap';
import * as firebase from 'firebase';

export default class TeamBuilder extends React.Component 
{
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      data: {},
      teammates: {},
      userName: "",
      enteredEmail: "",
    }
  }

  componentDidMount() {
    this._isMounted = true;
    if (firebase.auth().currentUser != null) {
      let userID = firebase.auth().currentUser.uid;
      const databaseRef = firebase.database().ref();
      databaseRef.on('value', snapshot => {
        if (snapshot.exists() && this._isMounted) {
          this.setState({ data: snapshot.val() });
          this.setState({ teammates: this.state.data.users.teammates });
          //this.setState({ userName: this.state.data[userID].name })
        }
      })
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Look up user with this email, add to team members list
    firebase.database().ref("users").once('value', snapshot => {
      let userObj = snapshot.val();
      let keys = Object.keys(userObj); // Array of user ids
      keys.forEach(key => {
        //console.log(userObj);
        if (userObj.key.email === this.state.enteredEmail && userObj.key.roomNumber !=  null) {
          this.addUserToTeam(key, userObj.key.roomNumber);
        }
      })
    })
  }

  addUserToTeam = (userID, roomNum) => {
    // Add user to room of project group
    let currentUser = firebase.auth().currentUser.uid;
    firebase.database().ref("users" + currentUser + "/teammates").update({
      
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleCreateProjectClick = () => {
    firebase.database().ref("rooms").once('value', (snapshot) => {
      if (!snapshot.exists()) {
        this.createRoom(1);
      }
      else {
        this.createRoom(Object.keys(snapshot.val()).length + 1);
        
      }
    });
  }

  createRoom = (num) => {
    let uid = firebase.auth().currentUser.uid;
    firebase.database().ref("rooms/" + num.toString() + "/users").update({
      "uid": uid
    });
    firebase.database().ref("users/" + uid).update({
      "roomNumber": num
    })
  }

  render() {
    return (
      <Container>
        <h1 style={{ marginTop: 40, marginBottom: 30, }} >Team Building Page</h1>
        <Row>
          <Col>
            <h3 className="mb-3" >My Team</h3>
            <Card >
              <Card.Body>
                <h3 className="text-center border-bottom border-secondar pb-3" >{this.state.userName} (Me)</h3>
              </Card.Body>
              
            </Card>
          </Col>
          <Col>
            <h3 className="mb-3" >Add Team Members</h3>
            <Card>
              <Card.Body>
                <Form onSubmit={this.handleSubmit} >
                  <Form.Group controlId="formBasicEmail">
                    <h4 className="mb-3" >Search for Team Members</h4>
                    <h6 className="text-muted mb-3">
                      Enter your teammates email below and we will add them to your project group. In general, 
                      you may have up to 4 people in your project group, depending on the rules of the 
                      hackathon you are attending.
                    </h6>
                    <h6 className="text-muted mb-3">
                      Before adding teammates, one member must create a project group below. Then, any member 
                      can search to add additional members.
                    </h6>
                    <Form.Control type="text" id="enteredEmail" placeholder="Enter team members' email" onChange={this.handleChange} />
                  </Form.Group>
                  <Button variant="primary" type="submit">Submit</Button>
                </Form>
                <Button style={{ position: 'absolute', bottom: 40, }} variant="success" size="lg" onClick={this.handleCreateProjectClick} >Create Project Group</Button>{' '}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
