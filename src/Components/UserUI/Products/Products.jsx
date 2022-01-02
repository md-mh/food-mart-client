import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Filter from '../Filter/Filter';
import ProductItem from '../ProductItem/ProductItem';

// Product Page component  

const Products = () => {

    const [foods, setFoods] = useState([]);
    const [displayFoods, setDisplayFoods] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/food')
            .then(res => res.json())
            .then(data => setFoods(data));
    }, []);

    const handelSearch = event => {
        event.preventDefault();
        const getSearch = event.target.value;
        const getFoods = foods.filter(food => food.title.toLowerCase().includes(getSearch.toLowerCase()));
        setDisplayFoods(getFoods)

        console.log(getFoods.length);
    }

    console.log(foods.length);
    return (
        <>
            <Row>
                <Col md={3}>
                    <Filter></Filter>
                </Col>
                <Col md={9}>
                    <Container className="my-3 py-3">
                        <h1 className="py-3">Order the <span className="text-primary">food</span> you need</h1>
                        <Form.Control type="text" onChange={handelSearch} id="search" placeholder="Search our fresh foods" style={{ "width": "70%" }} />

                        {/* Bootstrap responsive row */}
                        <Row xs={1} md={2} lg={3} className="g-4 py-4">
                            {
                                // mappimg data from Foods 
                                displayFoods.length === 0 ?
                                    foods.map(service => <ProductItem key={service._id} service={service}></ProductItem>)
                                    : displayFoods.map(service => <ProductItem key={service._id} service={service}></ProductItem>)
                            }
                        </Row>
                    </Container>
                </Col>
            </Row>

        </>

    );
};

export default Products;