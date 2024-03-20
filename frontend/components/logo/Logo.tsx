import { Container } from "react-bootstrap";
import classes from "./logo.module.css";

export default function Logo() {
  return (
    <Container className={classes.headerContainer}>
      {/* <div className={classes.headerContainer}> */}
        <h1 className={classes.headerName}>Felipe Duarte</h1>
        <h3 className={classes.headerJob}>Software Developer</h3>
      {/* </div> */}
    </Container>
  );
}
