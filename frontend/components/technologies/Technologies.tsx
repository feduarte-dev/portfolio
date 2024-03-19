"use client";


import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { database, backend, frontend, others } from "@/db/getTecnologies";
import Image from "next/image";
import classes from "./technologies.module.css";
export default function Technologies() {
  return (
    <Container>
      <h3>Technologies</h3>
      <Row>
        <h4>Front end</h4>
        {frontend.map((tech) => (
          <Col key={tech.title}>
            <div className={classes.techContainer}>
              <Image src={tech.image} alt={tech.title} />
              <span>{tech.title}</span>
            </div>
          </Col>
        ))}
      </Row>
      <Row>
        <h4>Back end</h4>
        {backend.map((tech) => (
          <Col key={tech.title}>
            <div className={classes.techContainer}>
              <Image src={tech.image} alt={tech.title} />
              <span>{tech.title}</span>
            </div>
          </Col>
        ))}
      </Row>
      <Row>
        <h4>Database</h4>
        {database.map((tech) => (
          <Col key={tech.title}>
            <div className={classes.techContainer}>
              <Image src={tech.image} alt={tech.title} />
              <span>{tech.title}</span>
            </div>
          </Col>
        ))}
      </Row>
      <Row>
        <h4>Others</h4>
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
