import React, { useState } from 'react';
import { Form, Button, Row, Container, Col } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Sociallogin from './Sociallogin';

const Registration = () => {
    const { error, registrationUsingEmail } = useAuth();

    const [loginData, setLoginData] = useState({});

    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleRegistration = e => {
        registrationUsingEmail(loginData.name, loginData.email, loginData.password, history);
        e.preventDefault();
    }
    return (
        <Container>
            {/* Registration form  */}
            <br /> <h2 className="text-center">Please  Registration </h2>

            <Row className="my-5 d-flex align-items-center">
                <Col md={{ span: 4, offset: 1 }}>
                    <img src="https://i.ibb.co/GsZbgSF/login.png" alt="Login-img" />
                </Col>

                <Col md={{ span: 4, offset: 1 }}>
                    {/* registration form  */}
                    <Form onSubmit={handleRegistration}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control onBlur={handleOnBlur} name='name' type="text" placeholder="Enter your nickname" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={handleOnBlur} name='email' type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={handleOnBlur} name='password' type="password" placeholder="Password" />
                        </Form.Group>
                        <p className="text-danger">{error}</p>
                        <Button variant="primary" type="submit">Submit</Button>
                        <br /><br />
                        <span>Already have an Account <Link to="/login"> Please Login</Link> </span>
                    </Form>
                    {/* social login component  */}
                    <Sociallogin></Sociallogin>
                </Col>
            </Row>
        </Container>
    );
};

export default Registration;