import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import "../ProductItem/ProductItem.css";

// Place Order page Components
const PlaceOrder = () => {
  const { id } = useParams();
  const [serviceDetails, setServiceDetails] = useState([]);
  console.log(serviceDetails);
  useEffect(() => {
    fetch(`https://morning-refuge-65051.herokuapp.com/food/${id}`)
      .then((res) => res.json())
      .then((data) => setServiceDetails(data));
  }, [id]);

  const { user } = useAuth();

  const mobileRef = useRef();
  const addressRef = useRef();

  const orderSms = () => {
    Swal.fire("Well Done", "You have successfully Order Product", "success");
  };

  const handleOrder = (e) => {
    e.preventDefault();
    const title = serviceDetails?.title;
    const name = user.displayName;
    const price = user.price;
    const email = user.email;
    const mobile = mobileRef.current.value;
    const address = addressRef.current.value;
    const status = "Pending";

    const newOrder = { name, email, title, price, mobile, address, status };

    fetch("https://morning-refuge-65051.herokuapp.com/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newOrder),
    });
    orderSms();
    e.target.reset();
  };

  return (
    <>
      <Container>
        <Row className='justify-content-center my-5'>
          <h1 className='text-center mb-5'>Place Your Order</h1>

          <Col md={6}>
            <img src={serviceDetails?.img} alt='img' />
            <h3 className='fw-bold'> {serviceDetails?.title}</h3>
            <p>
              <span className='fw-bold'>Details:</span>{" "}
              {serviceDetails?.description}
            </p>
            <p>
              <span className='fw-bold'>Price:</span> {serviceDetails?.price}tk
            </p>
          </Col>

          <Col md={6}>
            <Form onSubmit={handleOrder} className='py-5 left my-form'>
              <Form.Group className='mb-3 label' controlId='formBasicName'>
                <Form.Label className='label'>Name</Form.Label>
                <Form.Control
                  className='input'
                  type='text'
                  value={user.displayName}
                />
              </Form.Group>
              <Form.Group className='mb-3 label' controlId='formBasicEmail'>
                <Form.Label className='label'>Email</Form.Label>
                <Form.Control
                  className='input'
                  type='text'
                  value={user.email}
                />
              </Form.Group>

              <Form.Group className='mb-3 label' controlId='formBasicPassword'>
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  className='input'
                  type='number'
                  placeholder='Write your Mobile number'
                  ref={mobileRef}
                  required
                />
              </Form.Group>

              <Form.Group className='mb-3 label' controlId='formBasic'>
                <Form.Label className='label'>Address</Form.Label>
                <Form.Control
                  className='input'
                  as='textarea'
                  placeholder='Write your address'
                  style={{ height: "100px" }}
                  ref={addressRef}
                />
              </Form.Group>
              <button className='btn my-btn' type='submit'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Place Order
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PlaceOrder;
