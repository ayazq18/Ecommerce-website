import React, { useState } from "react";
import "./NavBar.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCoffee,
  faShoppingCart,
  faAngleLeft,
  faAngleRight /* Add more icons as needed */,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faCoffee, faShoppingCart); // Add the imported icons to the library

const NavBar = (props) => {
  const images = [
    "https://m.media-amazon.com/images/I/717RUPA1bDL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71j8damPo5L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg",
  ];

  const [image, setImage] = useState(0);
  
  const goToPrevImage = () => {
    setImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  const goToNextImage = () => {
    setImage((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1
    );
  };
  return (
    <div>
      <nav>
        <img
          className="logo-icon"
          src="./images/amazon_logo.png"
          alt="web-img"
        ></img>
        <ul className="nav-items">
          <li>
            <a href="#">Deliver to India</a>
          </li>
          <li>
            <a href="#About">All</a>
          </li>
          <li>
            <a href="#">Today's Deals</a>
          </li>
          <li>
            <a href="#">Customer Servce</a>
          </li>
        </ul>
        <div className="cart">
          <button className="cart-icon">
            <FontAwesomeIcon icon="shopping-cart" style={{ color: "white" }} />
          </button>
          <h5>{props.count}</h5>
        </div>
      </nav>
      <div className="hero-section">
        <button className="prevBtn" onClick={goToPrevImage}>
          <FontAwesomeIcon icon={faAngleLeft} className="left-icon" />
        </button>
        <img className="hero-image" src={images[image]} alt="Her0-Images"></img>
        <button className="nextBtn" onClick={goToNextImage}>
          <FontAwesomeIcon icon={faAngleRight} className="right-icon" />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
