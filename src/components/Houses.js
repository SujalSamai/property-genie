import data from "../data";
import HouseCard from "./HouseCard";

export default function Houses(props) {
  let search = props.searchInput.toLowerCase();
  // let lowerPrice, upperPrice;
  // if (props.filterArr) {
  //   if (props.filterArr.price == "5,000Rs. - 20,000Rs.") {
  //     lowerPrice = "5,000 Rs.";
  //     upperPrice = "20,000 Rs.";
  //     console.log(lowerPrice, upperPrice);
  //   } else if (props.filterArr.price == "61,000 Rs. +") {
  //     lowerPrice = "61,000 Rs.";
  //     upperPrice = "100,000 Rs.";
  //     console.log(lowerPrice, upperPrice);
  //   } else if (props.filterArr.price == "22,000Rs. - 40,000Rs.") {
  //     lowerPrice = "22,000 Rs.";
  //     upperPrice = "40,000 Rs.";
  //     console.log(lowerPrice, upperPrice);
  //   } else if (props.filterArr.price == "45,000Rs. - 60,000Rs.") {
  //     lowerPrice = "45,000 Rs.";
  //     upperPrice = "60,000 Rs.";
  //     console.log(lowerPrice, upperPrice);
  //   }
  // }

  return (
    <div className="w-9/12 m-auto flex flex-wrap">
      {!props.filterArr
        ? data
            .filter(
              (property) =>
                property.name.toLowerCase().includes(search) ||
                property.location.toLowerCase().includes(search) ||
                property.address.toLowerCase().includes(search)
            )
            .map((property) => {
              return (
                <HouseCard
                  key={property.name}
                  type={property.type}
                  isPopular={property.isPopular}
                  image={property.image}
                  price={property.price}
                  name={property.name}
                  address={property.address}
                  location={property.location}
                  beds={property.beds}
                  bathrooms={property.bathrooms}
                  area={property.area}
                />
              );
            })
        : data
            .filter(
              (property) =>
                property.location
                  .toLowerCase()
                  .includes(props.filterArr.location.toLowerCase()) &&
                property.type
                  .toLowerCase()
                  .includes(props.filterArr.type.toLowerCase())
            )
            .map((property) => {
              return (
                <HouseCard
                  key={property.name}
                  type={property.type}
                  isPopular={property.isPopular}
                  image={property.image}
                  price={property.price}
                  name={property.name}
                  address={property.address}
                  location={property.location}
                  beds={property.beds}
                  bathrooms={property.bathrooms}
                  area={property.area}
                />
              );
            })}
    </div>
  );
}
