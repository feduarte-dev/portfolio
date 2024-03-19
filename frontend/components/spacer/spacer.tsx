import { Container } from "react-bootstrap";
import classes from "./spacer.module.css";

export default function spacer() {
  return (
    <Container>
      <hr className={classes.spacer} />
    </Container>
  );
}
