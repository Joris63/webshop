import React from "react";
import CategorySelect from "./CategorySelect";
import Navbar from "./Navbar";

const BasePage = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="content">
        <CategorySelect />
        {children}
      </div>
    </>
  );
};

export default BasePage;
