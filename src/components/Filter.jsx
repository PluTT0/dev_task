import React, { useCallback, useEffect, useState } from 'react'

const Filter = ({products}) => {
  const [sortValue, setFilterValue] = useState({});
  const [sortProducts, setSortProducts] = useState({});

  const {category, copacity, functionality, energy} = sortValue;

  const chageFilter = (e) => {
    const value = e.target.value;
    setFilterValue({
      ...sortValue,
      [e.target.name]: value,
    })
  }

  const sortProd = useCallback((data) => {
    if(category === 'price') {
      setSortProducts(data.sort((a, b) => { return  parseInt(a.price.replace(/\s/g,'')) - parseInt(b.price.replace(/\s/g,''))}))
    } else if(copacity !== 'all' ) {
      setSortProducts(data.filter((item) => item.title.toLowerCase().replace(/\s/g,'').includes(copacity)))
    }
  },[category, copacity])

  console.log(sortValue,sortProducts)
 
  useEffect(() => {
    sortProd(products)
  },[sortValue, products, sortProd])
  
  return (
    <div className="filter__wrapper">
      <ul className="filter-inputs">
        <li>
          <p className='filter_title'><b>Sortuj po:</b></p>
          <select className="filter-dropdown" value={category} name="category" onChange={chageFilter}>
            <option value="all">Wszystkie</option>
            <option value="price">Cena</option>
            <option value="capacity">Pojemnosc</option>
          </select>
        </li>
        <li>
          <p className='filter_title'><b>Funkcje:</b></p>
          <select className="filter-dropdown" value={functionality} name="functionality" onChange={chageFilter}>
            <option className="dropdown-item" value="all">Wszystkie</option>
            <option className="dropdown-item" value="addwash">Drzwi AddWash</option>
            <option className="dropdown-item" value="aiControl">Panel AI Control</option>
            <option className="dropdown-item" value="inwerterowy">Inwerterowy</option>
            <option className="dropdown-item" value="dysplay">Wyświetlacz elektroniczny</option>
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
          <select className="filter-dropdown" name="capacity" value={copacity} onChange={chageFilter}>
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

export default Filter