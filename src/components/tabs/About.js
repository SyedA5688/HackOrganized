import React from 'react';
import { Container, Card } from 'react-bootstrap';

export default function About() {
  return (
    <Container>
      <h1 className="mt-5" >About this Web App</h1>
      <Card className="mt-5" style={{ borderRadius: 20, padding: 20 }} >
      <Card.Body>
        <Card.Title>HackOrganized Web Application</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Created by Syed Rizvi and Melika Nassizadeh</Card.Subtitle>
        <Card.Text>
          This web application was created at Hacky Birthday MLH 2020, with the intention of making it easier for hackathon 
          groups, and especially beginners, to organize their project. Given that many events are moving fully online now, 
          there is a great need for hackathon teams to work together efficiently without having the speed of communication 
          that normally comes with being in the same room together. With this is mind, this web application gives team members 
          a convenient space to assign tasks, brainstorm ideas, and see what other members are working on. This cuts down on 
          on unnecessary conversation and complicated online messaging in group chats, as much of the project information and 
          status of members will be easily viewable on the website, keeping members up to speed with the group.
        </Card.Text>
        <Card.Link href="https://github.com/SyedA5688/HackOrganized" target="_blank" >GitHub Repository</Card.Link>
      </Card.Body>
      </Card>
    </Container>
  )
}
