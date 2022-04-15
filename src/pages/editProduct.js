import React from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import "../style/editProduct.css";

const editProduct = () => {
  return (
    <div>
      <h4 className="title-productEdit">Edit Product</h4>
      <Form.Group controlId="formFile" className="form-upload">
        <Form.Control
          type="file"
          className="upload-img"
          placeholder="Upload Image"
        />
      </Form.Group>
      {/*  */}
      <Form.Control
        className="productEdit-form"
        type="text"
        placeholder="Title"
        id="edit-img"
      />
      {/*  */}
      <InputGroup className="productText-input">
        <Form.Control
          className="productText-form"
          type="text"
          placeholder="Text"
          as="textarea"
          id="input-text"
        />
      </InputGroup>
      {/*  */}
      <Form.Control
        className="productPrice-form"
        type="text"
        placeholder="Price"
        id="input-price"
      />
      {/*  */}
      <Form.Control
        className="productStock-form"
        type="text"
        placeholder="Stock"
        id="input-stock"
      />
      {/*  */}
      <Button className="categoryEdit-button">Save</Button>
    </div>
  );
};

export default editProduct;
