import React from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import * as firebase from 'firebase';


export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        let user = firebase.auth().currentUser.uid;
        const databaseRef = firebase.database().ref("users").child(user);
        databaseRef.set({
          "name": this.state.firstName + " " + this.state.lastName,
          "teammates": null,
          "room": null,
        });
      })
      .catch(() => {
        console.log("Error");
      })
    
    this.props.history.push("/");
  }
  
  render() {
    return (
      <Container>
        <h1 className="mt-5 text-center" >Log in to Start Organizing Your Group</h1>
        <Card className="mt-5" >
          <Card.Body className="p-5" >
            <Form onSubmit={this.handleSubmit} >
            <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" id="firstName" placeholder="Enter your first name" onChange={this.handleChange} />
              </Form.Group>

              <Form.Group controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" id="lastName" placeholder="Enter your last name" onChange={this.handleChange} />
              </Form.Group>
              
              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" id="email" placeholder="Enter email" onChange={this.handleChange} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" id="password" placeholder="Password"  onChange={this.handleChange} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Signup
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    )
  }
}
