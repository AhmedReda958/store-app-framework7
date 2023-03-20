import React from "react";
import {
  Page,
  Navbar,
  BlockTitle,
  Block,
  useStore,
  Card,
} from "framework7-react";
import ProductCard from "../components/productCard";

const ProductPage = (props) => {
  const productId = props.f7route.params.id;
  const products = useStore("products");
  var currentProduct;
  products.forEach(function (product) {
    if (product.id == productId) {
      currentProduct = product;
    }
  });

  return (
    <Page name="product">
      <Navbar title={currentProduct.title} backLink="Back" />
      <BlockTitle>About {currentProduct.title}</BlockTitle>
      <Block>
        <img src={currentProduct.images[0]} alt="" width={"100%"} />
      </Block>
      <Block strong>{currentProduct.description || "wellcome"}</Block>
    </Page>
  );
};

export default ProductPage;
