import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

export default class TeamBuilder extends React.Component 
{
  render() {
    return (
      <Container>
        <h1 style={{ marginTop: 40, }} >Team Building Page</h1>
        <Row>
          <Col>
            <h3 className="mb-3" >My Team</h3>
            <Card >
              <Card.Body>
                <Card.Text className="border-top border-secondary pt-2 px-2" >
                  Dummy Text
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <h3 className="mb-3" >Add Team Members</h3>
            <Card>
              <Card.Body>
                <Card.Text className="border-top border-secondary pt-2 px-2" >
                  Dummy Text 2
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
