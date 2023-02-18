import { useState } from "react";
import Selector from "./Selector";

export default function FilterSection(props) {
  const [inputDate, setInputDate] = useState("");
  const prices = [
    { value: "1", label: "5K Rs. - 20K Rs." },
    { value: "2", label: "22K Rs. - 40K Rs." },
    { value: "3", label: "45K Rs. - 60K Rs." },
    { value: "4", label: "61K Rs. +" },
  ];
  const property = [
    { value: "1", label: "House" },
    { value: "2", label: "Flat" },
    { value: "3", label: "Bungalow" },
    { value: "4", label: "Villas" },
  ];
  const hr = (
    <div className="h-16 w-[2px] bg-slate-400 bg-opacity-20 rounded-md"></div>
  );

  return (
    <>
      <div className="w-9/12 mx-auto my-10 flex flex-col">
        <div className="flex justify-between">
          <h1 className="text-3xl font-extrabold">Search properties to rent</h1>
          <div className="flex items-center">
            <input
              type="search"
              placeholder="Search with Search Bar"
              value={props.searchInput}
              onChange={(e) => props.setSearchInput(e.target.value)}
              className="border-2 w-full border-light-blue rounded-md py-2 pl-2 pr-4 text-sm font-semibold"
            ></input>
          </div>
        </div>
        <form className="flex bg-white justify-between p-6 my-6 rounded-md items-center">
          {/* Location Search */}
          <div className="flex flex-col w-2/12 p-2">
            <h3 className="text-light-blue font-semibold">Location</h3>
            <input
              type="text"
              placeholder="Enter a location"
              className="text-primary-blue font-semibold border border-slate-200 p-1 rounded-md"
            ></input>
          </div>
          {hr}
          {/* Choose Date */}
          <div className="flex flex-col w-[20%] p-2">
            <h3 className="text-light-blue font-semibold">When</h3>
            <div className="flex items-center justify-between">
              <h2 className="text-primary-blue font-semibold">
                {inputDate ? inputDate : "Select Move-in Date"}
              </h2>
              <input
                className="w-5"
                type="date"
                value={inputDate}
                onChange={(e) => setInputDate(e.target.value)}
              ></input>
            </div>
          </div>
          {hr}
          {/* Choose Price  */}
          <Selector heading="Price" default="All" options={prices} />
          {hr}
          {/* Choose Property Type  */}
          <Selector heading="Property Type" default="All" options={property} />
          {hr}
          <button
            type="submit"
            className="bg-primary-blue text-slate-100 font-semibold py-2 px-4 rounded-md"
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
}
