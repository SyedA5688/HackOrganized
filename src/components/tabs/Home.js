import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
//import './style.css'; 

export default function Home() {
  return (
    <Container>
      <h1> Welcome to the Hackathon!</h1>
      <Row>
        <Col>
          <Card class="card" >
            <Card.Body>
              <h3>Things to Think About</h3>
              <Card.Text class= "text">
                Hackathons usually last around 24-48 hours, so you don't have much time to waste! Quickly
                find a few teammates and decide on what project you want to create.
              </Card.Text>
              <Card.Text class= "text" >
                Alongside endless project ideas, there are endless services and frameworks that you can use to 
                build your project. Make sure you and your teammates form a cohesive skill set for building your 
                project
              </Card.Text>
              <Card.Text class= "text" >
                Spend effort thinking about your project demo and presentation quality. Your project may be 
                amazing, but it will only seem as good as its demo to the judges.
              </Card.Text>
              <Card.Text class= "text" >
                If you are stuck, ask someone around you for help, there are often mentors and other programmers 
                who would be willing to help you out if you ask nicely! And if you feel like learning something 
                new, consider attending a workshop
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card class="card">
            <Card.Body>
              <h3>Reminders</h3>
              <Card.Text class= "text" >
                Check out the homepage of your hackathons for information on challenges, workshops, prizes, and
                where you can ask for help if you need it. Pay close attention to the schedule of the event, to 
                make sure you don't miss important side events or deadlines.
              </Card.Text>
              <Card.Text class= "text"  >
                Take breaks! No one can program and build for 24 hours straight, make sure you are taking breaks, 
                talking to your teammates, and taking care of yourself. Get some food, take a nap, and freshen up, 
                so you have energy to help your teammates.
              </Card.Text>
              <Card.Text class= "text" >
                Hackathons often use Slack, Discord, or another messaging service to communicate and make 
                announcements, be sure at least some of your team members are on those channels!
              </Card.Text>
              <Card.Link  href="https://slack.com/" target="_blank" >Slack</Card.Link>
              <Card.Link  href="https://discord.com/new" target="_blank" >Discord</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}


