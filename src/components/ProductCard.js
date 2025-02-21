// src/components/ProductCard.js
import React from "react";
import { useCart } from "../CartContext"; // Make sure to import useCart from your CartContext

function ProductCard({ product }) {
  const { addToCart,cartItems } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    console.log(cartItems)
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={product.imageUrl} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">${product.price}</p>
        <button className="btn btn-primary" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
