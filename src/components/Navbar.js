import React from "react";
import "../styles/navbar.scss";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <b>Superb</b>Reads
      </div>
      <div className="search_bar">
        <div className="category_select">
          <p>All</p>
          <ion-icon name="chevron-down-outline" />
        </div>
        <div className="search_wrapper">
          <input placeholder="Search thousands of books..." />
          <div className="right-icon">
            <ion-icon name="search-outline" />
          </div>
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
