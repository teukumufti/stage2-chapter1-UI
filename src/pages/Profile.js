import React from "react";
import "../style/Profile.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import imageProfile from "../assets/Drake.jpg";
import Transaction from "../components/cardTransaction";

const Profile = () => {
  return (
    <Container>
      <Row>
        <Col>
          {" "}
          <h4 className="title-profile"> My Profile</h4>
          <Card className="card-profile">
            <div className="style-1">
              <div>
                <img
                  src={imageProfile}
                  alt="Group.png"
                  className="img-profile"
                />
              </div>
              <div>
                <h5 className="text-profile">Name</h5>
                <span className="span-profile">Drake</span>
                {/*  */}
                <h5 className="text-profile">Email</h5>
                <span className="span-profile">champagnepapi@gmail.com</span>
                {/*  */}
                <h5 className="text-profile">Phone</h5>
                <span className="span-profile">083896833122</span>
                {/*  */}
                <h5 className="text-profile">Gender</h5>
                <span className="span-profile">Male</span>
                {/*  */}
                <h5 className="text-profile">Address</h5>
                <p className="p-profile">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </p>
              </div>
            </div>
          </Card>
        </Col>
        <Col>
          <h4 className="title-transaction"> My Transaction</h4>
          <div>
            <Transaction />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
