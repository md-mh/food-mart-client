import axios from "axios";
import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../../../Hooks/useAuth";

// Add Customer Review Components
const AddReview = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const reviewSms = () => {
    Swal.fire("Well Done", "Add Review Successfully", "success");
  };
  const onSubmit = (data) => {
    axios.post("https://morning-refuge-65051.herokuapp.com/review/", data);
    reviewSms();
    reset();
  };
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={10}>
          <h4 className="heading mb-4">
            <span className="span">Add Review</span>
          </h4>{" "}
          <br />
          <Form
            className="py-5  rounded-3 shadow-lg"
            style={{ textAlign: "left" }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Form.Group className="mb-3 w-100" controlId="formBasicPassword">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                {...register("name")}
                value={user.displayName}
              />
            </Form.Group>
            <Form.Group className="mb-3 w-100" controlId="formBasicPassword">
              <Form.Label>Your Comment</Form.Label>
              <Form.Control
                as="textarea"
                {...register("comment")}
                placeholder="Write Your Comment"
                style={{ height: "150px" }}
              />
            </Form.Group>
            <Form.Group className="mb-3 w-100" controlId="formBasicPassword">
              <Form.Label>Rating (1 to 5)</Form.Label>
              <Form.Control
                type="number"
                {...register("rating")}
                placeholder="Input a Rating from 1 to 5"
                min="1"
                max="5"
              />
            </Form.Group>

            <button className="btn my-btn" type="submit">
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

export default AddReview;
