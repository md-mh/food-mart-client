import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Filter from "../Filter/Filter";
import ProductItem from "../ProductItem/ProductItem";

// Product Page component

const Products = () => {
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

  const handleSearch = (event) => {
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
        <Col md={3}>
          <Filter
            handleSellsAscending={handleSellsAscending}
            handleSellsDescending={handleSellsDescending}
            handlePriceAscending={handlePriceAscending}
            handlePriceDescending={handlePriceDescending}
            handleCategory={handleCategory}
            handleClearFilter={handleClearFilter}
          ></Filter>
        </Col>
        <Col md={9}>
          <Container className="my-3 py-3">
            <h1 className="py-3">
              Order the <span className="text-primary">food</span> you need
            </h1>
            <Form.Control
              type="text"
              onChange={handleSearch}
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
