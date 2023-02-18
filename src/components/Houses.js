import data from "../data";
import HouseCard from "./HouseCard";

export default function Houses() {
  const propertyData = data.map((property) => {
    return (
      <HouseCard
        key={property.type}
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
  });

  return <div className="w-9/12 m-auto flex flex-wrap">{propertyData}</div>;
}
