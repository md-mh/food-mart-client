import React, { useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Sociallogin from './Sociallogin';

const Login = () => {
    const { error, signInUsingEmail } = useAuth();
    const [loginData, setLoginData] = useState({});

    // handle login redirect 
    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleEmailLogin = e => {
        signInUsingEmail(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }

    return (
        <Container>
            <br /><h2 className="text-center">Please Login</h2>
            <Row className="my-5 d-flex align-items-center">
                <Col md={{ span: 4, offset: 1 }}>
                    <img src="https://i.ibb.co/GsZbgSF/login.png" alt="Login-img" />
                </Col>

                <Col md={{ span: 4, offset: 1 }}>
                    {/* login form  */}
                    <Form onSubmit={handleEmailLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" onBlur={handleOnBlur} type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" onBlur={handleOnBlur} type="password" placeholder="Password" />
                        </Form.Group>
                        <p className="text-danger">{error}</p>
                        <Button variant="primary" type="submit">Submit</Button>
                        <br /><br />
                        <span>Don't have an Account <Link to="/registration"> Please Registration</Link> </span>
                    </Form>
                    {/* social login component  */}
                    <Sociallogin></Sociallogin>
                </Col>
            </Row>

        </Container>
    );
};

export default Login;