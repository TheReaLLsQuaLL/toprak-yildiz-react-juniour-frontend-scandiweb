import React from "react";
import { useSelector } from "react-redux";
import "./ProductCard.css";
import img1 from "../img/Product D.svg";
const ProductCard = () => {
  const products = useSelector((state) => state.allProducts.products);
  const { id, title } = products[0];
  return (
    <div className="productcard">
      <img src={img1} className="productcard-image"></img>
      <div className="productcard-titel">
        <p>{title}</p>
      </div>
      <div className="productcard-amount">
        <p>$50.00</p>
      </div>
    </div>
  );
};

export default ProductCard;
