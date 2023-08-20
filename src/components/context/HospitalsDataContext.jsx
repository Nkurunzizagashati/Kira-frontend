import axios from "axios";
const { createContext, useState, useEffect } = require("react");

const HospitalsDataContext = createContext();

const HospitalsDataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [hospitalId, setHospitalId] = useState("");
  const [scheduledEvents, setScheduledEvents] = useState([]);
  const [showCalendar, setShowCalendar] = useState(false);
  const [serviceId, setServiceId] = useState("");
  const [showRegistration, setShowRegistration] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchHospitals = async () => {
    try {
      const hospitals = await axios.get(
        "https://kira-services-api.onrender.com/api/hospitals"
      );
      setData(hospitals.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHospitals();
  }, []);
  return (
    <HospitalsDataContext.Provider
      value={{
        data,
        fetchHospitals,
        searchValue,
        setSearchValue,
        setData,
        filteredData,
        setFilteredData,
        hospitalId,
        setHospitalId,
        scheduledEvents,
        setScheduledEvents,
        showCalendar,
        setShowCalendar,
        serviceId,
        setServiceId,
        showRegistration,
        setShowRegistration,
        loading,
      }}
    >
      {children}
    </HospitalsDataContext.Provider>
  );
};

export { HospitalsDataContext, HospitalsDataProvider };
