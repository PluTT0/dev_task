import { useState } from "react";
import ProductCard from "./ProductCard";


const Products = ({filterProducts, serchValue}) => {
  const [cardsOnPage, setCardsOnPage] = useState(6);

  const setCards = () => {
    setCardsOnPage(cardsOnPage + 5)
  };

  return (
    <section className='product__wrapper'>
      <div className='product-list'>
         <ProductCard filterProducts={filterProducts.slice(0, cardsOnPage)} serchValue={serchValue} />
      </div>
      <button className="more_btn" onClick={() => setCards()}>Pokaż więcej 
        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="6" viewBox="0 0 7 6" fill="none">
          <path d="M3.5 5.5L6.53109 0.25H0.468911L3.5 5.5Z" fill="#007AFF"/>
        </svg>
      </button>
    </section>
  )
};

export default Products;