import React, { useRef } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  PhotoBrowser,
  Link,
  Block,
  BlockTitle,
  Button,
} from "framework7-react";
import Rate from "./rate";
import store from "../js/store";

const ProductCard = (props) => {
  const data = props.data;
  const photosBrowse = useRef(null);

  const priceBefore = Math.floor(
    data.price + data.price / data.discountPercentage
  );
  return (
    <Card expandable backdrop={false}>
      <CardContent padding={false}>
        <PhotoBrowser
          className="lazy lazy-fade-in"
          photos={data.images}
          theme="dark"
          ref={photosBrowse}
        />
        {/* heading */}
        <div
          className="heading lazy lazy-fade-in"
          style={{ backgroundImage: `url(${data.thumbnail})` }}
          //browse photos
          onClick={() => photosBrowse.current.open()}
        >
          <CardHeader
            textColor="white"
            className="display-block title"
            style={{ width: "90%" }}
          >
            {data.title}
            <br />
            <small style={{ opacity: 0.7, width: "100%" }}>
              {data.price}$
              <span style={{ float: "right" }}>
                save {data.discountPercentage}%
              </span>
            </small>
          </CardHeader>
          {/* close button */}
          <Link
            cardClose
            color="white"
            className="card-opened-fade-in"
            style={{ position: "absolute", right: "15px", top: "15px" }}
            iconF7="xmark_circle_fill"
          />
        </div>
        {/*main content */}
        <div className="card-content-padding">
          <div className="display-flex justify-content-space-between align-items-center">
            <h2>{data.title}</h2>
            <Rate rate={data.rating} />
          </div>
          <div className="price">
            <h3>{data.price}$</h3>
            <p>
              <span className="price-before">{priceBefore}$ </span>
              save {data.discountPercentage}%
            </p>
          </div>
          <Block strong inset>
            <BlockTitle>Description:</BlockTitle>
            <p>{data.description}</p>
          </Block>
          <Block strong inset>
            <BlockTitle>Brand:</BlockTitle>
            <p>{data.brand}</p>
          </Block>
        </div>

        {/* card footer */}
        <CardFooter className="no-border">
          {/* add to cart button */}
          <Button
            fill
            iconF7="cart_badge_plus"
            iconSize="16"
            preloader
            style={{ flex: 1 }}
            onClick={() => store.dispatch("addToCart", data)}
          >
            Add to cart
          </Button>
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
