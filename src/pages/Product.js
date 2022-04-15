import React from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style/Product.css";

const Product = () => {
  return (
    <div>
      <h4 className="title-product">List Product</h4>;
      <div className="list-product">
        <Table bordered size="sm" className="table1">
          <thead className="thead">
            <tr className="tr-color">
              <th>No</th>
              <th>Photo</th>
              <th>Product Name</th>
              <th>Product Desc</th>
              <th>Price</th>
              <th>Qty</th>
              <th style={{ paddingLeft: "36px" }}>Action</th>
            </tr>
          </thead>
          <tbody className="tbody">
            <tr className="tr-1">
              <td>1</td>
              <td>Mouse.jpg</td>
              <td>Mouse</td>
              <td>lorem ipsum mouse ...</td>
              <td>500.000</td>
              <td>500</td>
              <td>
                <Link to="/editproduct">
                  <Button className="editProject" size="sm">
                    Edit
                  </Button>
                </Link>
                <Button className="deleteProject" size="sm">
                  Delete
                </Button>
              </td>
            </tr>
            <tr className="tr-2">
              <td>2</td>
              <td>Keyboard.jpg</td>
              <td>Keyboard</td>
              <td>lorem ipsum keyboard ...</td>
              <td>700.000</td>
              <td>600</td>
              <td>
                <Button className="editProject" size="sm">
                  Edit
                </Button>
                <Button className="deleteProject" size="sm">
                  Delete
                </Button>
              </td>
            </tr>
            <tr className="tr-1">
              <td>3</td>
              <td>Headphone.jpg</td>
              <td>Headphone</td>
              <td>lorem ipsum headphone ...</td>
              <td>1.700.000</td>
              <td>150</td>
              <td>
                <Button className="editProject" size="sm">
                  Edit
                </Button>
                <Button className="deleteProject" size="sm">
                  Delete
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Product;
