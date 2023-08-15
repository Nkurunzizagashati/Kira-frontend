import axios from "axios";
import { createContext, useEffect, useState } from "react";

const HospitalHomeContext = createContext();

const HospitalHomeProvider = ({ children }) => {
  const [hospitalInfo, setHospitalInfo] = useState([]);

  const fetchHospitalInfo = async (token) => {
    console.log(token);
    const res = await axios.get(
      `https://kira-services-api.onrender.com/api/hospitals/profile/${token}`
    );

    setHospitalInfo(res.data);
  };
  useEffect(() => {
    const hospitalToken = localStorage.getItem("hospitalToken");
    hospitalToken && fetchHospitalInfo(hospitalToken);
  }, []);

  return (
    <HospitalHomeContext.Provider value={{ hospitalInfo }}>
      {children}
    </HospitalHomeContext.Provider>
  );
};

export { HospitalHomeContext, HospitalHomeProvider };
