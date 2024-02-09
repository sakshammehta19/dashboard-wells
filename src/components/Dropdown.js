import React, { useState } from 'react';

const Dropdown = ({ options}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="btn btn-light dropdown-toggle" onClick={toggleDropdown}>
        {selectedOption ? selectedOption : 'Select an option'}
      </button>
      {isOpen && (
        <div className="dropdown-menu" style={{ display: 'block' }}>
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
      {/* <p>Selected option: {selectedOption}</p> */}
    </div>
  );
};

export default Dropdown;
