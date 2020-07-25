import React from 'react';
import { Container, Card } from 'react-bootstrap';

export default function Resources() {
  return (
    <Container>
      <h1 className="mt-5" >Useful Resources for Hackers</h1>
      <Card className="mt-4" style={{ borderRadius: 10, }} >
        <Card.Body>
          <Card.Title>GitHub</Card.Title>
          <Card.Text>
            GitHub is an online repository database and version control system that helps you and 
            your group work on a project while not interfering with each others progress, and maintains 
            older versions of code in case your group needs to backtrack. GitHub is also used as a profile
            for job applications, so it is definitely a good idea to make an account!
          </Card.Text>
          <Card.Link href="https://github.com/">Check out GitHub</Card.Link>
        </Card.Body>
      </Card>
    </Container>
  )
}
