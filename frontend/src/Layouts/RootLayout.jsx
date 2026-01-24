import { Outlet } from "react-router-dom";
import Navbar from "../Components/NavBar/NavBar";
import { ExpenseProvider } from "../context/ExpenseContext";
import { ReminderProvider } from "../context/ReminderContext";
import { UserProvider } from "../context/UserContext";

export default function RootLayout() {
  return (
    <>
      <UserProvider>
        <ExpenseProvider>
          <ReminderProvider>
            <Navbar />
            <main>
              <Outlet />
            </main>
          </ReminderProvider>
        </ExpenseProvider>
      </UserProvider>
    </>
  );
}
