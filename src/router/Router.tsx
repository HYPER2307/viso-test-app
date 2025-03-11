import { RouteObject, useRoutes } from "react-router";
import { PageWrapper } from "../components/PageWrapper";
import { PATHNAMES } from "../constants/pathnames";
import AllMeals from "../pages/AllMeals";
import Cart from "../pages/Cart";
import ProductPage from "../pages/ProductPage";

const ROUTES: RouteObject[] = [
  {
    element: <PageWrapper />,
    path: PATHNAMES.HOME,
    children: [
      {
        element: <AllMeals />,
        index: true,
      },
      {
        path: PATHNAMES.PRODUCT_PAGE,
        children: [
          {
            element: <ProductPage />,
            path: ":productId",
            index: true,
          },
        ],
      },
      {
        path: PATHNAMES.CART,
        element: <Cart />,
      },
    ],
  },
];

const AppRoutes = () => useRoutes(ROUTES);

export default AppRoutes;
