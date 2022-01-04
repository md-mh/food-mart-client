import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row, Button, Offcanvas } from "react-bootstrap";
import Filter from "../Filter/Filter";
import ProductItem from "../ProductItem/ProductItem";
import './Products.css'
import { RiMenu3Fill } from "react-icons/ri";

// Product Page component

const Products = () => {

  const [showCanvas, setshowCanvas] = useState(false);
  const handleClose = () => setshowCanvas(false);
  const handleShow = () => setshowCanvas(true);

  const [foods, setFoods] = useState([]);
  const [displayFoods, setDisplayFoods] = useState([]);
  // product filters state
  const [show, setShow] = useState(false);
  const [categories, setCategories] = useState("allCategory");
  useEffect(() => {
    fetch("https://morning-refuge-65051.herokuapp.com/food")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  const handelSearch = (event) => {
    event.preventDefault();
    const getSearch = event.target.value;
    const getFoods = foods.filter((food) =>
      food.title.toLowerCase().includes(getSearch.toLowerCase())
    );
    setDisplayFoods(getFoods);
  };
  // filter functions
  const handleSellsAscending = () => {
    show === false ? setShow(true) : setShow(false);
    foods.sort(function (a, b) {
      return a.totalSell - b.totalSell;
    });
  };
  const handleSellsDescending = () => {
    show === false ? setShow(true) : setShow(false);
    foods.sort(function (a, b) {
      return b.totalSell - a.totalSell;
    });
  };
  const handlePriceAscending = () => {
    show === false ? setShow(true) : setShow(false);
    foods.sort(function (a, b) {
      return a.price - b.price;
    });
  };
  const handlePriceDescending = () => {
    show === false ? setShow(true) : setShow(false);
    foods.sort(function (a, b) {
      return b.price - a.price;
    });
  };
  const handleCategory = (category) => {
    setCategories(category);
  };
  const handleClearFilter = () => {
    setCategories("allCategory");
  };
  return (
    <>
      <Row>
        <Col md={2} className="filterMenu">
          <Filter
            handleSellsAscending={handleSellsAscending}
            handleSellsDescending={handleSellsDescending}
            handlePriceAscending={handlePriceAscending}
            handlePriceDescending={handlePriceDescending}
            handleCategory={handleCategory}
            handleClearFilter={handleClearFilter}
          ></Filter>
        </Col>
        <Col md={10}>
          <Container>

            <Row className="d-flex justify-content-center align-items-center">
              <Col xm={10} sm={10} className="my-4 px-5">
                <h1 className="heading my-5"><span className="span">Order fresh <span className="text-primary">food</span></span></h1>
              </Col>
              <Col xm={2} sm={2}>
                <Button
                  variant='light'
                  className='filterCanvas'
                  onClick={handleShow}>
                  <RiMenu3Fill />
                </Button>

                {/* Filter Content Components for Mobile Device */}
                <Offcanvas show={showCanvas} onHide={handleClose}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title></Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Filter
                      handleSellsAscending={handleSellsAscending}
                      handleSellsDescending={handleSellsDescending}
                      handlePriceAscending={handlePriceAscending}
                      handlePriceDescending={handlePriceDescending}
                      handleCategory={handleCategory}
                      handleClearFilter={handleClearFilter}
                    ></Filter>
                  </Offcanvas.Body>
                </Offcanvas>
              </Col>

            </Row>

            <Form.Control
              type="text"
              onChange={handelSearch}
              id="search"
              placeholder="Search our fresh foods"
              style={{ width: "70%" }}
            />

            {/* Bootstrap responsive row */}
            <Row xs={1} md={2} lg={3} className="g-4 py-4">
              {
                // mappimg data from Foods
                categories === "allCategory" &&
                (displayFoods.length === 0
                  ? foods.map((food) => (
                    <ProductItem key={food._id} food={food}></ProductItem>
                  ))
                  : displayFoods.map((food) => (
                    <ProductItem key={food._id} food={food}></ProductItem>
                  )))
              }
              {/* fish category filter */}
              {
                // mappimg data from Foods
                categories === "fish" &&
                (displayFoods.length === 0
                  ? foods
                    .filter((food) => food.category === "Fish")
                    .map((food) => (
                      <ProductItem key={food._id} food={food}></ProductItem>
                    ))
                  : displayFoods
                    .filter((food) => food.category === "Fish")
                    .map((food) => (
                      <ProductItem key={food._id} food={food}></ProductItem>
                    )))
              }
              {/* meat category filter */}
              {
                // mappimg data from Foods
                categories === "meat" &&
                (displayFoods.length === 0
                  ? foods
                    .filter((food) => food.category === "Meat")
                    .map((food) => (
                      <ProductItem key={food._id} food={food}></ProductItem>
                    ))
                  : displayFoods
                    .filter((food) => food.category === "Meat")
                    .map((food) => (
                      <ProductItem key={food._id} food={food}></ProductItem>
                    )))
              }
              {/* fruits category filter */}
              {
                // mappimg data from Foods
                categories === "fruits" &&
                (displayFoods.length === 0
                  ? foods
                    .filter((food) => food.category === "Fruits")
                    .map((food) => (
                      <ProductItem key={food._id} food={food}></ProductItem>
                    ))
                  : displayFoods
                    .filter((food) => food.category === "Fruits")
                    .map((food) => (
                      <ProductItem key={food._id} food={food}></ProductItem>
                    )))
              }
              {/* vegetables category filter */}
              {
                // mappimg data from Foods
                categories === "vegetables" &&
                (displayFoods.length === 0
                  ? foods
                    .filter((food) => food.category === "Vegetables")
                    .map((food) => (
                      <ProductItem key={food._id} food={food}></ProductItem>
                    ))
                  : displayFoods
                    .filter((food) => food.category === "Vegetables")
                    .map((food) => (
                      <ProductItem key={food._id} food={food}></ProductItem>
                    )))
              }
            </Row>
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default Products;
