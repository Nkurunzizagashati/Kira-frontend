import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "./components/context/authContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HospitalAuthProvider } from "./components/context/HospitalAuthProvider.jsx";
import { HospitalHomeProvider } from "./components/context/HospitalHomeContext.jsx";
import { HospitalsDataProvider } from "./components/context/HospitalsDataContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <HospitalAuthProvider>
          <HospitalHomeProvider>
            <HospitalsDataProvider>
              <App />
            </HospitalsDataProvider>
          </HospitalHomeProvider>
        </HospitalAuthProvider>
      </AuthContextProvider>
    </Router>
    <ToastContainer />
  </React.StrictMode>
);
