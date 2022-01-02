import React, { useRef } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';


// Create Admin Components
const CreateAdmin = () => {

    const emailAddress = useRef();
    const handleAddAdmin = e => {

        const email = emailAddress.current.value;
        const role = 'admin'
        const user = { email, role };
        fetch('https://morning-refuge-65051.herokuapp.com/user/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        alert('User added as an Admin');
        e.target.reset();
        e.preventDefault()
    }
    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={7}>
                    <h1 className="text-center py-3">Add Admin</h1>
                    <Form onSubmit={handleAddAdmin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Enter email" ref={emailAddress} />
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default CreateAdmin;