import React from 'react'

const ProductCard = ({filterProducts, serchValue}) => {
  return (
    filterProducts.filter(
      (item) => item.title.toLowerCase().replace(/\s/g,'').includes(serchValue)).map((product) => {
      return(
        <div className="product-card" key={product.id}>
          <div className="card-content">
            <img src={product.image} alt="product" />
              <p className="card-title">
                <b>{product.title}</b>
              </p>
            <div className="product-info">
              <div><p className="card-text"><span>Pojemność(kg):</span> {product.copacity}</p></div>
              <div><p className="card-text"><span>Wymiary: (GxSxW)</span> {product.size}</p></div>
              <div><p className="card-text"><span>Funkcje:</span> {product.functionality}</p></div>
              <div>
                <p className="card-energy">
                  <span>Klasa energetyczna:</span>
                   <span className='energy-class'>{product.energy}</span> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="49" height="18" viewBox="0 0 49 18" fill="none">
                      <path d="M0 17V1C0 0.447715 0.447716 0 1 0H42.4648C42.7992 0 43.1114 0.167102 43.2969 0.4453L48.6302 8.4453C48.8541 8.7812 48.8541 9.2188 48.6302 9.5547L43.2969 17.5547C43.1114 17.8329 42.7992 18 42.4648 18H1C0.447715 18 0 17.5523 0 17Z" fill="#009949"/>
                    </svg>
                </p>
              </div>
            </div>
            <div className="price-info">
              <div><p className="card-text"><span>Cena obowiązuje:{product.price_data}</span></p></div>
              <div className="card-price"><div>{product.price}</div><div><span>00</span><span>zł</span></div></div>
              <div><p className="card-credit"><b>{product.credit}</b></p></div>
            </div>
            <button className='card-btn'>WYBIERZ</button>
          </div>
        </div>
      )
    })
  )
}

export default ProductCard