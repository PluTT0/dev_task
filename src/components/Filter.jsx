import React, { useEffect, useState } from 'react'

const Filter = ({setFilterProducts, products}) => {
  const [sortValue, setFilterValue] = useState({
    functionality: 'all',
    energy: 'all',
    copacity: 'all',
    category: 'all',
  });

  const {category, copacity, functionality, energy} = sortValue;

  const chageFilter = (e) => {
    const value = e.target.value;
    setFilterValue({
      ...sortValue,
      [e.target.name]: value,
    })
  }

  useEffect(() => {
    let filteredData = [...products];
  
    if (sortValue.category === 'price') {
      filteredData = filteredData.sort((a, b) => parseInt(a.price.replace(/\s/g, '')) - parseInt(b.price.replace(/\s/g, '')));
    }
  
    if (sortValue.category === 'copacity') {
      filteredData = filteredData.sort((a, b) => parseInt(a.copacity) - parseInt(b.copacity));
    }
  
    if (sortValue.functionality !== 'all') {
      filteredData = filteredData.filter((item) =>
        item.functionality.toLowerCase().replace(/\s/g, '').includes(sortValue.functionality.toLowerCase().replace(/\s/g, ''))
      );
    }
  
    if (sortValue.energy !== 'all') {
      filteredData = filteredData.filter((item) =>
        item.energy.toLowerCase().replace(/\s/g, '').includes(sortValue.energy.toLowerCase().replace(/\s/g, ''))
      );
    }
  
    if (sortValue.copacity !== 'all') {
      filteredData = filteredData.filter((item) =>
        parseInt(item.copacity.replace(/\s/g, '')) === parseInt(sortValue.copacity.replace(/\s/g, ''))
      );
    }
  
    setFilterProducts(filteredData);
  }, [products, setFilterProducts, sortValue]);



  return (
    <div className="filter__wrapper">
      <ul className="filter-inputs">
        <li>
          <p className='filter_title'><b>Sortuj po:</b></p>
          <div  className="filter-dropdown" >
            <select value={category} name="category" onChange={chageFilter}>
              <option value="all">Wszystkie</option>
              <option value="price">Cena</option>
              <option value="copacity">Pojemnosc</option>
            </select>
          </div>
        </li>
        <li>
          <p className='filter_title'><b>Funkcje:</b></p>
          <select className="filter-dropdown" value={functionality} name="functionality" onChange={chageFilter}>
            <option className="dropdown-item" value="all">Wszystkie</option>
            <option className="dropdown-item" value="addwash">Drzwi AddWash</option>
            <option className="dropdown-item" value="AI Control">Panel AI Control</option>
            <option className="dropdown-item" value="inwerterowy">Inwerterowy</option>
            <option className="dropdown-item" value="wyświetlacz">Wyświetlacz elektroniczny</option>
          </select>
        </li>
        <li>
          <p className='filter_title'><b>Klasa energetyczna:</b></p>
          <select className="filter-dropdown" value={energy} name="energy" onChange={chageFilter}>
            <option className="dropdown-item" value="all">Wszystkie</option>
            <option className="dropdown-item" value="a">A</option>
            <option className="dropdown-item" value="b">B</option>
            <option className="dropdown-item" value="c">C</option>
          </select>
        </li>
        <li>
          <p className='filter_title'><b>Pojemność:</b></p>
          <select className="filter-dropdown" name="copacity" value={copacity} onChange={chageFilter}>
            <option className="dropdown-item" value="all">Wszystkie</option>
            <option className="dropdown-item" value="9">9 kg</option>
            <option className="dropdown-item" value="8">8 kg</option>
            <option className="dropdown-item" value="10.5">10.5 kg</option>
          </select>
        </li>
      </ul>
    </div>
  )
}

export default Filter;