import React from "react";
import { Form, Button } from "react-bootstrap";
import "../style/editCategory.css";

const editCategory = () => {
  return (
    <div>
      <h4 className="title-categoryEdit">Edit Category</h4>
      <Form.Control
        className="categoryEdit-form"
        type="text"
        placeholder="Mouse"
        id="edit-category"
      />
      <Button className="categoryEdit-button">Save</Button>
    </div>
  );
};

export default editCategory;
