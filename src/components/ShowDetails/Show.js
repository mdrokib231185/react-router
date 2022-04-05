import React from "react";
import "./Show.css";

const Show = (props) => {
  const { name, img, price, comment, ratting ,cname} = props.review;
  
  return (
    <div className="cart-container">
      <div className="cart">
        <div className="image">
          <img src={img} alt="" />
          <p className="product-name">Name:{name}</p>
          <p className="product-name">Comment: {comment}</p>
          <p>
            {" "}
            Name: <span>{cname}</span>
          </p>
          <p>Rating: {ratting} Stars</p>
          <p>Price:{price} </p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Show;
