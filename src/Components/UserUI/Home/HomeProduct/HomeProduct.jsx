import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ProductItem from "../../ProductItem/ProductItem";
import "../../ProductItem/ProductItem.css";

// Home page Product component

const HomeProduct = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("https://morning-refuge-65051.herokuapp.com/food")
      .then((res) => res.json())
      .then((data) => setFoods(data.slice(0, 6)));
  }, [foods]);

  console.log(foods.length);
  return (
    <Container className="my-5 py-3">
      <h1 className="text-center heading py-3">
        {" "}
        <span className="span">
          Our <span className="text-primary">Foods</span>
        </span>
      </h1>
      {/* Bootstrap responsive row */}
      <Row xs={1} md={2} xl={3} className="g-4 py-4">
        {
          // mappimg data from foods
          foods.map((food) => (
            <ProductItem key={food._id} food={food}></ProductItem>
          ))
        }
      </Row>
    </Container>
  );
};

export default HomeProduct;
