import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../pages/about/About";
import Award from "../pages/award/Award";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Profile from "../pages/profile/Profile";
import Registration from "../pages/Registration";
import Wallet from "../pages/wallet/Wallet";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/award",
        element: <Award />,
      },
      {
        path: "/wallet",
        element: <Wallet />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
export default router;
