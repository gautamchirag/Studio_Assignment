// import React, { useEffect, useState, useRef } from 'react';
import './product.css';
// import Card from '../card/Card';
import Slider from './Slider';
import star2 from '../../static/images/img/star2.png';

function Product() {
  return (
    <div className="Products" id="product">
      <div className="product-header">
        <div className="product-heading">
          <h2>New products</h2>
          <div className="heading-line">
            <img src={star2} className="star-img" alt="Star" />
            <span></span>
          </div>
        </div>
        <div className="arrow">
          <button className="custom-prev-button">
            <svg
              width="56"
              height="6"
              viewBox="0 0 56 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Arrow 2"
                d="M55 3.5H55.5V2.5H55V3.5ZM0 3L5 5.88675V0.113249L0 3ZM55 2.5L4.5 2.5V3.5L55 3.5V2.5Z"
                fill="#161615"
              />
            </svg>
          </button>
          <button className="custom-next-button">
            <svg
              width="56"
              height="6"
              viewBox="0 0 56 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Arrow 1"
                d="M1 2.5H0.5L0.5 3.5H1L1 2.5ZM56 3L51 0.113249V5.88675L56 3ZM1 3.5L51.5 3.5V2.5L1 2.5L1 3.5Z"
                fill="#161615"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="product-container">
        <div className="product-left-item">
          <ul>
            <li>Apparel</li>
            <li>Accessories</li>
            <li>Best sellers</li>
            <li>50% off</li>
          </ul>
        </div>
        <Slider />
      </div>
    </div>
  );
}

export default Product;
