import React from "react";
import { Button, Container } from "react-bootstrap";
import "./Filter.css";
const Filter = ({
  handleSellsAscending,
  handleSellsDescending,
  handlePriceAscending,
  handlePriceDescending,
  handleCategory,
  handleClearFilter,
}) => {
  return (
    <Container>
      <h3 className="mt-5">Filter By</h3>
      <div className="my-3"></div>
      <Button onClick={handleSellsAscending} className="filter-width mt-5">
        Sort By Sell (Ascending)
      </Button>
      <br />
      <br />
      <Button onClick={handleSellsDescending} className="filter-width">
        Sort By Sell (Descending)
      </Button>
      <br />
      <br />
      <Button onClick={handlePriceAscending} className="filter-width">
        Sort By Price (Ascending)
      </Button>
      <br />
      <br />
      <Button onClick={handlePriceDescending} className="filter-width">
        Sort By Price (Descending)
      </Button>
      <br />
      <br />
      <Button
        onClick={() => {
          handleCategory("fish");
        }}
        className="filter-width"
      >
        Fish Category
      </Button>
      <br />
      <br />
      <Button
        onClick={() => {
          handleCategory("meat");
        }}
        className="filter-width"
      >
        Meat Category
      </Button>
      <br />
      <br />
      <Button
        onClick={() => {
          handleCategory("fruits");
        }}
        className="filter-width"
      >
        Fruits Category
      </Button>
      <br />
      <br />
      <Button
        onClick={() => {
          handleCategory("vegetables");
        }}
        className="filter-width"
      >
        Vegetables Category
      </Button>
      <br />
      <br />
      <Button onClick={handleClearFilter} className="filter-width">
        Clear Filters
      </Button>
    </Container>
  );
};

export default Filter;
