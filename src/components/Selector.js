import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Selector(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const onItemClick = (option) => {
    setSelectedValue(option);
    props.setInput(option.label);
    setIsOpen(!isOpen);
  };

  const isSelected = (option) => {
    if (!isSelected) {
      return false;
    }
    return selectedValue.value === option.value;
  };

  return (
    <div className="flex flex-col w-2/12 p-2">
      <h3 className="text-light-blue font-semibold">{props.heading}</h3>
      <div className="w-full">
        <div className="flex items-center justify-between">
          <div className="text-primary-blue font-semibold">
            {selectedValue ? selectedValue.label : props.default}
          </div>
          <FaChevronDown
            className="mx-2 cursor-pointer rounded-full p-1 bg-light-blue bg-opacity-40"
            onClick={handleDropDown}
          />
        </div>
      </div>
      <div
        className={`bg-blue-100 bg-opacity-90 backdrop-blur-md p-2 text-primary-blue font-semibold absolute top-[20rem] shadow-md rounded-md ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {props.options.map((option) => {
          return (
            <p
              onClick={() => onItemClick(option)}
              className={`hover:bg-light-blue p-2 cursor-pointer rounded-lg ${
                isSelected(option) && "bg-light-blue"
              }`}
              key={option.value}
            >
              {option.label}
            </p>
          );
        })}
      </div>
    </div>
  );
}
