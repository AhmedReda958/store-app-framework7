import HomePage from "../pages/home.jsx";
import PopularPage from "../pages/popular";
import ProductPage from "../pages/product.jsx";
import SettingsPage from "../pages/settings.jsx";

import NotFoundPage from "../pages/404.jsx";

var routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/popular/",
    component: PopularPage,
  },
  {
    path: "/product/:id/",
    component: ProductPage,
  },
  {
    path: "/settings/",
    component: SettingsPage,
  },

  {
    path: "(.*)",
    component: NotFoundPage,
  },
];

export default routes;
