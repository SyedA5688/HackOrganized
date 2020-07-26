import React from 'react';
import { Container, Card, Row, Col, Form, Button } from 'react-bootstrap';



export default class Assignments extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {value: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
    <Container>
      
      <h1> Assignments Page</h1>
  
      <Card class="card">
        <Card.Text>
           Assignment
        </Card.Text>
        <Card.Text>
           by
        </Card.Text>
      </Card>

      <Card class="card">
      <Form class="text" onSubmit={this.handleSubmit}>
        <Form.Control type="text" id="assignment" placeholder="Enter Assignment" onChange={this.handleChange} />
          <div style={{ marginTop: "5px"}} >      
          Assigned To: 
          </div>           
          <select value={this.state.value} onChange={this.handleChange}>
            <option>Team Member One</option>
          </select>
        <Button style={{ marginLeft: "150px"}} variant="light" value="Submit" id="submit" type="submit">Submit </Button>    
      </Form>
      </Card>
      
    </Container>
    );
  }
}
