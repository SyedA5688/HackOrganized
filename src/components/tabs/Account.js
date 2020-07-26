import React from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';

export default class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authState: 'signedIn',
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      nickname: "",
      birthday: "",
      gender: "",
      phone_number: "",
      website: "",
      github:"",
    };
    
  }

  handleChange= (event) =>{
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }
  
  render() {
    return (
    <Container>
      
      <h1>Your Account</h1>
      <Card class="card">

      </Card>
      <Card class="card">
      <Form class="text" onSubmit={this.handleSubmit}>
        <input type="text" id="assignment" placeholder="Description/About You" onChange={this.handleChange} />         
        <Button variant="light" value="Submit" id="submit" type="Update">Update </Button>    
      </Form>
      </Card>
    
      <Card class="card">
      <Form class="text" onSubmit={this.handleSubmit}>
        <Form.Control type="text" id="assignment" placeholder="Description/About You" onChange={this.handleChange} />         
        <Button variant="light" value="Submit" id="submit" type="Update">Update </Button>    
      </Form>
      </Card>
      
    </Container>
    );
  }
}
