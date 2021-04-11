import { Button, Card } from "react-bootstrap";
import "./ProjectCard.css";

const ProjectCard = (props) => {
  // find how many days since project was created
  let today = new Date();
  let createdOn = new Date(props.start_date);
  const msInDay = 24 * 60 * 60 * 1000;

  createdOn.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);
  const diff = (+today - +createdOn) / msInDay;

  return (
    <Card className="space-out">
      <Card.Header>Created {diff} days ago...</Card.Header>
      <Card.Body>
        <Card.Title>
          <h2>{props.name}</h2>
        </Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <a href={props.project_url} target="_blank" rel="noreferrer">
          <Button variant="primary">Project Link</Button>
        </a>
      </Card.Body>
      <Card.Footer>
        <strong>{props.technologies}</strong>
      </Card.Footer>
    </Card>
  );
};

export default ProjectCard;
