import data from "../data";
import HouseCard from "./HouseCard";

export default function Houses(props) {
  let search = props.searchInput.toLowerCase();
  let lowerPrice = 0,
    upperPrice = 0;
  if (props.filterArr.price.length !== 0) {
    lowerPrice = props.filterArr.price.substring(0, 2);
    upperPrice = props.filterArr.price.substring(13, 15);
    console.log(lowerPrice, upperPrice);
  }
  return (
    <div className="w-9/12 m-auto flex flex-wrap">
      {props.filterArr.location.length === 0
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
                  .includes(props.filterArr.type.toLowerCase()) &&
                parseInt(property.price.substring(0, 2)) >=
                  parseInt(lowerPrice) &&
                parseInt(property.price.substring(0, 2)) <= parseInt(upperPrice)
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
      <div className="mt-10 mb-5 mx-auto text-center">
        <h4 className="font-semibold ">Made by Sujal Samai 💖</h4>
        <p className="font-semibold">with React.js & TailwindCSS</p>
      </div>
    </div>
  );
}
