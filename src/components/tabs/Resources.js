import React from 'react';
import { Container, Card } from 'react-bootstrap';
import './style.css'; 

export default function Resources() {
  return (
    <Container>
      <h1>Useful Resources for Hackers</h1>
      <Card class="card">
        <Card.Body>
          <Card.Title class="title">GitHub</Card.Title>
          <Card.Text class="text">
            GitHub is an online repository database and version control system that helps you and 
            your group work on a project while not interfering with each others progress, and maintains 
            older versions of code in case your group needs to backtrack. GitHub is also used as a profile
            for job applications, so it is definitely a good idea to make an account!
          </Card.Text>
          <Card.Link href="https://github.com/" target="_blank" >Check out GitHub</Card.Link>
        </Card.Body>
      </Card>
      <Card class="card" >
        <Card.Body>
          <Card.Title class="title"> Google Cloud</Card.Title>
          <Card.Text class="text">
            Google Cloud services provides many different services that you are able to use in your project,
            everything from authentication to databases to app hosting. Since there are many services available,
            your team needs to carefully decide which ones to use in your project.
          </Card.Text>
          <Card.Link href="https://cloud.google.com/"  target="_blank" >Check out Google Cloud Services</Card.Link>
        </Card.Body>
      </Card>
      <Card class="card" >
        <Card.Body>
          <Card.Title class="title">DevPost</Card.Title>
          <Card.Text class="text">
            DevPost is a hackathon and project database where hackathon groups post their final submissions, and
            where you will likely need to submit your final project at the end of your hackathon. On DevPost you can
            see projects from other groups for inspiration, and look for other hackathon events.
          </Card.Text>
          <Card.Link href="https://devpost.com/"  target="_blank" >Check out DevPost</Card.Link>
        </Card.Body>
      </Card>
      <Card class="card" >
        <Card.Body>
          <Card.Title class="title"> APIs</Card.Title>
          <Card.Text class="text">
            APIs are services that return something when you call them or make a request, anything from data to random 
            jokes. They allow your applications to incorporate real data, and can offer advanced services such as image
            recognition and data analysis. Often you will need to sign up and get an API key to use these services
          </Card.Text>
          <Card.Link href="https://github.com/public-apis/public-apis"  target="_blank" >API List on GitHub</Card.Link>
        </Card.Body>
      </Card>
      <Card class="card" >
        <Card.Body>
          <Card.Title class="title">PostMan</Card.Title>
          <Card.Text class="text">
            PostMan is an API testing tool, where you can test API calls before putting them in your application. It 
            is an extremely versatile tool, and is especially useful for developing projects that need to gather data
            from remote services.
          </Card.Text>
          <Card.Link href="https://devpost.com/"  target="_blank" >Check out PostMan</Card.Link>
        </Card.Body >
      </Card>
      <Card class="card" >
        <Card.Body>
          <Card.Title class="title">Microsoft Azure</Card.Title>
          <Card.Text class="text">
            Like Google Cloud Services, Microsoft Azure also offers a wide range of services that you can incorporate into
            your app and manage on their dashboard using your microsoft account.
          </Card.Text>
          <Card.Link href="https://azure.microsoft.com/en-us/"  target="_blank" >Check out Azure Services</Card.Link>
        </Card.Body>
      </Card>
    </Container>
  )
}
