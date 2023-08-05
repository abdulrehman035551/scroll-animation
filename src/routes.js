import * as React from "react";
import * as ReactDOM from "react-dom";
import Profile from "./pages/profile";
import App from "./App";
import {
  BrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = (
  <BrowserRouter>
    <RouterProvider router={createBrowserRouter([
      {
        element: <App />,
        children: [
          {
            path: "/Profile",
            element: <Profile />,
          },
        ],
      },
    ])} />
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById("root")).render(router);
