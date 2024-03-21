import { Container } from "react-bootstrap";
import classes from "./logo.module.css";
import logo from "../../assets/header/logo.png";
import Image from "next/image";
export default function Logo() {
  return (
    <Container className={classes.headerContainer}>
      <Image src={logo} alt={"Logo"} className={classes.logoImg}/>
    </Container>
  );
}
