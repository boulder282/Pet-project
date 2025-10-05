import { createBrowserRouter } from "react-router";
import App from "../App";
import Cart from "../components/cart";
import Favorites from "../components/favorites";
import CardBox from "../components/cardBox";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <div>Хуй</div>,
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
