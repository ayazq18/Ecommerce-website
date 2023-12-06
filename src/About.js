import React, { useState } from "react";
import "./About.css";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faShoppingCart, faAngleLeft, faAngleRight /* Add more icons as needed */ } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faCoffee, faShoppingCart); // Add the imported icons to the library


function Main(props) {
  const [products, setProducts] = useState([]);
  const [text, setText] = useState("");


  async function fetchData() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const result = await response.json();
      setProducts(result);
    } catch (error) {
      console.log(error);
    }
  }
  fetchData();

  function handleChange(event){
    setText(event.target.value)
  }

  return (
    <div className="product">
      <div className="search-section">
        <div>
        <input type="text" onChange={handleChange} placeholder="Enter to Search..."/>
        </div>
        {/* <div className="cart">
          <button className="cart-icon"><FontAwesomeIcon icon="shopping-cart" style={{color:"white"}} /></button>
          <h5>{id}</h5>
        </div> */}
      </div>
      <ul className="product-container">
        {products.filter((product)=>product.title.toLowerCase().includes(text.toLowerCase()))
        .map(product=>(
          <li className="card" key={product.id}>
            <img src={product.image}></img>
            <h3>{product.title}</h3>
            <p className="description">Description: {product.description}</p>
            <div className="price-category">
              <p>Price: {product.price}$</p>
              <p>Category: {product.category}</p>
            </div>
            <button className="addToCart" onClick={()=>props.setCount(props.count+1)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Main;
