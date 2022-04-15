import React from "react";
import "../Form/style/Formregister.css";
import { Form, Button } from "react-bootstrap";

const Forms = () => {
  return (
    <Form className="formRegis">
      <Form.Label className="form-label">Register</Form.Label>
      <Form.Group className="form-email" controlId="formBasicEmail">
        <Form.Control className="form-input" type="email" placeholder="Name" />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="form-email" controlId="formBasicEmail">
        <Form.Control className="form-input" type="email" placeholder="Email" />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="form-password" controlId="formBasicPassword">
        <Form.Control
          className="form-input"
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <Button className="button" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default Forms;
