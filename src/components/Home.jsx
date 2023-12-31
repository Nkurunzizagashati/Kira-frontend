import React from "react";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Navbar from "./Navbar.jsx";
import { useHospitals } from "./hooks";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const { data, filteredData, loading } = useHospitals();

  const shuffleArray = (array) => {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const noFilteredHospitals = () => {
    if (data && data.length > 0) {
      const shuffledData = shuffleArray(data); // Shuffle the data array
      const hospitalsToDisplay = shuffledData.slice(0, 6);

      return hospitalsToDisplay.map((hospital) => (
        <div key={hospital._id} className="col-span-1 p-0 sm:p-4 md:p-2">
          <Card data={hospital} />
        </div>
      ));
    } else {
      return <span>No Hospital available</span>;
    }
  };

  const filteredHospitals = () => {
    return filteredData.map((hospital) => (
      <div key={hospital._id} className="col-span-1 p-0 sm:p-4 md:p-2">
        <Card data={hospital} />
      </div>
    ));
  };

  const renderHospitals = filteredData.length
    ? filteredHospitals()
    : noFilteredHospitals();

  const strings = ["...", "...", "..."];

  return (
    <>
      <Navbar />
      <Header />
      <div className=" xl:px-36">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 justify-center">
          {loading ? (
            <p className=" text-black font-extrabold text-3xl text-center">
              Loading <Typewriter words={strings} />
            </p>
          ) : (
            renderHospitals
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
