import { Button, Card } from "react-bootstrap";
import "./ProjectCard.css";

const ProjectCard = () => {
  return (
    <Card className="space-out">
      <Card.Header>Created 2 days ago...</Card.Header>
      <Card.Body>
        <Card.Title>Project Name</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Project Link</Button>
      </Card.Body>
      <Card.Footer>
        <strong>Django, React.js, Python</strong>
      </Card.Footer>
    </Card>
  );
};

export default ProjectCard;
