import React from 'react';
import { Container } from 'react-bootstrap';

const Nopage = () => {
    // No page found component 
    return (
        <Container>
            <h1 className="m-5 p-5 text-center">Sorry, Your searching pages in not found. </h1>
        </Container>
    );
};

export default Nopage;