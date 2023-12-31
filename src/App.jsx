
import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import Products from './components/Products';

const App = () => {
  const [products, setProducts] = useState([]);
  const [serchValue, setSerchValue] = useState('');
  const [filterProducts, setFilterProducts] = useState([]);


  const onInputChange = (ev) => {
    setSerchValue(ev.target.value.replace(/\s/g,'').toLowerCase());
  };

  // get product data
  const getData = useCallback(async () => {
    try { 
      const res = await axios.get('data.json')
      setProducts(res.data)
      setFilterProducts(res.data)
    }catch(err) {
      console.log(err)
    }
  },[]);

  useEffect(() => {
    getData()
  },[getData]);


  return (
    <div className="App">
      <div className='title-wrapper'>
        <h1 className='title'>Wybierz urządzenie</h1>
      </div>
      <section className='serch-section'>
        <div className="content">
          <div className="input-wrapper">
            <input placeholder="Search..." type="text" onChange={onInputChange} />
          </div>
          <Filter products={products} filterProducts={filterProducts} setFilterProducts={setFilterProducts} />
          <div className='serch-result'>Liczba wyników: {filterProducts.length}</div>
          <Products filterProducts={filterProducts} serchValue={serchValue} />
        </div>
      </section>
        
    </div>
  );
};

export default App;
