import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar className="text-right" bg="light" expand="lg">
      <Link to="/" className="navbar-brand ml-3">
        لگو
      </Link>
      <Navbar.Toggle className="border-0" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Link className="nav-link" to="/">
            خانه
          </Link>
          <Link className="nav-link" to="/FAQ">
            سوالات متداول
          </Link>
          <Link className="nav-link" to="/contact">
            ارتباط با ما
          </Link>
        </Nav>
        <Form className="mr-auto" inline>
          <FormControl type="text" placeholder="جستجو..." className="mr-sm-2" />
          <Button variant="outline-success">جستجو</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
