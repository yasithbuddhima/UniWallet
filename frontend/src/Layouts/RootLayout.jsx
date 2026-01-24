import { Outlet } from "react-router-dom";
import Navbar from "../Components/NavBar/NavBar";
import { ExpenseProvider } from "../context/ExpenseContext";

export default function RootLayout() {
  return (
    <>
      <ExpenseProvider>
        <Navbar />
        <main>
          <Outlet />
        </main>
      </ExpenseProvider>
    </>
  );
}
