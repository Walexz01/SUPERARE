import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LandingPage from "./layout/LandingPage";
import Home from "./pages/Home";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
        ],
      },
      {
        path: "auth",
        element: <Login />,
      },
    ],
  },
]);

export default router;
