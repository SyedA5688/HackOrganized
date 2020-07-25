import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Home() {
  return (
    <Container>
      <h1 style={{ marginTop: 40, }} >Welcome to the Hackathon!</h1>
      <Row>
        <Col>
          <Card style={styles.card}>
            <Card.Body>
              <Card.Title>Things to Think About</Card.Title>
              <Card.Text>
                Hackathons usually last around 24-48 hours, so you don't have much time to waste! Quickly
                find a few teammates and decide on what project you want to create.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={styles.card}>
            <Card.Body>
              <Card.Title>Reminders</Card.Title>
              <Card.Text>
                Hackathons usually have a homepage with information, challenges, and their schedule on it, 
                take a look to get an idea of what is going on. These events also often use Slack, Discord, 
                or other messaging services to communicate, so be sure you are on their channels!
              </Card.Text>
              <Card.Link href="https://slack.com/" target="_blank" >Slack</Card.Link>
              <Card.Link href="https://discord.com/new" target="_blank" >Discord</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

const styles = {
  card: {
    width: '100%', 
    marginTop: 20,
  }
}