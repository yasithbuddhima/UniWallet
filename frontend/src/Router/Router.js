import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../Pages/Landing/LandingPage";
import RootLayout from "../Layouts/RootLayout";
import DashBoard from "../Pages/DashBoard/Dasboard";
import ExpensePage from "../Pages/Expenses/ExpensesPage";
import RemindersPage from "../Pages/Reminders/RemindersPage";
import ProfilePage from "../Pages/Profile/ProfilePage";
import Authpage from "../Pages/Auth/AuthPage";

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
    // TODO: Pass this parameter to the auth page correctly
    //  login , signup
    path: "auth/:mode",
    element: <Authpage />,
    // TODO: Implement a loader to prevent logged in users to access here
    loader: null,
  },
  {
    element: <RootLayout />,
    // TODO: Implement requireAuth function to validate user
    loader: null,
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
