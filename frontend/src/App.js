import { RouterProvider } from "react-router-dom";
import router from "./Router/Router";
import { DeviceProvider } from "./context/DeviceContext";

function App() {
  return (
    <>
      <DeviceProvider>
        <RouterProvider router={router} />
      </DeviceProvider>
    </>
  );
}

export default App;
