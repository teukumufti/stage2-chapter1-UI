import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Login.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import image from "../assets/Frame.png";
import { Link } from "react-router-dom";
import FormRegis from "../components/Form/Formregister";

const Register = ({ setPage }) => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="container-img">
            <img src={image} alt="Group.png" className="img" />
            <div className="text">
              <h1>Easy, Fast and Reliable</h1>
              <span>
                Go shopping for merchandise, just go to dumb merch shopping.the
                biggest merchandise in{" "}
                <span style={{ fontWeight: "bold" }}>Indonesia </span>
              </span>
            </div>
          </div>
          <div className="btn-style">
            <Link
              to="/login"
              style={{ color: "white", textDecoration: "none" }}
            >
              <Button className="btn-1" size="sm" type="button">
                Login
              </Button>{" "}
            </Link>
            <Button className="btn-2" size="sm" type="submit">
              Register
            </Button>
          </div>
        </Col>
        <Col>
          <FormRegis />
        </Col>
      </Row>{" "}
    </Container>
  );
};

export default Register;
