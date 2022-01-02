import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';


// Add a Product page Components 
const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        axios.post('http://localhost:5000/food', data)
        alert('Add Product Successfully');
        reset();
    }
    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={10}>
                    <h2 className="text-center">Add a Product</h2>
                    <Form onSubmit={handleSubmit(onSubmit)}>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type="text" {...register("title")} placeholder="Product Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Product Details</Form.Label>
                            <Form.Control as="textarea" {...register("details")} placeholder="Write Product details" style={{ height: '150px' }} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Product Price</Form.Label>
                            <Form.Control type="number" {...register("price")} placeholder="Product Price" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Product image url</Form.Label>
                            <Form.Control type="url"  {...register("img")} placeholder="Product image url" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>

                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default AddProduct;