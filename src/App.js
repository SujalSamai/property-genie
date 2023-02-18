import FilterSection from "./components/FilterSection";
import Houses from "./components/Houses";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="font-manrope text-text-blue bg-light-blue bg-opacity-20 min-h-screen">
      <Navbar />
      <FilterSection
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <Houses searchInput={searchInput} />
    </div>
  );
}

export default App;
