import { CardColumns, Container } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

import "./ProjectCardDeck.css";

const ProjectCardDeck = () => {
  return (
    <Container>
      <CardColumns>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </CardColumns>
    </Container>
  );
};

export default ProjectCardDeck;
