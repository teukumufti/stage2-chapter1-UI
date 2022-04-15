import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import image from "../assets/Frame.png";
import "./style/Navbar.css";

function Navigation() {
  return (
    <Navbar className="Navbar" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/home">
            <img src={image} alt="icon" className="image" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          style={{ color: "black", backgroundColor: "white" }}
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Nav className="d-flex">
            {/* category*/}
            <Nav.Link
              className="Nav-link"
              style={{ backgroundColor: "#151515" }}
            >
              <Link
                to="/category"
                style={{ color: "white", textDecoration: "none" }}
              >
                Category
              </Link>
            </Nav.Link>
            {/* /// */}

            {/* product */}
            <Nav.Link
              className="Nav-link"
              style={{ backgroundColor: "#151515" }}
            >
              <Link
                to="/product"
                style={{ color: "white", textDecoration: "none" }}
              >
                Product
              </Link>
            </Nav.Link>
            {/* /// */}

            {/* complaints */}
            <Nav.Link
              className="Nav-link"
              style={{ backgroundColor: "#151515" }}
            >
              <Link
                to="/complain"
                style={{ color: "white", textDecoration: "none" }}
              >
                Complaint
              </Link>
            </Nav.Link>
            {/* /// */}

            {/* profile */}
            <Nav.Link
              className="Nav-link"
              style={{ backgroundColor: "#151515" }}
            >
              <Link
                to="/profile"
                style={{ color: "white", textDecoration: "none" }}
              >
                Profile
              </Link>
            </Nav.Link>
            {/* /// */}

            {/* logout */}
            <Nav.Link
              className="Nav-link"
              style={{ backgroundColor: "#151515" }}
            >
              <Link
                to="/login"
                style={{ color: "white", textDecoration: "none" }}
              >
                Logout
              </Link>
            </Nav.Link>
            {/* /// */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
