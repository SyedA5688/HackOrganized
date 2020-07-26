import React from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import * as firebase from 'firebase';


export default class Assignments extends React.Component
{
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      enteredAssignment: "",
      enteredMember: "",
      allAssignments: {},
      roomNumber: -1,
    };
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
        firebase.database().ref("rooms/" + this.state.roomNumber + "/assignments").once('value', (snapshot) => {
          if (snapshot.exists() && this._isMounted) {
            this.setState({ allAssignments: snapshot.val() });
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
    this.uploadAssignment(this.state.enteredAssignment);
    this.setState({
      enteredAssignment: ''
    });
    this.updateState();
  }

  uploadAssignment = (text) => {
    let updates = {};
    updates[this.state.enteredMember] = text;
    firebase.database().ref("rooms/" + this.state.roomNumber + "/assignments").update(updates);
  }

  render() {
    const assignmentsList = (Object.keys(this.state.allAssignments).length > 0) ? (
      <div>
        {Object.keys(this.state.allAssignments).map(key => { 
          return (
            <Card class="card">
              <Card.Text>{this.state.allAssignments[key]}</Card.Text>
              <Card.Text>Tasked to: {key}</Card.Text>
            </Card>
          )
        })}
      </div>
    ) : (<div></div>);

    return (
    <Container>
      <h1>Task Assignment Page</h1>
      {assignmentsList}

      <Card class="card">
      <Form class="text" onSubmit={this.handleFormSubmit}>
        <Form.Group controlId="assignmentInput">
          <Form.Control 
            type="text" 
            id="enteredAssignment" 
            placeholder="Enter text" 
            value={this.state.enteredAssignment}
            onChange={this.handleInputChange} 
          />
        </Form.Group>
        <Form.Group controlId="textInput">
          <h4>Assign To:</h4>
          <Form.Control 
            type="text" 
            id="enteredMember" 
            placeholder="Enter text" 
            value={this.state.enteredMember}
            onChange={this.handleInputChange} 
          />
        </Form.Group>          
        
        <Button style={{ marginLeft: "150px"}} variant="light" value="Submit" id="submit" type="submit">Submit </Button>    
      </Form>
      </Card>
      
    </Container>
    );
  }
}
