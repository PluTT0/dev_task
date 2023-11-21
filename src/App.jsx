import './style/index.scss'
import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import Products from './components/Products';

const App = () => {
  const [products, setProducts] = useState([]);
  const [serchValue, setSerchValue] = useState('');

  const onInputChange = (ev) => {
    setSerchValue(ev.target.value.replace(/\s/g,'').toLowerCase());
  };

  const getData = useCallback(async () => {
    try { 
      const res = await axios.get('data.json')
      setProducts(res.data)
    }catch(err) {
      console.log(err)
    }
  },[]);

  useEffect(() => {
    getData()
  },[getData]);

  return (
    <div className="App">
      <div className='title__wrapper'><h1 className='title'>Wybierz urządzenie</h1></div>
      <section className='serch_section'>
        <div className="content">
          <div className="input__wrapper">
            <input placeholder="Search..." type="text" onChange={onInputChange} />
          </div>
          <Filter products={products} />
          <div className='serch-result'>Liczba wyników: {products.length}</div>
          <Products products={products} serchValue={serchValue} />
        </div>
      </section>
        
    </div>
  );
};

export default App;
