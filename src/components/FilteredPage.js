import React from "react";
import BasePage from "./BasePage";
import "../styles/filteredPage.scss";

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
        <div className="page_filter">
          <p className="total_found">2480 Items Found</p>
          <div className="filter_container">
            <div className="filter active">
              <button className="header">
                <p className="name">Categories</p>
                <ion-icon name="chevron-down-outline" />
              </button>
              <ul className="list">
                <li className="checkbox">
                  <input type="checkbox" />
                  <label>All</label>
                </li>
                <li className="checkbox">
                  <input type="checkbox" />
                  <label>Fantasy</label>
                </li>
                <li className="checkbox">
                  <input type="checkbox" />
                  <label>Horror</label>
                </li>
                <li className="checkbox">
                  <input type="checkbox" />
                  <label>Science Fiction</label>
                </li>
              </ul>
            </div>
            <div className="filter">
              <button className="header">
                <p className="name">Language</p>
                <ion-icon name="chevron-down-outline" />
              </button>
              <ul className="list">
                <li className="checkbox">
                  <input type="checkbox" />
                  <label>All</label>
                </li>
                <li className="checkbox">
                  <input type="checkbox" />
                  <label>Fantasy</label>
                </li>
                <li className="checkbox">
                  <input type="checkbox" />
                  <label>Horror</label>
                </li>
                <li className="checkbox">
                  <input type="checkbox" />
                  <label>Science Fiction</label>
                </li>
              </ul>
            </div>
            <div className="filter">
              <button className="header">
                <p className="name">Format</p>
                <ion-icon name="chevron-down-outline" />
              </button>
              <ul className="list">
                <li className="checkbox">
                  <input type="checkbox" />
                  <label>All</label>
                </li>
                <li className="checkbox">
                  <input type="checkbox" />
                  <label>Fantasy</label>
                </li>
                <li className="checkbox">
                  <input type="checkbox" />
                  <label>Horror</label>
                </li>
                <li className="checkbox">
                  <input type="checkbox" />
                  <label>Science Fiction</label>
                </li>
              </ul>
            </div>
            <div className="filter">
              <button className="header">
                <p className="name">Year of Publication</p>
                <ion-icon name="chevron-down-outline" />
              </button>
              <ul className="list">
                <li className="checkbox">
                  <input type="checkbox" />
                  <label>All</label>
                </li>
                <li className="checkbox">
                  <input type="checkbox" />
                  <label>Fantasy</label>
                </li>
                <li className="checkbox">
                  <input type="checkbox" />
                  <label>Horror</label>
                </li>
                <li className="checkbox">
                  <input type="checkbox" />
                  <label>Science Fiction</label>
                </li>
              </ul>
            </div>
            <div className="filter">
              <button className="header">
                <p className="name">Price</p>
                <ion-icon name="chevron-down-outline" />
              </button>
              <ul className="list">
                <li className="checkbox">
                  <input type="checkbox" />
                  <label>All</label>
                </li>
                <li className="checkbox">
                  <input type="checkbox" />
                  <label>Fantasy</label>
                </li>
                <li className="checkbox">
                  <input type="checkbox" />
                  <label>Horror</label>
                </li>
                <li className="checkbox">
                  <input type="checkbox" />
                  <label>Science Fiction</label>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="product_list">
          <div className="list_actions">
            <button>Grid View</button>
            <button className="active">List View</button>
            <button>
              <p>Sort</p>
              <ion-icon name="chevron-down-outline" />
            </button>
          </div>
          <div className="list"></div>
        </div>
      </div>
    </BasePage>
  );
};

export default FilteredPage;
