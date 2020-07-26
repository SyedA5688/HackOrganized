import React from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
<<<<<<< HEAD
import * as firebase from 'firebase';
=======
import {signIn} from '../../actions/authActions'
>>>>>>> cd7042583094902f2d3f2382c53a68c404273e9b


export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
<<<<<<< HEAD
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        console.log("Successful Sign in");
      })
      .catch((error) => {
        console.log("Error");
      })

    this.props.history.push("/");
=======
    //console.log(this.state);
    this.props.signIn(this.state);

>>>>>>> cd7042583094902f2d3f2382c53a68c404273e9b
  }
  
  render() {
    return (
      <Container>
        <h1 className="mt-5 text-center" >Welcome Back! Please Log In</h1>
        <Card className="mt-5" >
          <Card.Body className="p-5" >
            <Form onSubmit={this.handleSubmit} >
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
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    )
  }
}

const mapDispatchToProps= (dispatch) => {
  return{
    signIn: (creds) => dispatch(signIn(creds))
  }
}
//export default connect(null, mapDispatchToProps)(SignIn)