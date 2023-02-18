import Selector from "./Selector";

export default function FilterSection(props) {
  const prices = [
    { value: "1", label: "5,000 Rs. - 20,000 Rs." },
    { value: "2", label: "22,000 Rs. - 40,000 Rs." },
    { value: "3", label: "45,000 Rs. - 60,000 Rs." },
    { value: "4", label: "61,000 Rs. +" },
  ];
  const property = [
    { value: "1", label: "House" },
    { value: "2", label: "Apartment" },
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
              value={props.inputLocation}
              onChange={(e) => props.setInputLocation(e.target.value)}
              className="text-primary-blue font-semibold border border-slate-200 p-1 rounded-md"
            ></input>
          </div>
          {hr}
          {/* Choose Date */}
          <div className="flex flex-col w-[20%] p-2">
            <h3 className="text-light-blue font-semibold">When</h3>
            <div className="flex items-center justify-between">
              <h2 className="text-primary-blue font-semibold">
                {props.inputDate ? props.inputDate : "Select Move-in Date"}
              </h2>
              <input
                className="w-5"
                type="date"
                value={props.inputDate}
                onChange={(e) => props.setInputDate(e.target.value)}
              ></input>
            </div>
          </div>
          {hr}
          {/* Choose Price  */}
          <Selector
            heading="Price"
            default="All"
            options={prices}
            input={props.inputPrice}
            setInput={props.setInputPrice}
          />
          {hr}
          {/* Choose Property Type  */}
          <Selector
            heading="Property Type"
            default="All"
            options={property}
            input={props.inputType}
            setInput={props.setInputType}
          />
          {hr}
          <button
            type="button"
            onClick={props.handleForm}
            className="bg-primary-blue text-slate-100 font-semibold py-2 px-4 rounded-md"
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
}
