import React, { useEffect, useState, useRef } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';


// Place Order page Components 
const PlaceOrder = () => {

    const { id } = useParams();
    const [serviceDetails, setServiceDetails] = useState([]);
    useEffect(
        () => {
            fetch(`http://localhost:5000/food/${id}`)
                .then(res => res.json())
                .then(data => setServiceDetails(data))
        }, [id]);

    const { user } = useAuth();

    const mobileRef = useRef();
    const addressRef = useRef();

    const handleOrder = e => {
        e.preventDefault();
        const title = serviceDetails?.title;
        const name = user.displayName;
        const price = user.price;
        const email = user.email;
        const mobile = mobileRef.current.value;
        const address = addressRef.current.value;
        const status = "Pending";

        const newOrder = { name, email, title, price, mobile, address, status };

        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
        alert('Successfully added your Order.');
        e.target.reset();

    }

    return (

        <>
            <Container>
                <Row className="justify-content-center my-5">
                    <h1 className="text-center mb-5">Place your Order</h1>

                    <Col md={5}>

                        <img src={serviceDetails?.img} alt="img" />
                        <h3 className="fw-bold"> {serviceDetails?.title}</h3>
                        <p><span className="fw-bold">Details:</span> {serviceDetails?.details}</p>
                        <p><span className="fw-bold">Price:</span> {serviceDetails?.price}tk</p>

                    </Col>
                    <Col md={2}></Col>
                    <Col md={5}>
                        <Form onSubmit={handleOrder}>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" value={user.displayName} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" value={user.email} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control type="number" placeholder="Write your Mobile number" ref={mobileRef} required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Address</Form.Label>
                                <Form.Control as="textarea" placeholder="Write your address" style={{ height: '100px' }} ref={addressRef} />
                            </Form.Group>
                            <Button variant="info" type="submit" >Place Order</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default PlaceOrder;