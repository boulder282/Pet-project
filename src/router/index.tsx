import { createBrowserRouter } from "react-router";
import App from "../App";

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
        element: <div>cart</div>,
      },
      {
        path: ":id",
        element: <div>elId</div>,
      },
    ],
  },
]);
