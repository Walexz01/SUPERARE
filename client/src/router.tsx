import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LandingPage from "./layout/LandingPage";
import Home from "./pages/home/Home";
import Auth from "./layout/Auth";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

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
            index: true,
            element: <Home />,
          },
        ],
      },
      {
        path: "auth",
        element: <Auth />,
        children: [
          {
            index: true,
            element: <Login />,
          },
          {
            path: "signup",
            element: <Signup />,
          },
        ],
      },
    ],
  },
]);

export default router;
