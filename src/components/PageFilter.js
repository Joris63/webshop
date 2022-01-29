import React from "react";
import '../styles/pageFilter.scss'

const PageFilter = (props) => {
  return (
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
  );
};

export default PageFilter;
