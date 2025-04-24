import React from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import CartSummary from "./CartSummary";

const ShoppingCart = () => {
  const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 },
  ];

  const total = products.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="max-w-3xl mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
      <Header />
      <ProductList products={products} />
      <CartSummary total={total} />
    </div>
  );
};

export default ShoppingCart;
