import React from "react";
import './Product.css'

function Product({ id, itemId, title, image, description, fn }) {
  return (
    <div
      onClick={fn}
    >
      <span>{id}</span>
      <span>{title}</span>
      <span>
        <img src={image} style={{ height: 20, width: 20 }} />
      </span>
      {id === itemId && <p>{description}</p>}
    </div>
  );
}

export default Product;
