import React, { useRef } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import "../../../../index.css";

// Create Admin Components
const CreateAdmin = () => {
  const emailAddress = useRef();
  const adminSms = () => {
    Swal.fire(
      "Well Done",
      "You have successfully User added as an Admin",
      "success"
    );
  };
  const handleAddAdmin = (e) => {
    const email = emailAddress.current.value;
    const role = "admin";
    const user = { email, role };
    fetch("https://morning-refuge-65051.herokuapp.com/user/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });

    adminSms();
    e.target.reset();
    e.preventDefault();
  };
  return (
    <Container>
      <Row className=''>
        <Col md={8} className='py-3 offset-md-2'>
          <h1 className='text-center py-3 mb-4 heading'><span className="span">Make Admin</span></h1>
          <Form
            onSubmit={handleAddAdmin}
            style={{ textAlign: "left" }}
            className='py-4 shadow-lg rounded-3'>
            <Form.Group className='mb-3 w-100' controlId='formBasicEmail'>
              <Form.Label className='fs-2'>Email Address</Form.Label>
              <Form.Control
                name='email'
                type='email'
                placeholder='Enter email'
                ref={emailAddress}
              />
            </Form.Group>
            <button className='btn my-btn fw-bold' type='submit'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateAdmin;
