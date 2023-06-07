import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Button, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
export function SignUp() {
  return (
    <div className="login-signup-css w-100 d-flex align-items-center">
      <Container style={{ width: "25rem" }} className=" login-signup-box p-4">
        <Form>
          <FormGroup className="mb-4" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control required type="name" placeholder="Enter the Name" />
          </FormGroup>
          <FormGroup className="mb-4" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter the Email" />
          </FormGroup>
          <FormGroup validated className="mb-4" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder=" Enter the Password" />
          </FormGroup>
          <FormGroup className="mb-4" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder=" Confirm Password" />
          </FormGroup>
          <Link to="/LogIn">
            {" "}
            <Button type="submit" variant="outline-danger">
              submit
            </Button>
          </Link>
        </Form>
      </Container>
    </div>
  );
}
