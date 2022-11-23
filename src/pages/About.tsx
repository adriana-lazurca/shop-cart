import { Card } from 'react-bootstrap';

export const About = () => (
  <Card className="bg-light d-flex flex-column gap-3 justify-content-center align-items-center">
    <Card.Title>About us</Card.Title>
    <Card.Body>Our store has everything you need. You don't believe us? See it for yourself.</Card.Body>
    <Card.Link className="text-uppercase" href="/">
      Shop here!
    </Card.Link>
  </Card>
);
