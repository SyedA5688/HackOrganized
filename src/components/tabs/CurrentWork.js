import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import * as firebase from 'firebase';

export default class CurrentWork extends React.Component
{
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      teamMembersWork:{},
      textInput: "",
      teamMemberStatuses: "",
      statusInput: "",
      roomNumber: -1,
      allUsers: {},
      teamMembers: {},
    }
  }

  componentDidMount() {
    this._isMounted = true;
    if (firebase.auth().currentUser != null) {
      this.updateState();
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  updateState = () => {
    let userID = firebase.auth().currentUser.uid;
    firebase.database().ref("users/" + userID + "/roomNumber").once('value', (snapshot) => {
      if (snapshot.exists() && this._isMounted) {
        this.setState({ roomNumber: snapshot.val() });
      }
    }).then(() => {
      if (this.state.roomNumber !== -1) {
        firebase.database().ref("rooms/" + this.state.roomNumber + "/currentWork").once('value', (snapshot) => {
          if (snapshot.exists() && this._isMounted) {
            this.setState({ teamMembersWork: snapshot.val() })
          }
        });
        firebase.database().ref("rooms/" + this.state.roomNumber + "/statuses").once('value', (snapshot) => {
          if (snapshot.exists() && this._isMounted) {
            this.setState({ teamMemberStatuses: snapshot.val() })
          }
        });
        firebase.database().ref("users").once('value', (snapshot) => {
          if (snapshot.exists() && this._isMounted) {
            this.setState({ allUsers: snapshot.val() });
          }
        });
        firebase.database().ref("users/" + userID + "/teammates").once('value', (snapshot) => {
          if (snapshot.exists() && this._isMounted) {
            this.setState({ teamMembers: snapshot.val() })
          }
        });
      }
    })
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.textInput === "" || this.state.roomNumber === -1) {
      return;
    }
    // Update Status in Firebase
    let uid = firebase.auth().currentUser.uid;
    let updates = {};
    let updates2 = {};
    updates[uid] = this.state.textInput;
    updates2[uid] = this.state.statusInput;
    firebase.database().ref("rooms/" + this.state.roomNumber + "/currentWork").update(updates)
    firebase.database().ref("rooms/" + this.state.roomNumber + "/statuses").update(updates2);
    // Update state
    this.updateState();
    this.setState({ textInput: "", statusInput: "" });
  }

  render(){
    const memberWorkList = (Object.keys(this.state.teamMembersWork).length > 0 && 
                            Object.keys(this.state.allUsers).length > 0) ? (
      <div>
        {Object.keys(this.state.teamMembersWork).map(key => { 
          return (
            <Card class="card">
              <Card.Body>
                <Card.Title class="title">{this.state.allUsers[key].name}, Status: {this.state.teamMemberStatuses[key]}</Card.Title>
                <Card.Text class="text">
                  {this.state.teamMembersWork[key]}
                </Card.Text>
              </Card.Body>
            </Card>
          )
        })}
      </div>
    ) : (<div></div>);

    return (
      <Container>
        <h1>What Everyone is Working on Currently:</h1>
        {memberWorkList}

        <Row>
          <Col></Col>
          <Col xs={6}>
            <Card>
              <Form onSubmit={this.handleFormSubmit} >
                <Form.Group controlId="textInput">
                  <h4>Update Your Current Work and Status</h4>
                  <Form.Control 
                    type="text" 
                    id="textInput" 
                    placeholder="Enter text" 
                    value={this.state.textInput}
                    onChange={this.handleInputChange} 
                  />
                </Form.Group>
                <Form.Group controlId="statusInput">
                  <Form.Control 
                    type="text" 
                    id="statusInput" 
                    placeholder="Enter status" 
                    value={this.state.statusInput}
                    onChange={this.handleInputChange} 
                  />
                </Form.Group>
                  <Button 
                    variant="primary" 
                    type="submit" 
                    className="ml-5" >
                    Submit
                  </Button>
              </Form>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    )
  }
}

