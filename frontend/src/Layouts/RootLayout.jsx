import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <nav>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/expenses">Expenses</NavLink>
        <NavLink to="/reminders">Reminders</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  );
}
