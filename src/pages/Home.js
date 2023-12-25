import React from "react";
import Navbar from "../features/navbar/navbar";
import ProductList from "../features/product/components/productList";

export default function Home() {
  return (
    <Navbar>
      <ProductList />
    </Navbar>
  );
}
