import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import LoginHospital from "./components/auth/LoginHospital.jsx";
import RegisterHospital from "./components/auth/RegisterHospital.jsx";
import LoginUser from "./components/auth/LoginUser.jsx";
import RegisterUser from "./components/auth/RegisterUser.jsx";
import HospitalHome from "./components/HospitalHome.jsx";
import HospitalPage from "./components/HospitalPage.jsx";
import CalendarPage from "./components/CalendarPage.jsx";
import ViewBookedEvents from "./components/ViewBookedEvents.jsx";
import NotFoundPage from "./components/NotFoundPage.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register-hospital" element={<RegisterHospital />} />
        <Route path="/login-hospital" element={<LoginHospital />} />
        <Route path="/register-user" element={<RegisterUser />} />
        <Route path="/login-user" element={<LoginUser />} />
        <Route path="/hospital-home" element={<HospitalHome />} />
        <Route path="/hospital" element={<HospitalPage />} />
        <Route path="/booking-calendar" element={<CalendarPage />} />
        <Route path="/hospital-home/schedules" element={<ViewBookedEvents />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
