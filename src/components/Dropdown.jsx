import React, { useState, useRef, useEffect } from 'react';

const Dropdown = ({ value, name, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  //open / close 
  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (option) => {
    onChange(option.value);
    setIsOpen(false);
  };

  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`} ref={dropdownRef}>
      <div className="selected-value" onClick={handleToggleDropdown}>
        {value || `Select ${name}`}
        <span className={`arrow ${isOpen ? 'up' : 'down'}`}></span>
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          {options.map((option) => (
            <div
              key={option.value}
              className={`dropdown-item ${value === option.value ? 'selected' : ''}`}
              onClick={() => handleChange(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
