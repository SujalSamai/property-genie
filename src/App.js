import FilterSection from "./components/FilterSection";
import Houses from "./components/Houses";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="font-manrope text-text-blue bg-light-blue bg-opacity-20 min-h-screen">
      <Navbar />
      <FilterSection />
      <Houses />
    </div>
  );
}

export default App;
