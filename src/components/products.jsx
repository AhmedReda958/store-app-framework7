import React from "react";
import { Row, Col, useStore } from "framework7-react";

import ProductCard from "../components/productCard";

const Products = ({ popular }) => {
  const data = useStore("products");
  const products = popular
    ? data.filter((item) => {
        item.category == "laptops";
      })
    : data;

  return (
    <Row>
      {products.map((product, index) => (
        <Col width="100" medium="50" key={index}>
          <ProductCard data={product}>{product.description}</ProductCard>
        </Col>
      ))}
    </Row>
  );
};

export default Products;
