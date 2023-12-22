import React from "react";
import Navbar from "../features/navbar/navbar";
import ProductList from "../features/productList/productList";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

export default function Home() {
  return (
    <Navbar>
      <ProductList />
      {/* <LoginPage /> */}
      {/* <SignupPage /> */}
    </Navbar>
  );
}
