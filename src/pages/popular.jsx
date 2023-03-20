import React from "react";
import { Page, Navbar, BlockTitle } from "framework7-react";
import Products from "../components/products";

const PopularPage = () => {
  return (
    <Page name="popular">
      <Navbar title="popular" />

      {/* Page content */}
      <BlockTitle>Products:</BlockTitle>
      <Products popular={true} />
    </Page>
  );
};

export default PopularPage;
