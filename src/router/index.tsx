import { createBrowserRouter } from "react-router";
import App from "../App";
import Cart from "../components/cart";
import EmptyFavorites from "../components/favorites";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <div>el1</div>,
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
