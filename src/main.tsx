import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "../src/styles/main.css";
import { DataProvider } from "./context/DataProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <DataProvider>
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </DataProvider>
);
