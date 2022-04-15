import React from "react";
import "../components/style/cardTransaction.css";
import { Card } from "react-bootstrap";
import image from "../assets/Frame.png";
import image3 from "../assets/headphone.png";

const cardTransaction = () => {
  return (
    <div>
      <Card className="card-transaction">
        <div className="product-transaction">
          <div>
            <div className="span-display">
              <div>
                <img src={image3} alt="Group.png" className="img-transaction" />
              </div>
              <div>
                <h6>Headphone</h6>

                <span className="span-cardTransaction">
                  <span
                    style={{
                      fontWeight: "bold",
                      color: "#F74D4D",
                      marginLeft: "5px",
                      fontSize: "12px",
                    }}
                  >
                    Saturday,{" "}
                  </span>
                  14 Juli 2021
                </span>
                <br></br>
                <span className="span-price">Price : Rp.500.000</span>
                <br></br>
                <br></br>
                <span className="span-subTotal">Sub Total : 500.000</span>
              </div>
            </div>
          </div>
          <div>
            <img src={image} alt="icon" className="icon-transaction" />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default cardTransaction;
