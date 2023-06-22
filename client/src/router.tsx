import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LandingPage from "./layout/LandingPage";
import Home from "./pages/home/Home";
import Auth from "./pages/auth/Auth";

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
        element: <Auth />,
      },
    ],
  },
]);

export default router;
