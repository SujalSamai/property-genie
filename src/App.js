import FilterSection from "./components/FilterSection";
import Houses from "./components/Houses";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [inputLocation, setInputLocation] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputType, setInputType] = useState("");
  const [filterArr, setFilterArr] = useState({
    location: "",
    date: "",
    price: "",
    type: "",
  });

  function handleForm() {
    setFilterArr({
      location: inputLocation,
      date: inputDate,
      price: inputPrice,
      type: inputType,
    });
  }

  return (
    <div className="font-manrope text-text-blue bg-light-blue bg-opacity-20 min-h-screen">
      <Navbar />
      <FilterSection
        setSearchInput={setSearchInput}
        setInputLocation={setInputLocation}
        setInputDate={setInputDate}
        setInputPrice={setInputPrice}
        setInputType={setInputType}
        inputPrice={inputPrice}
        inputType={inputType}
        inputLocation={inputLocation}
        inputDate={inputDate}
        handleForm={handleForm}
      />
      <Houses
        searchInput={searchInput}
        inputLocation={inputLocation}
        inputDate={inputDate}
        inputPrice={inputPrice}
        inputType={inputType}
        filterArr={filterArr}
      />
    </div>
  );
}

export default App;
