import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import useAuth from "../../../../Hooks/useAuth";

// Add Customer Review Components
const AddReview = () => {
<<<<<<< HEAD
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        axios.post('https://morning-refuge-65051.herokuapp.com/review/', data)
        alert('Add Review Successfully');
        reset();
    }
    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={10}>
                    <h2 className="text-center">Add a Review</h2>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" {...register("name")} value={user.displayName} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Your Comment</Form.Label>
                            <Form.Control as="textarea" {...register("comment")} placeholder="Write Your Comment" style={{ height: '150px' }} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Rating (1 to 5)</Form.Label>
                            <Form.Control type="number" {...register("rating")} placeholder="Input a Rating from 1 to 5" min="1" max="5" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
=======
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.post("https://morning-refuge-65051.herokuapp.com/review/", data);
    alert("Add Review Successfully");
    reset();
  };
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={10}>
          <h2 className="text-center">Add a Review</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                {...register("name")}
                value={user.displayName}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Your Comment</Form.Label>
              <Form.Control
                as="textarea"
                {...register("comment")}
                placeholder="Write Your Comment"
                style={{ height: "150px" }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Rating (1 to 5)</Form.Label>
              <Form.Control
                type="number"
                {...register("rating")}
                placeholder="Input a Rating from 1 to 5"
                min="1"
                max="5"
              />
            </Form.Group>
>>>>>>> hafiz

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddReview;
