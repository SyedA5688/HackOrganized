import React from 'react';
import { Container, Card, Row, Col, Form, Button } from 'react-bootstrap';
import * as firebase from 'firebase';

export default class TeamBuilder extends React.Component 
{
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      allUsers: {},
      teammates: {},
      userName: "",
      enteredEmail: "",
    }
  }

  componentDidMount() {
    this._isMounted = true;
    if (firebase.auth().currentUser != null) {
      this.updateState();
    }
  }

  updateState = () => {
    let userID = firebase.auth().currentUser.uid;
    const databaseRef = firebase.database().ref();
    databaseRef.once('value', snapshot => {
      if (snapshot.exists() && this._isMounted) {
        this.setState({ allUsers: snapshot.val().users });
        //console.log(snapshot.val().users);
        let usersObj = this.state.allUsers;
        this.setState({ teammates: usersObj[userID].teammates });
        this.setState({ userName: usersObj[userID].name });
      }
    })
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Look up user with this email, add to team members list
    let currentUserID = firebase.auth().currentUser.uid;
    firebase.database().ref("users").once('value', snapshot => {
      let userObj = snapshot.val();
      let keys = Object.keys(userObj); // Array of user ids
      keys.forEach(key => {
        //console.log(userObj[key].email);
        //console.log(userObj[key].roomNumber);
        if (userObj[key].email === this.state.enteredEmail && userObj[key].roomNumber ==  null) {
          this.addUserToTeam(key, userObj[currentUserID].roomNumber);
        }
      })
    })
  }

  addUserToTeam = (teammateID, roomNum) => {
    // Add user to room of project group
    console.log("ran");
    let currentUserID = firebase.auth().currentUser.uid;
    firebase.database().ref("users/" + currentUserID + "/teammates").push(teammateID);
    firebase.database().ref("rooms/" + roomNum + "/users").push(teammateID);
    firebase.database().ref("users/" + teammateID + "/teammates").push(currentUserID);
    firebase.database().ref("users/" + teammateID).update({
      "roomNumber": roomNum
    })
    // Rerender
    this.updateState();
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
    firebase.database().ref("rooms/" + num.toString() + "/users").push(uid);
    firebase.database().ref("users/" + uid).update({
      "roomNumber": num
    })
  }

  render() {
    const teammatesList = (this.state.teammates != null) ? (
      <div>
        {Object.keys(this.state.teammates).map(key => { 
          return <Card.Text>{this.state.allUsers[this.state.allUsers[firebase.auth().currentUser.uid].teammates[key]].name}</Card.Text>
        })}
      </div>
    ) : (<div></div>);

    return (
      <Container>
        <h1 style={{ marginTop: 40, marginBottom: 30, }} >Team Building Page</h1>
        <Row>
          <Col>
            <h3 >My Team</h3>
            <Card class="card">
              <Card.Body class="body">
                <h4>{this.state.userName} (Me)</h4>
              <Card.Text class="text">
                {teammatesList}
              </Card.Text>
            
              </Card.Body>
              
            </Card>
          </Col>
          <Col>
            <h3 >Add Team Members</h3>
            <Card class="card">
              <Card.Body class="body">
                <Form onSubmit={this.handleSubmit} >
                  <Form.Group controlId="formBasicEmail">
                    <h4>Search for Team Members</h4>
                    <Card.Text class="text">
                      Enter your teammates email below and we will add them to your project group. In general, 
                      you may have up to 4 people in your project group, depending on the rules of the 
                      hackathon you are attending.
                  
                      Before adding teammates, one member must create a project group below. Then, any member 
                      can search to add additional members.
                    </Card.Text>
                    <Form.Control type="text" id="enteredEmail" placeholder="Enter team members' email" onChange={this.handleChange} />
                  </Form.Group>
                  <Button variant="light" type="submit">Add Member </Button>
                </Form>
                <h4> 
                </h4>
                <Button variant="light" onClick={this.handleCreateProjectClick} >Create Project Group</Button>{' '}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
