import logo from "../assets/logo.png";
import { FaChevronDown } from "react-icons/fa";
export default function Navbar() {
  return (
    <div className="p-4 flex items-center shadow px-12">
      <div className="flex w-full">
        <img className="w-32" src={logo} alt="logo"></img>
        <ul className="w-6/12 font-semibold flex justify-around items-center ml-6">
          <li className="bg-light-blue bg-opacity-60 p-2 rounded-md text-primary-blue">
            <a href="#">Rent</a>
          </li>
          <li className="p-2">
            <a href="#">Buy</a>
          </li>
          <li className="p-2">
            <a href="#">Sell</a>
          </li>
          <li className="flex items-center p-2">
            <a className="mr-2" href="#">
              Manage Property
            </a>
            <FaChevronDown />
          </li>
          <li className="flex items-center p-2">
            <a className="mr-2" href="#">
              Resources
            </a>
            <FaChevronDown />
          </li>
        </ul>
      </div>

      <div className="flex w-2/12 justify-evenly h-10">
        <button className="font-semibold text-primary-blue border-2 border-light-blue rounded-md py-2 px-4 hover:bg-primary-blue hover:text-slate-200 hover:border-primary-blue transition-all ease-out duration-200">
          Login
        </button>
        <button className="bg-primary-blue font-semibold border text-slate-200 rounded-md py-2 px-4 hover:bg-slate-200 hover:text-primary-blue hover:border-text-blue transition-all ease-out duration-200">
          Signup
        </button>
      </div>
    </div>
  );
}
