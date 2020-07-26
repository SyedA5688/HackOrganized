import React from 'react';
import { Container, Card, Row, Col, Form, Button } from 'react-bootstrap';
import * as firebase from 'firebase';

export default class TeamBuilder extends React.Component 
{
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      teammates: {},
      userName: "",
      enteredEmail: "",
    }
  }

  componentDidMount() {
    this._isMounted = true;
    if (firebase.auth().currentUser != null) {
      let user = firebase.auth().currentUser.uid;
      console.log(user);
      const databaseRef = firebase.database().ref("users").child(user);
      databaseRef.child("teamates").on('value', snapshot => {
        if (snapshot.exists() && this._isMounted) {
          this.setState({ teammates: snapshot.val() })
        }
      });
      databaseRef.child("name").once('value', snapshot => {
        console.log(snapshot.exists() && this._isMounted);
        if (snapshot.exists() && this._isMounted) {
          this.setState({ userName: snapshot.val() })
        }
      })
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Look up user with this email, add to team members list
    let userWithEmail = null;
    firebase.database().ref("users").once('value', snapshot => {
      let userObj = snapshot.val();
      let keys = Object.keys(userObj); // Array of user ids
      keys.forEach(key => {
        //console.log(userObj);
        if (userObj.key.email == this.state.enteredEmail && userObj.key.roomNumber !=  null) {
          this.addUserToTeam(key, userObj.key.roomNumber);
        }
      })
    })
  }

  addUserToTeam = (userID, roomNum) => {
    // Add user to room of project group
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleCreateProjectClick = () => {

  }

  render() {
    return (
      <Container>
        <h1 style={{ marginTop: 40, marginBottom: 30, }} >Team Building Page</h1>
        <Row>
          <Col>
            <h3 className="mb-3 text-center" >My Team</h3>
            <Card style={styles.card} >
              <Card.Body>
                <h3 className="text-center border-bottom border-secondar pb-3" >{this.state.userName} (Me)</h3>
              </Card.Body>
              
            </Card>
          </Col>
          <Col >
            <h3 className="mb-3 text-center" >Add Team Members</h3>
            <Card style={styles.card} >
              <Card.Body>
                <Form onSubmit={this.handleSubmit} >
                  <Form.Group controlId="formBasicEmail">
                    <h4 className="mb-3" >Search for Team Members</h4>
                    <h6 className="text-muted mb-3">
                      Enter your teammates email below and we will add them to your project group. In general, 
                      you may have up to 4 people in your project group, depending on the rules of the 
                      hackathon you are attending.
                    </h6>
                    <h6 className="text-muted mb-3">
                      Before adding teammates, one member must create a project group below. Then, any member 
                      can search to add additional members.
                    </h6>
                    <Form.Control type="text" id="enteredEmail" placeholder="Enter team members' email" onChange={this.handleChange} />
                  </Form.Group>
                  <Button variant="primary" type="submit">Submit</Button>
                </Form>
                <Button style={{ position: 'absolute', bottom: 40, }} variant="success" size="lg" onClick={this.handleCreateProjectClick} >Create Project Group</Button>{' '}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

const styles = {
  card: {
    width: '100%', 
    marginTop: 20,
    minHeight: 500,
    borderRadius: 20,
    padding: 15,
  }
}