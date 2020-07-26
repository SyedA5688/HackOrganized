import React from 'react';
import { Container, Card, Row, Col, Form, Button } from 'react-bootstrap';
import * as firebase from 'firebase';

export default class BrainStorm extends React.Component  
{
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      idea: "",
      chatMessage: "",
      previousChats: {},
      ideaList: {},
      roomNumber: -1,
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
        firebase.database().ref("rooms/" + this.state.roomNumber + "/chats").once('value', (snapshot) => {
          if (snapshot.exists() && this._isMounted) {
            this.setState({ previousChats: snapshot.val() });
          }
        });
        firebase.database().ref("rooms/" + this.state.roomNumber + "/projectIdeas").once('value', (snapshot) => {
          if (snapshot.exists() && this._isMounted) {
            this.setState({ ideaList: snapshot.val() });
          }
        });
      }
    })
  }

  handleEnterIdeaChange = (e) => { 
    this.setState({
      idea: e.target.value
    });
  }

  handleChatMessageChange = (e) => {
    this.setState({
      chatMessage: e.target.value
    });
  }

  handleChatMessageSubmit = (e) => {
    e.preventDefault();
    this.sendMessage(this.state.chatMessage);
    this.setState({
      chatMessage: ''
    });
    this.updateState();
  }

  sendMessage = (text) => {
    let updates = {};
    let num = Object.keys(this.state.previousChats).length + 1;
    updates["chat" + num.toString()] = text;
    firebase.database().ref("rooms/" + this.state.roomNumber + "/chats").update(updates);
  }

  handleIdeaFormSubmit = (e) => {
    e.preventDefault();
    this.uploadIdea(this.state.idea);
    this.setState({
      idea: ''
    });
    this.updateState();
  }

  uploadIdea = (text) => {
    let updates = {};
    let num = Object.keys(this.state.ideaList).length + 1;
    updates["idea" + num.toString()] = text;
    firebase.database().ref("rooms/" + this.state.roomNumber + "/projectIdeas").update(updates);
  }

  render (){
    const messagesList = (Object.keys(this.state.previousChats).length > 0) ? (
      <div>
        {Object.keys(this.state.previousChats).map(key => { 
          return <Card.Text class="text" >{this.state.previousChats[key]}</Card.Text>
        })}
      </div>
    ) : (<div></div>);

    const ideasList = (Object.keys(this.state.ideaList).length > 0) ? (
      <div>
        {Object.keys(this.state.ideaList).map(key => { 
          return <Card.Text class="text" >{this.state.ideaList[key]}</Card.Text>
        })}
      </div>
    ) : (<div></div>);

    return (
    <Container>
      <h1>Brainstorm Page</h1>
      <Row>
        <Col>
          <Card class="card" > 
            <Card.Body>
            <h3>Awesome Project Ideas</h3>
            <h4> </h4>
              <Card.Text class="text">
                Make a web app!
              </Card.Text>
              {ideasList}
              <Form onSubmit={this.handleIdeaFormSubmit} >
                  <Form.Control
                    type="text" 
                    id="ideas" 
                    placeholder="Add more ideas" 
                    onChange={this.handleEnterIdeaChange}
                    value={this.state.idea}
                  />
                  <h3> </h3>
                  <Button variant="light" type="submit">Post </Button>
                </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card class="card">
            <Card.Body>
              <h3>Chat Box</h3>
              <h4> </h4>
              {messagesList}
              <Form onSubmit={this.handleChatMessageSubmit} >
                <Form.Control
                  type="text" 
                  id="enteredMessage" 
                  placeholder="Send a Message" 
                  onChange={this.handleChatMessageChange} 
                  value={this.state.chatMessage}
                />
                <h3> </h3>
                <Button variant="light" type="submit">Send </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    )
  }
}

