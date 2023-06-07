import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const LogIn = () => {
  return (
    <div className="login-signup-css w-100 d-flex align-items-center">
      <Container style={{ width: "25rem" }} className=" login-signup-box p-4">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter the Id</Form.Label>
            <Form.Control type="name" placeholder="enter the id" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Enter the Password</Form.Label>
            <Form.Control type="name" placeholder="enter the Password" />
          </Form.Group>
          <Form.Check className="mt-3" type="checkbox" label="Remember Me" />
          <Link to="/">
            <Button className="mb-2  " variant="outline-danger">
              LogIn
            </Button>
          </Link>
          <span>
            <Form.Text mute>New to Car Rentals?</Form.Text>
            <Link to="/SignUp">SignUp Here</Link>
          </span>
          <Form.Text style={{ color: "red" }} id=""></Form.Text>
        </Form>
      </Container>
    </div>
  );
};
