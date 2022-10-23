import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import "./ProductListing.css";

const ProductListing = () => {
  const products = useSelector((state) => state);
  console.log(products);
  return (
    <div className="productlisting">
      <div className="productlisting-titel">
        <p>Category name</p>
      </div>
      <div className="productlisting-card">
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductListing;
