import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown';
import {translation, categoryOptions, functionalityOptions, energyOptions, copacityOptions} from './helpers/dropdownOptions';

const Filter = ({ setFilterProducts, products }) => {
  const [filterValue, setFilterValue] = useState({
    functionality: 'all',
    energy: 'all',
    copacity: 'all',
    category: 'all',
  });

//set filters
  const chageFilter = (name, value) => {
    setFilterValue((prevFilterValue) => ({
      ...prevFilterValue,
      [name]: value,
    }));
  };

//sort logic
  useEffect(() => {
    let filteredData = [...products];
      
    if (filterValue.category === 'price') {
      filteredData = filteredData.sort((a, b) => parseInt(a.price.replace(/\s/g, '')) - parseInt(b.price.replace(/\s/g, '')));
    }
    if (filterValue.category === 'copacity') {
      filteredData = filteredData.sort((a, b) => parseInt(a.copacity) - parseInt(b.copacity));
    }
    if (filterValue.functionality !== 'all') {
      filteredData = filteredData.filter((item) =>
      item.functionality.toLowerCase().replace(/\s/g, '').includes(filterValue.functionality.toLowerCase().replace(/\s/g, ''))
      );
    }
    if (filterValue.energy !== 'all') {
      filteredData = filteredData.filter((item) =>
      item.energy.toLowerCase().replace(/\s/g, '').includes(filterValue.energy.toLowerCase().replace(/\s/g, ''))
      );
    }
    if (filterValue.copacity !== 'all') {
      filteredData = filteredData.filter((item) =>
      parseInt(item.copacity.replace(/\s/g, '')) === parseInt(filterValue.copacity.replace(/\s/g, ''))
      );
    }
    setFilterProducts(filteredData);
  }, [products, setFilterProducts, filterValue]);


  return (
    <div className="filter-wrapper">
      <ul className="filter-inputs">
        <li>
          <p className="filter-title">
            <b>Sortuj po:</b>
          </p>
          <Dropdown
            name="Category"
            value={translation.category[filterValue.category]}
            options={categoryOptions}
            onChange={(newValue) => chageFilter('category', newValue)}
          />
        </li>
        <li>
          <p className="filter-title">
            <b>Funkcje:</b>
          </p>
          <Dropdown
            name="Functionality"
            value={translation.functionality[filterValue.functionality]}
            options={functionalityOptions}
            onChange={(newValue) => chageFilter('functionality', newValue)}
          />
        </li>
        <li>
          <p className="filter-title">
            <b>Klasa energetyczna:</b>
          </p>
          <Dropdown
            name="Energy"
            value={translation.energy[filterValue.energy]}
            options={energyOptions}
            onChange={(newValue) => chageFilter('energy', newValue)}
          />
        </li>
        <li>
          <p className="filter-title">
            <b>Pojemność:</b>
          </p>
          <Dropdown
            name="Copacity"
            value={translation.copacity[filterValue.copacity]}
            options={copacityOptions}
            onChange={(newValue) => chageFilter('copacity', newValue)}
          />
        </li>
      </ul>
    </div>
  );
};

export default Filter;

