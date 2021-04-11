import { CardColumns, Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import axios from "axios";

import "./ProjectCardDeck.css";

const ProjectCardDeck = () => {
  const [isLoaded, setLoaded] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(async () => {
    const projects = await axios.get(
      `http://142.93.118.235:8000/api/projects/`
    );

    setProjects(projects.data);
    setLoaded(true);
  }, []);

  if (!isLoaded) {
    return <p>Loading....</p>;
  }
  return (
    <Container>
      <CardColumns>
        {projects.map((proj) => (
          <ProjectCard
            name={proj.name}
            description={proj.description}
            technologies={proj.technologies}
            project_url={proj.project_url}
            complexities={proj.complexities}
            start_date={proj.start_date}
          />
        ))}
      </CardColumns>
    </Container>
  );
};

export default ProjectCardDeck;
