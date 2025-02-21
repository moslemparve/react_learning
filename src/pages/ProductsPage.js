// src/pages/ProductsPage.js
import React from "react";
import ProductCard from "../components/ProductCard.js";
import Header from "../Header.js";

function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      description: "High-performance laptop",
      price: 999.99,
      imageUrl: "https://example.com/laptop.jpg",
    },
    {
      id: 2,
      name: "Smartphone",
      description: "Latest model smartphone",
      price: 499.99,
      imageUrl: "https://example.com/smartphone.jpg",
    },
    {
      id: 3,
      name: "Smartwatch",
      description: "Your fitness companion",
      price: 199.99,
      imageUrl: "https://example.com/smartwatch.jpg",
    },
  ];

  return (
    <Header>
    <div className="container mt-5">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
    </Header>
  );
}

export default ProductsPage;
