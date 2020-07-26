import React from 'react';
import { Container, Row, Col, Card, Form, Button, Dropdown, ButtonGroup } from 'react-bootstrap';
import * as firebase from 'firebase';


export default class ProjectDetails extends React.Component 
{
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      projectIdea: "",
      framework: "",
      backend: "",
      dataSource: "",
      textInput: "",
      categoryDropdown: "Category",
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
        firebase.database().ref("rooms/" + this.state.roomNumber + "/projectDetails").once('value', (snapshot) => {
          if (snapshot.exists() && this._isMounted) {
            let obj = snapshot.val();
            if (obj["ProjectIdea"] !== null) { this.setState({ projectIdea: obj["ProjectIdea"] }); console.log(obj["ProjectIdea"]) }
            if (obj["Framework"] !== null) { this.setState({ framework: obj["Framework"] }); }
            if (obj["Backend"] !== null) { this.setState({ backend: obj["Backend"] }); }
            if (obj["DataSource"] !== null) { this.setState({ dataSource: obj["DataSource"] }); }
          }
        })
      }
    })
  }

  handleTextInputChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleDropDownChange = (eventKey, eventObj) => {
    this.setState({
      categoryDropdown: eventKey
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.categoryDropdown === "Category" || this.state.roomNumber === -1) {
      return;
    }
    // Update in Firebase
    console.log(this.state.categoryDropdown, this.state.textInput);
    let updates = {};
    if (this.state.categoryDropdown === "ProjectIdea") { updates["ProjectIdea"] = this.state.textInput }
    else if (this.state.categoryDropdown === "Framework") { updates["Framework"] = this.state.textInput }
    else if (this.state.categoryDropdown === "Backend") { updates["Backend"] = this.state.textInput }
    else if (this.state.categoryDropdown === "DataSource") { updates["DataSource"] = this.state.textInput }

    firebase.database().ref("rooms/" + this.state.roomNumber + "/projectDetails").update(updates);
    // Update state
    this.updateState();
    this.setState({ textInput: "" });
  }

  render() {
    return (
      <Container>
        <h1>Project Details</h1>
        <Row>
          <Col>
            <Card>
              <Card.Body class="body">
                <h4>What Are We Making:</h4>
                <Card.Text>{this.state.projectIdea}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body class="body">
                <h4>What Framework(s) Are We Using:</h4>
                <Card.Text>{this.state.framework}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <Card.Body class="body">
                <h4>What Will Be Our Backend:</h4>
                <Card.Text>{this.state.backend}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body class="body">
                <h4>Where Are We Getting Data From:</h4>
                <Card.Text>{this.state.dataSource}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col></Col>
          <Col xs={6}>
            <Card>
              <Form onSubmit={this.handleFormSubmit} >
                <Form.Group controlId="textInput">
                  <h4>Update Details</h4>
                  <Form.Control type="text" id="textInput" placeholder="Enter text" value={this.state.textInput} onChange={this.handleTextInputChange} />
                </Form.Group>

                {/* <div style={{flexDirection: "row"}} > */}
                <ButtonGroup >
                  <Dropdown onSelect={(key, event) => { this.handleDropDownChange(key, event) }} >
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                      { this.state.categoryDropdown }
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item eventKey="ProjectIdea">Project Idea</Dropdown.Item>
                      <Dropdown.Item eventKey="Framework">Framework</Dropdown.Item>
                      <Dropdown.Item eventKey="Backend">Backend</Dropdown.Item>
                      <Dropdown.Item eventKey="DataSource">Data Source</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Button variant="primary" type="submit" className="ml-5" >
                    Submit
                  </Button>
                </ButtonGroup>
                {/* </div> */}
              </Form>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    )
  }
}
