import React, { useState } from 'react';
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ProductItem.css'

// Single Product item components

const ProductItem = (props) => {
    // take data using props 
    const { _id, title, price, description, img, category, availableProducts } = props.food;
    const [lgShow, setLgShow] = useState(false);
    return (
        <>
            <Col>
                {/* single service card */}
                <Card className="card">
                    <Card.Img variant="top" src={img} className="card-img" />
                    <Card.Body>

                        <Container>
                            <div className="d-flex justify-content-between align-items-center">
                                <h4>{title}</h4>
                                <span><span className="fw-bold">Cost:</span> {price}tk</span>
                            </div>
                            <br />
                            <div className="d-flex justify-content-between align-items-center">
                                <Button onClick={() => setLgShow(true)}>See Details</Button>
                                <Link to={`/placeOrder/${_id}`}> <Button variant="info"> Buy now </Button> </Link>
                            </div>
                        </Container>

                    </Card.Body>
                </Card>
            </Col >

            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        {title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col>
                                <Card.Img src={img} />
                            </Col>
                            <Col className='py-4'>
                                <p><span className="fw-bold">Details:</span> {description}</p>
                                <p><span className="fw-bold">Category:</span> {category}</p>
                                <p><span className="fw-bold">Available:</span> {availableProducts}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span><span className="fw-bold">Cost:</span> {price}tk</span>
                                    <Link to={`/placeOrder/${_id}`}> <Button variant="info"> Buy now </Button> </Link>
                                </div>

                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </>

    );
};

export default ProductItem;