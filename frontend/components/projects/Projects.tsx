"use client";
import { useState } from "react";

import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { projectsArray } from "@/db/getProjects";
import classes from "./projects.module.css";
import Link from "next/link";

export default function Projects() {
  const [visibleItems, setVisibleItems] = useState(4);

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
  };

  return (
    <Container id="projects">
      <h3>Projects</h3>
      <div className={classes.sectionContainer}>
        <Row xs={1} md={2} className='g-4'>
          {projectsArray.slice(0, visibleItems).map((project) => (
            <Link
              key={project.title}
              href={project.link}
              className={classes.projectCard}
            >
              <Col>
                <Card className={classes.cardContainer} data-bs-theme='dark'>
                  <Card.Img variant='top' src={project.image.src} />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    {project.techs.map((tech, index) => (
                      <span key={index}>
                        {tech}
                        {index < project.techs.length - 1 && <span> | </span>}
                      </span>
                    ))}
                  </Card.Footer>
                </Card>
              </Col>
            </Link>
          ))}
        </Row>
        {projectsArray.length > visibleItems && (
          <Button onClick={handleLoadMore} className={classes.loadBtn}>
            Load More
          </Button>
        )}
      </div>
    </Container>
  );
}
