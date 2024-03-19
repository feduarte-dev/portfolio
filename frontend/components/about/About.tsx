import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import profile from "@/assets/about/profile.jpeg";
import classes from "./about.module.css";

export default function About() {
  return (
    <Container className={classes.profileContainer}>
      <Row>
        <Col>
          <h3>About me</h3>
          <p>
            Hi there! I am a Brazilian guy with almost two years of experience in software development. Before that, I worked as a personal trainer for 8 years and decided to change careers after getting my specialization degree. I love to challenge myself by solving logic questions and developing APIs for everything.
          </p>
        </Col>
        <Col>
          <div className={classes.imgContainer}>
            <Image
              className={classes.profileImg}
              src={profile}
              alt='Profile Picture'
              priority
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
