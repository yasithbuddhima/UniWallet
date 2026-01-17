import { NavLink, Outlet } from "react-router-dom";
import { ExpenseProvider } from "../context/ExpenseContext";

export default function RootLayout() {
  return (
    <>
      <ExpenseProvider>
        <nav>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/expenses">Expenses</NavLink>
          <NavLink to="/reminders">Reminders</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </nav>

        <main>
          <Outlet />
        </main>
      </ExpenseProvider>
    </>
  );
}
