import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../Pages/Landing/LandingPage";
import RootLayout from "../Layouts/RootLayout";
import DashBoard from "../Pages/DashBoard/Dasboard";
import ExpensePage from "../Pages/Expenses/ExpensesPage";
import RemindersPage from "../Pages/Reminders/RemindersPage";
import ProfilePage from "../Pages/Profile/ProfilePage";
import Authpage from "../Pages/Auth/AuthPage";
import { requireAuth } from "../utils/auth";

const router = createBrowserRouter([
  {
    path: "*",
    // TODO: Implement a 404 page
    element: <LandingPage />,
  },
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <Authpage />,
  },
  {
    path: "/signup",
    element: <Authpage />,
  },
  {
    element: <RootLayout />,
    loader: requireAuth,
    children: [
      {
        path: "/dashboard",
        element: <DashBoard />,
      },
      {
        path: "/expenses",
        element: <ExpensePage />,
      },
      {
        path: "/reminders",
        element: <RemindersPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
  },
]);

export default router;
