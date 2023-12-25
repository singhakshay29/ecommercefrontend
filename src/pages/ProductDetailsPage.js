import React from "react";
import Navbar from "../features/navbar/navbar";
import ProductDetails from "../features/product/components/productDetails";

export default function ProductDetailsPage() {
  return (
    <Navbar>
      <ProductDetails />
    </Navbar>
  );
}
