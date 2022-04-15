import React from "react";
import "../style/Complaint.css";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import image1 from "../assets/Mouse.png";
import image2 from "../assets/keyboard.png";
import image3 from "../assets/headphone.png";
import person from "../assets/person.jpg";
import person2 from "../assets/person2.jpg";

const Complain = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Card className="style-card">
            <div className="chat-card">
              <div>
                <Card.Img src={person} className="client-profile" />
              </div>
              <div className="admin-chat">
                <span>Admin</span>
                <p style={{ color: "#ABABAB", fontSize: "13px" }}>
                  Yes, Is there anything I can help
                </p>
              </div>
            </div>
          </Card>
          <Card className="style-card2">
            <div className="chat-card">
              <div>
                <Card.Img src={person2} className="client-profile" />
              </div>
              <div className="admin-chat">
                <span>Bahri</span>
                <p style={{ color: "#ABABAB", fontSize: "13px" }}>
                  Hello Admin
                </p>
              </div>
            </div>
          </Card>
        </Col>
        <Col className="vertical-line">
          <div>
            <Form.Control
              className="message"
              type="text"
              placeholder="Send Message"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Complain;
