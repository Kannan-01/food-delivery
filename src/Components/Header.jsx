import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../Assets/css/header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" className="navBar">
        <Container>
          <Navbar.Brand className="fw-bold fs-3">Zomato</Navbar.Brand>
          <Nav className="ms-auto fw-bold">
            <Nav.Link>
              <Link to={"/login"} className="text-white text-decoration-none ">
                Login
              </Link>
            </Nav.Link>{" "}
            <Nav.Link>
              <Link
                to={"/restaurant/login"}
                className="text-white text-decoration-none "
              >
                Add restaurant
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
