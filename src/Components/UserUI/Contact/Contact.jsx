import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';


// Homepage Contact area 
const Contact = () => {
    return (
        <Container>
            <Row className="justify-content-center my-5 py-3">
                <Col md={8}>
                    <h1 className="text-center "><span className="text-primary">Contact</span> Us</h1> <br />
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="email" placeholder="Enter your Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your Email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Textarea</Form.Label>
                            <Form.Control as="textarea" placeholder="Write your Description" rows={3} />
                        </Form.Group>
                        <Button variant="info" >Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;