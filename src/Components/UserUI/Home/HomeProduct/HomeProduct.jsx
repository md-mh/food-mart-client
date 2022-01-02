import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ProductItem from "../../ProductItem/ProductItem";

// Home page Product component

const HomeProduct = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("https://morning-refuge-65051.herokuapp.com/food")
      .then((res) => res.json())
      .then((data) => setFoods(data.slice(0, 6)));
  }, []);

  return (
    <Container className="my-5 py-3">
      <h1 className="text-center py-3">
        {" "}
        Our <span className="text-primary">Foods</span>
      </h1>
      {/* Bootstrap responsive row */}
      <Row xs={1} md={2} lg={3} className="g-4 py-4">
        {
          // mappimg data from services
          foods.map((food) => (
            <ProductItem key={food._id} food={food}></ProductItem>
          ))
        }
      </Row>
    </Container>
  );
};

export default HomeProduct;
