import React from 'react';
import { Container, Card, Row, Col, Form, Button } from 'react-bootstrap';
import * as firebase from 'firebase';

export default class BrainStorm extends React.Component  
{

  constructor(props) {
    super(props);
    this.state = {
      message: [],
      teammates: {},
      userName: "",
      enteredEmail: "",
      user: firebase.auth().currentUser,
      chats: [],
      content: '',
      readError: null,
      writeError: null,
    }
  }

  componentDidMount() {
    if (firebase.auth().currentUser != null) {
      let userID = firebase.auth().currentUser.uid;
      const databaseRef = firebase.database().ref();
      databaseRef.on('value', snapshot => {
        if (snapshot.exists() ) {
          this.setState({ data: snapshot.val() });
          this.setState({ message: this.state.data.users.message });
        }
      })
    }
  }

  handleChange1(e) { 
      this.setState({
          ideas: e.target.value
      })
  }
  handleChange(e) {
    this.setState({
        message: e.target.value
    })
  }

  handleSubmit(e) {
      e.preventDefault()
      this.props.sendMessage(this.state.message)
      this.setState({
          message: ''
      })
  }


  sendMessage = (text) => {
    this.currentUser.sendMessage({
      text, 
      roomId: this.roomNum
    })
  }


  render (){
    const teammatesList = (this.state.teammates != null) ? (
      <div>
        {Object.keys(this.state.teammates).map(key => { 
          return <Card.Text>{this.state.allUsers[this.state.allUsers[this.user.uid].teammates[key]].text}</Card.Text>
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
            <h3>Possible Ideas</h3>
            <h4></h4>
              <Card.Text class= "text">
                Make a web app!
              </Card.Text>
              <Form onSubmit={this.handleSubmit} >
                  <Form.Control
                  type="text" id="ideas" 
                  placeholder="Add more ideas" 
                  onChange={this.handleChange1} type="text" />
                  <h3></h3>
                  <Button variant="light" type="submit">Post </Button>
                </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card class="card">
            <Card.Body>
              <h3>Chat Box</h3>
              <h4></h4>
              <Form onSubmit={this.handleSubmit} >
                  <Form.Control
                  type="text" id="enteredMessage" 
                  placeholder="Send a Message" 
                  onChange={this.handleChange} type="text" />
                  <h3></h3>
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

