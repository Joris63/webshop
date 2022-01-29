import React from "react";
import CategoryFilter from "./CategoryFilter";
import Navbar from "./Navbar";

const BasePage = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="content">
        <CategoryFilter />
        {children}
      </div>
    </>
  );
};

export default BasePage;
