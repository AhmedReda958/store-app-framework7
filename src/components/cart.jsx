import React from "react";
import { List, ListItem, useStore } from "framework7-react";

const Cart = () => {
  const data = useStore("cart");
  return (
    <List mediaList>
      {data.length == 0
        ? "your cart items goes here"
        : data.map((product, index) => (
            <ListItem
              key={index}
              link="#"
              title={product.title}
              after={product.price + "$"}
              subtitle={product.prand}
              text={product.description}
            >
              <img slot="media" src={product.thumbnail} width="80" />
            </ListItem>
          ))}
    </List>
  );
};

export default Cart;
