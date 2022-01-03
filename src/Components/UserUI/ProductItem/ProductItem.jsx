import React, { useState } from "react";
import { Card, Col, Container, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ProductItem.css";

// Single Product item components

const ProductItem = (props) => {
  // take data using props
  const { _id, title, price, description, img, category, availableProducts } =
    props.service;
  const [lgShow, setLgShow] = useState(false);
  return (
    <>
      <Col>
        {/* single service card */}
        <Card className='card my-card'>
          <div className='img-hover'>
            <Card.Img variant='top' src={img} className='card-img' />
          </div>
          <Card.Body>
            <Container>
              <div className='d-flex justify-content-between align-items-center'>
                <h4>{title}</h4>
                <span className='fw-bold'>Cost: {price}৳</span>
              </div>
              <br />
              <div className='d-flex justify-content-between align-items-center'>
                <button className='btn-buy' onClick={() => setLgShow(true)}>
                  <span>See Details</span>
                </button>
                <Link className='btn-buy' to={`/placeOrder/${_id}`}>
                  {" "}
                  <span>Buy now</span>{" "}
                </Link>
              </div>
            </Container>
          </Card.Body>
        </Card>
      </Col>

      <Modal
        size='lg'
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby='example-modal-sizes-title-lg'>
        <Modal.Header closeButton>
          <Modal.Title id='example-modal-sizes-title-lg'>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <Card.Img src={img} />
              </Col>
              <Col className='py-4'>
                <p>
                  <span className='fw-bold'>Details:</span> {description}
                </p>
                <p>
                  <span className='fw-bold'>Category:</span> {category}
                </p>
                <p>
                  <span className='fw-bold'>Available:</span>{" "}
                  {availableProducts}
                </p>
                <div className='d-flex justify-content-between align-items-center'>
                  <span>
                    <span className='fw-bold'>Cost:</span> {price}tk
                  </span>
                  <Link to={`/placeOrder/${_id}`}>
                    {" "}
                    <button className='btn-buy'>
                      {" "}
                      <span>Buy Now</span>{" "}
                    </button>{" "}
                  </Link>
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
