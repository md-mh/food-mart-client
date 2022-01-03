import axios from "axios";
import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

// Add a Product page Components
const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const productSms = () => {
    Swal.fire("Well Done", "Add Product Successfully", "success");
  };
  const onSubmit = (data) => {
    axios.post("https://morning-refuge-65051.herokuapp.com/food", data);
    productSms();
    reset();
  };
  return (
    <Container>
      <Row className='justify-content-center'>
        <Col md={10}>
          <h2 className='text-center heading mb-5'><span className="span">Add a Product</span></h2>
          <Form className="py-5 rounded-3 shadow-lg" style={{ textAlign: "left" }} onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className='mb-3 w-100' controlId='formBasicPassword'>
              <Form.Label className="fs-4">Product Name</Form.Label>
              <Form.Control
                type='text'
                {...register("title")}
                placeholder='Product Name'
              />
            </Form.Group>
            <Form.Group className='mb-3 w-100' controlId='formBasicPassword'>
              <Form.Label className="fs-4">Product Details</Form.Label>
              <Form.Control
                as='textarea'
                {...register("details")}
                placeholder='Write Product details'
                style={{ height: "150px" }}
              />
            </Form.Group>
            <Form.Group className='mb-3 w-100' controlId='formBasicPassword'>
              <Form.Label className="fs-4">Product Price</Form.Label>
              <Form.Control
                type='number'
                {...register("price")}
                placeholder='Product Price'
              />
            </Form.Group>
            <Form.Group className='mb-3 w-100' controlId='formBasicPassword'>
              <Form.Label className="fs-4">Product image url</Form.Label>
              <Form.Control
                type='url'
                {...register("img")}
                placeholder='Product image url'
              />
            </Form.Group>
            <button className='btn my-btn' type='submit'>
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

export default AddProduct;
