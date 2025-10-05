import { createBrowserRouter } from "react-router";
import App from "../App";
import Cart from "../components/cart";
import Favorites from "../components/favorites";
import CategoryBox from "../components/categoryBox";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <CategoryBox />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: ":id",
        element: <div>elId</div>,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
    ],
  },
]);
