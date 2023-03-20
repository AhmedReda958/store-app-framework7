import React, { useState } from "react";

import {
  f7,
  f7ready,
  App,
  Panel,
  Views,
  View,
  Popup,
  Page,
  Navbar,
  Toolbar,
  Link,
  Block,
} from "framework7-react";

import routes from "../js/routes";
import store from "../js/store";
import Cart from "./cart";

const MyApp = () => {
  // Framework7 Parameters
  const f7params = {
    name: "My Store", // App name
    theme: "auto", // Automatic theme detection
    // App store
    store: store,
    // App routes
    routes: routes,
    colorTheme: "purple",
  };

  f7ready(() => {
    // Call F7 APIs here
    f7.preloader.show();
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((res) => {
        store.dispatch("addProduct", res.products);
        f7.preloader.hide();
      });
  });

  return (
    <App {...f7params}>
      {/* Right panel with reveal effect*/}
      <Panel right reveal dark>
        <View>
          <Page>
            <Navbar title="Cart" />
            <Cart />
          </Page>
        </View>
      </Panel>

      {/* Views/Tabs container */}
      <Views tabs className="safe-areas">
        {/* Tabbar for switching views-tabs */}
        <Toolbar tabbar labels bottom>
          <Link
            tabLink="#view-home"
            tabLinkActive
            iconIos="f7:compass"
            iconAurora="f7:compass"
            iconMd="f7:compass"
            text="Home"
          />
          <Link
            tabLink="#view-popular"
            iconIos="f7:flame"
            iconAurora="f7:flame"
            iconMd="f7:flame"
            text="Popular"
          />
          <Link
            tabLink="#view-settings"
            iconIos="f7:gear"
            iconAurora="f7:gear"
            iconMd="material:settings"
            text="Settings"
          />
        </Toolbar>

        {/* Your main view/tab, should have "view-main" class. It also has "tabActive" prop */}
        <View id="view-home" main tab tabActive url="/" />

        {/* popular View */}
        <View id="view-popular" name="popular" tab url="/popular/" />

        {/* Settings View */}
        <View id="view-settings" name="settings" tab url="/settings/" />
      </Views>
    </App>
  );
};
export default MyApp;
