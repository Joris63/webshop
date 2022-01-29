import React from "react";
import "../styles/categoryFilter.scss";

const CategoryFilter = (props) => {
  return (
    <div className="category_filter">
      <button className="dropdown_btn">
        <p>Shop by Category</p>
        <ion-icon name="chevron-down-outline" />
      </button>
      <ul className="top_categories">
        <li className="category">
          <button>Bestsellers</button>
        </li>
        <li className="category">
          <button>Trending</button>
        </li>
        <li className="category">
          <button>Coming Soon</button>
        </li>
        <li className="category">
          <button>New Arrivals</button>
        </li>
        <li className="category">
          <button>Great Deals</button>
        </li>
        <li className="category">
          <button>Sale</button>
        </li>
        <li className="category">
          <button>Audio Books</button>
        </li>
        <li className="category">
          <button>E-Books</button>
        </li>
        <li className="category">
          <button>Staff Picks</button>
        </li>
        <li className="category">
          <button>Inspiration</button>
        </li>
        <li className="category">
          <button>Mood</button>
        </li>
      </ul>
    </div>
  );
};

export default CategoryFilter;
