import { useContext } from "react";
import { HospitalAuthContext } from "../context/HospitalAuthProvider.jsx";

const useHospitalAuth = () => {
  return useContext(HospitalAuthContext);
};

export { useHospitalAuth };
