"use client";

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import classes from "./header.module.css";
import logo from "../../assets/header/logo.png";
import Image from "next/image";

export default function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      data-bs-theme='dark'
      className={classes.navBarContainer}
    >
      <Container className={classes.linksContainer}>
        <Image src={logo} alt={"Logo"} className={classes.logoImg} />
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className={`me-auto ${classes.navbarCollapse}`}>
            <Nav.Link active={false} href='#about'>About</Nav.Link>
            <Nav.Link active={false} href='#technologies'>Technologies</Nav.Link>
            <Nav.Link active={false} href='#projects'>Projects</Nav.Link>
            <Nav.Link active={false} href='#contact'>Contact</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown
              title='Resume'
              id='collapsible-nav-dropdown'
              className={classes.dropdownContainer}
            >
              <NavDropdown.Item
                href='public/resumes/Felipe Duarte - Resume - en.pdf'
                download='felipe-duarte-resume-us.pdf'
                target='_blank'
              >
                Resume (en-us)
              </NavDropdown.Item>
              <NavDropdown.Item
                href='public/resumes/Felipe Duarte - Resume - ATS - en.pdf'
                download='felipe-duarte-resume-ats-us.pdf'
                target='_blank'
              >
                Resume (en-us) (ATS)
              </NavDropdown.Item>
              <NavDropdown.Item
                href='public/resumes/Felipe Duarte - Currículo - pt.pdf.pdf'
                download='felipe-duarte-curriculo-br.pdf'
                target='_blank'
              >
                Resume (pt-br)
              </NavDropdown.Item>
              <NavDropdown.Item
                href='public/resumes/Felipe Duarte - Currículo - ATS - pt.pdf'
                download='felipe-duarte-curriculo-ats-br.pdf'
                target='_blank'
              >
                Resume (pt-br) (ATS)
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
