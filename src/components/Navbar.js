import React from "react";
import "../styles/navbar.scss";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <b>Random</b>Logo
      </div>
      <div className="search_bar">
        <button className="category_select">
          <p>All</p>
          <ion-icon name="chevron-down-outline" />
        </button>
        <div className="search_wrapper">
          <input placeholder="Search thousands of products..." />
          <button className="right-icon">
            <ion-icon name="search-outline" />
          </button>
        </div>
      </div>
      <div className="buttons">
        <button>
          <ion-icon name="heart-outline" />
        </button>
        <button>
          <ion-icon name="person-outline" />
        </button>
        <button>
          <ion-icon name="cart-outline" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
