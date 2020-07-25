import React from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';


export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    }
  }

  handleChange = (e) => {
    console.log(e);
  }

  handleSubmit = (e) => {
    console.log(e);
  }
  
  render() {
    return (
      <Container>
        <h1 className="mt-5 text-center" >Log in to Start Organizing Your Group</h1>
        <Card className="mt-5" >
          <Card.Body className="px-5 py-4" >
            <Form onSubmit={this.handleSubmit} >
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={this.handleChange} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"  onChange={this.handleChange} />
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
