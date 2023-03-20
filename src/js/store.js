import { createStore } from "framework7/lite";

const store = createStore({
  state: {
    products: [],
    cart: [],
  },
  getters: {
    products({ state }) {
      return state.products;
    },
    cart({ state }) {
      return state.cart;
    },
  },
  actions: {
    addProduct({ state }, product) {
      state.products = state.products.concat(product);
    },
    addToCart({ state }, product) {
      state.cart = [...state.cart, product];
    },
    removeFromCart({ state }, product) {
      state.cart = state.cart.filter((item) => item.id == product.id);
    },
  },
});
export default store;
