import React from 'react';
import { Container } from 'react-bootstrap';

// Dashboard Welcome Massage
const Welcome = () => {
    return (
        <Container className='text-center my-3'>
            <h1>Welcome to Your Dashboard </h1>
            <h3>You can got a better exprience with this dashboard.</h3>
        </Container>
    );
};

export default Welcome;