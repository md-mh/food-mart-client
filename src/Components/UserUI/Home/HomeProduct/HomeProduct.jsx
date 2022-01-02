import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ProductItem from '../../ProductItem/ProductItem';

// Home page Product component  

const HomeProduct = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/food')
            .then(res => res.json())
            .then(data => setServices(data.slice(0, 6)));
    }, []);

    console.log(services.length);
    return (
        <Container className="my-5 py-3">
            <h1 className="text-center py-3"> Our <span className="text-primary">Foods</span></h1>
            {/* Bootstrap responsive row */}
            <Row xs={1} md={2} lg={3} className="g-4 py-4">
                {
                    // mappimg data from services 
                    services.map(service => <ProductItem key={service._id} service={service}></ProductItem>)
                }
            </Row>
        </Container>
    );
};

export default HomeProduct;