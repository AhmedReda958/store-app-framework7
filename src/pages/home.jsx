import React from "react";
import {
  Page,
  Navbar,
  NavTitle,
  NavRight,
  Link,
  BlockTitle,
  List,
  ListItem,
} from "framework7-react";
import Products from "../components/products";

const HomePage = () => {
  return (
    <Page name="home">
      {/* Top Navbar */}
      <Navbar sliding={false}>
        <NavTitle sliding>My App</NavTitle>
        <NavRight>
          <Link
            iconIos="f7:cart"
            iconAurora="f7:cart"
            iconMd="f7:cart"
            panelOpen="right"
          />
        </NavRight>
      </Navbar>

      {/* Page content */}
      <BlockTitle>Products:</BlockTitle>
      <Products />
    </Page>
  );
};

export default HomePage;
