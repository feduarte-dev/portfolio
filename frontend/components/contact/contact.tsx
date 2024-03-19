import { Container } from "react-bootstrap";
import classes from "./contact.module.css";
import email from "@/assets/contact/email.png";
import github from "@/assets/contact/github.png";
import whatsapp from "@/assets/contact/whatsapp.png";
import linkedin from "@/assets/contact/linkedin.png";
import Image from "next/image";

export default function ContactC() {
  return (
    <>
      <Container>
        <h1>Contact</h1>

        <div className={classes.contactContainer}>
          <a href='https://www.linkedin.com/in/feduarte-dev/' target='_blank'>
            <Image src={linkedin} alt='Linkedin contact'></Image>
          </a>
          <a href='https://github.com/feduarte-dev' target='_blank'>
            <Image src={github} alt='Github contact'></Image>
          </a>
          <a href='mailto: feduarte.dev@gmail.com' target='_blank'>
            <Image src={email} alt='Email contact'></Image>
          </a>
          <a
            href='http://api.whatsapp.com/send?phone=5553984135250'
            target='_blank'
          >
            <Image src={whatsapp} alt='Whatsapp contact'></Image>
          </a>
        </div>
      </Container>
    </>
  );
}
