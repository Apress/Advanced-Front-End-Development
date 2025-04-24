import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ProductDetailsPage from "./ProductDetailsPage";
import CartPage from "./CartPage";
import CheckoutPage from "./CheckoutPage";
import ConfirmationPage from "./ConfirmationPage";

const RetailApp = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="product/:id" element={<ProductDetailsPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="confirmation" element={<ConfirmationPage />} />
      </Routes>
  );
};

export default RetailApp;

