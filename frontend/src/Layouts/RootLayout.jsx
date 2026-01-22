import { NavLink, Outlet } from "react-router-dom";
import { ReminderProvider } from "../context/ReminderContext";

export default function RootLayout() {
  return (
    <>
      <ReminderProvider>
        <nav>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/expenses">Expenses</NavLink>
          <NavLink to="/reminders">Reminders</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </nav>

        <main>
          <Outlet />
        </main>
      </ReminderProvider>
    </>
  );
}
