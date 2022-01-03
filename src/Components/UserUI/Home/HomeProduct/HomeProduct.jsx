import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ProductItem from '../../ProductItem/ProductItem';
import '../../ProductItem/ProductItem.css'

// Home page Product component  

const HomeProduct = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://morning-refuge-65051.herokuapp.com/food')
            .then(res => res.json())
            .then(data => setServices(data.slice(0, 6)));
    }, [services]);

    return (
        <Container className="my-5 py-3">
            <h1 className="text-center heading py-3"> <span className='span'>Our <span className="text-primary">Foods</span></span></h1>
            {/* Bootstrap responsive row */}
            <Row xs={1} md={2} xl={3} className="g-4 py-4">
                {
                    // mappimg data from services 
                    services.map(service => <ProductItem key={service._id} service={service}></ProductItem>)
                }
            </Row>
        </Container>
    );
};

export default HomeProduct;