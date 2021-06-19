import React, { useState } from "react";
import data from "../data.json";

const Product = () => {
  const [filterdata, setFilterData] = useState([]);

  const selected = (e) => {
    setFilterData(e.target.value);
  };

  return (
    <div>
      <div className="filter">
        <div className="filter-content">
          <h2>Filters</h2>
          <p>
            Size :{" "}
            <select onChange={selected}>
              <option value="Select">Select</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </p>
        </div>
      </div>
      <div className="product-list">
        {data.map((data) => {
          return (
            <div className="product">
              <img className="product-img" src={data.img} alt={data.name} />
              <div className="product-info">
                <p className="brand">{data.brand}</p>
                <p className="name">{data.name}</p>
                <p className="price">₹{data.price}</p>
                <p className="size">Size : {data.size}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
