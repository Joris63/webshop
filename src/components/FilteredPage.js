import React from "react";
import BasePage from "./BasePage";
import "../styles/filteredPage.scss";
import PageFilter from "./PageFilter";
import ProductList from "./ProductList";

const FilteredPage = (props) => {
  return (
    <BasePage>
      <header>
        <h1 className="title">
          Science Fiction,
          <br />
          Fantasy & Horror
        </h1>
      </header>
      <div className="container">
        <PageFilter />
        <ProductList />
      </div>
    </BasePage>
  );
};

export default FilteredPage;
