"use client";


import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { database, backend, frontend, others } from "@/db/getTecnologies";
import Image from "next/image";
import classes from "./technologies.module.css";
export default function Technologies() {
  return (
    <Container id="technologies">
      <h3>Technologies</h3>
        <h4>Front end</h4>
      <Row xs={2} lg={4} className={classes.techsContainer}>
        {frontend.map((tech) => (
          <Col key={tech.title} >
            <div className={classes.techContainer}>
              <Image src={tech.image} alt={tech.title} />
              <span>{tech.title}</span>
            </div>
          </Col>
        ))}
      </Row>
        <h4>Back end</h4>
      <Row xs={2} lg={4} className={classes.techsContainer}>
        {backend.map((tech) => (
          <Col key={tech.title}>
            <div className={classes.techContainer}>
              <Image src={tech.image} alt={tech.title} />
              <span>{tech.title}</span>
            </div>
          </Col>
        ))}
      </Row>
        <h4>Database</h4>
      <Row xs={2} lg={4} className={classes.techsContainer}>
        {database.map((tech) => (
          <Col key={tech.title} >
            <div className={classes.techContainer}>
              <Image src={tech.image} alt={tech.title} />
              <span>{tech.title}</span>
            </div>
          </Col>
        ))}
      </Row>
        <h4>Others</h4>
           <Row xs={2} lg={4} className={classes.techsContainer}>
        {others.map((tech) => (
          <Col key={tech.title}>
            <div className={classes.techContainer}>
              <Image src={tech.image} alt={tech.title} />
              <span>{tech.title}</span>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
