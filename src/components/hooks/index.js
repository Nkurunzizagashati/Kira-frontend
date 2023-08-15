import { useContext } from "react";
import { NotificationContext } from "../context/Notification.jsx";
import { HospitalHomeContext } from "../context/HospitalHomeContext.jsx";
import { HospitalsDataContext } from "../context/HospitalsDataContext.jsx";

const useNotification = () => {
  return useContext(NotificationContext);
};

const useHospitalHomeProvider = () => {
  return useContext(HospitalHomeContext);
};

const useHospitals = () => {
  return useContext(HospitalsDataContext);
};

export { useNotification, useHospitalHomeProvider, useHospitals };
