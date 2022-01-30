import React, { useState } from "react";
import BasePage from "./BasePage";
import "../styles/filteredPage.scss";
import PageFilter from "./PageFilter";
import ProductList from "./ProductList";

const FilteredPage = (props) => {
  const [filter, setFilter] = useState([]);

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
        <PageFilter filter={filter} setFilter={setFilter} />
        <ProductList filter={filter} />
      </div>
    </BasePage>
  );
};

export default FilteredPage;
