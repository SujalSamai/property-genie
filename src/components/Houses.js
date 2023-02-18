import data from "../data";
import HouseCard from "./HouseCard";

export default function Houses(props) {
  let search = props.searchInput;

  return (
    <div className="w-9/12 m-auto flex flex-wrap">
      {data
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
        })}
    </div>
  );
}
