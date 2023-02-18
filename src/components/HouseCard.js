import { RiHeartFill, RiHeartLine } from "react-icons/ri";
import { IoBedSharp } from "react-icons/io5";
import { MdOutlineBathtub } from "react-icons/md";
import { BiBuildingHouse } from "react-icons/bi";

export default function HouseCard(props) {
  return (
    <div className="flex flex-col w-1/3 p-4">
      <div>
        <img className=" rounded-t-lg min-h-[16rem]" src={props.image}></img>
        {/* <span className=" bg-purple-500">{props.isPopular && "Popular"}</span> */}
      </div>
      <div className="flex flex-col p-5 bg-white text-primary-blue">
        <div className="flex items-center justify-between">
          <h3 className="text-primary-blue font-extrabold text-lg tracking-wide">
            {props.price}
            <span className="text-sm font-semibold">/month</span>
          </h3>
          <RiHeartLine className="w-6 h-6 p-1 border border-light-blue rounded-full" />
        </div>
        <h2 className="text-text-blue text-xl font-extrabold">{props.name}</h2>
        <p className="text-light-blue font-medium tracking-wide text-sm">
          {props.address}, {props.location}
        </p>
        <div className="flex justify-between text-sm mt-4 font-semibold">
          <p className="flex items-center">
            <IoBedSharp className="mr-1" />
            {props.beds} Beds
          </p>
          <p className="flex items-center">
            <MdOutlineBathtub className="mr-1" />
            {props.bathrooms} Bathrooms
          </p>
          <p className="flex items-center">
            <BiBuildingHouse className="mr-1" />
            {props.area} m<sup>2</sup>
          </p>
        </div>
      </div>
    </div>
  );
}
