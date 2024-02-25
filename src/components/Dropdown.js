import React, { useState } from 'react';

const Dropdown = ({ id,options,payloadData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    if(id==="appDropdown") payloadData["appNamePD"] = option;
    else payloadData["moduleNamePD"] = option;
    console.log(payloadData);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="btn btn-light dropdown-toggle" onClick={toggleDropdown}>
        {selectedOption ? selectedOption : 'Select an option'}
      </button>
      {isOpen && (
        <div className="dropdown-menu" style={{ "display": 'block', "width":'80px' }}>
          {options.map((option, index) => (
            <button
              key={index}
              className="dropdown-item"
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
