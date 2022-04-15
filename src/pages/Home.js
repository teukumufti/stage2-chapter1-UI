import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Home.css";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import image1 from "../assets/Mouse.png";
import image2 from "../assets/keyboard.png";
import image3 from "../assets/headphone.png";

const Home = () => {
  return (
    <Container style={{ marginLeft: "40px" }}>
      <h4 className="title-home"> Product</h4>
      <div className="Card">
        <div>
          <Card className="styleCard1">
            <Link to="/detail">
              <Card.Img variant="top" src={image1} />
            </Link>
            <Card.Body>
              <Card.Title style={{ color: "#F74D4D" }}>Mouse</Card.Title>
              <Card.Text>Rp.500.000</Card.Text>
              <Card.Text>Stock : 600</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className="styleCard2">
            <Link to="/detail">
              <Card.Img variant="top" src={image2} />
            </Link>
            <Card.Body>
              <Card.Title style={{ color: "#F74D4D" }}>Keyboard</Card.Title>
              <Card.Text>Rp.700.000</Card.Text>
              <Card.Text>Stock : 500</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className="styleCard2">
            <Link to="/detail">
              <Card.Img variant="top" src={image3} />
            </Link>
            <Card.Body>
              <Card.Title style={{ color: "#F74D4D" }}>Headphone</Card.Title>
              <Card.Text>Rp.1.700.000</Card.Text>
              <Card.Text>Stock : 150</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default Home;
