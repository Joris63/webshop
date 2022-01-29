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
          <div className="list">
            <div className="product">
              <img
                src="https://www.rituals.com/dw/image/v2/BBKL_PRD/on/demandware.static/-/Library-Sites-RitualsSharedContent/default/dw4e746267/Magazine/8dd6e14f-17cc-4b7a-a448-e79f70c0c8cf.jpg?sw=285&sh=370&sm=fit&cx=0&cy=0&cw=545&ch=707&sfrm=png"
                alt=""
              />
              <div className="info">
                <a href="/#" className="title">
                  My book cover
                </a>
                <pre className="description">
                  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec iaculis dui. Ut et felis ullamcorper, tempus magna id, consectetur erat. Vivamus sed urna dictum, porttitor felis id, dapibus nunc. Mauris vel dolor viverra, auctor mauris rhoncus, convallis magna. Suspendisse efficitur orci elit, et tincidunt nulla placerat scelerisque. Praesent fermentum pulvinar erat, sed imperdiet nisl elementum ac. Quisque auctor ornare pretium. Vivamus turpis ex, scelerisque eu ligula at, fringilla facilisis orci.

Aliquam cursus suscipit laoreet. Curabitur non magna pharetra, luctus sapien a, ultrices eros. Vestibulum volutpat ullamcorper nisi, eu ultrices nunc faucibus hendrerit. Sed vitae condimentum velit, nec placerat nisi. Maecenas posuere tortor turpis, at mollis est ullamcorper eu. Donec scelerisque nunc vitae nisi cursus scelerisque. Pellentesque interdum justo leo, vel scelerisque augue ornare nec. Cras aliquam velit mauris, sit amet facilisis diam eleifend a.
                    `}
                </pre>
                <div className="more">
                  <a href="/#">
                    <p>Read more</p>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                  </a>
                </div>
              </div>
              <div className="options">
                <div className="top">
                  <div className="reviews">
                    <ul className="stars">
                      <li className="star">
                        <ion-icon name="star-outline" />
                      </li>
                      <li className="star">
                        <ion-icon name="star-outline" />
                      </li>
                      <li className="star">
                        <ion-icon name="star-outline" />
                      </li>
                      <li className="star">
                        <ion-icon name="star-outline" />
                      </li>
                      <li className="star">
                        <ion-icon name="star-outline" />
                      </li>
                    </ul>
                    <a href="/#" className="total_count">
                      <p>1,240 Reviews</p>
                      <ion-icon name="chevron-forward-outline" />
                    </a>
                  </div>
                  <button className="wishlist_btn">
                    <ion-icon name="heart-outline" />
                  </button>
                </div>
                <div className="bottom">
                  <p className="price">$10</p>
                  <button className="purchase_btn">Buy</button>
                </div>
              </div>
            </div>
            <div className="product">
              <img
                src="https://www.rituals.com/dw/image/v2/BBKL_PRD/on/demandware.static/-/Library-Sites-RitualsSharedContent/default/dw4e746267/Magazine/8dd6e14f-17cc-4b7a-a448-e79f70c0c8cf.jpg?sw=285&sh=370&sm=fit&cx=0&cy=0&cw=545&ch=707&sfrm=png"
                alt=""
              />
              <div className="info">
                <a href="/#" className="title">
                  My book cover
                </a>
                <pre className="description">
                  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec iaculis dui. Ut et felis ullamcorper, tempus magna id, consectetur erat. Vivamus sed urna dictum, porttitor felis id, dapibus nunc. Mauris vel dolor viverra, auctor mauris rhoncus, convallis magna. Suspendisse efficitur orci elit, et tincidunt nulla placerat scelerisque. Praesent fermentum pulvinar erat, sed imperdiet nisl elementum ac. Quisque auctor ornare pretium. Vivamus turpis ex, scelerisque eu ligula at, fringilla facilisis orci.

Aliquam cursus suscipit laoreet. Curabitur non magna pharetra, luctus sapien a, ultrices eros. Vestibulum volutpat ullamcorper nisi, eu ultrices nunc faucibus hendrerit. Sed vitae condimentum velit, nec placerat nisi. Maecenas posuere tortor turpis, at mollis est ullamcorper eu. Donec scelerisque nunc vitae nisi cursus scelerisque. Pellentesque interdum justo leo, vel scelerisque augue ornare nec. Cras aliquam velit mauris, sit amet facilisis diam eleifend a.
                    `}
                </pre>
                <div className="more">
                  <a href="/#">
                    <p>Read more</p>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                  </a>
                </div>
              </div>
              <div className="options">
                <div className="top">
                  <div className="reviews">
                    <ul className="stars">
                      <li className="star">
                        <ion-icon name="star-outline" />
                      </li>
                      <li className="star">
                        <ion-icon name="star-outline" />
                      </li>
                      <li className="star">
                        <ion-icon name="star-outline" />
                      </li>
                      <li className="star">
                        <ion-icon name="star-outline" />
                      </li>
                      <li className="star">
                        <ion-icon name="star-outline" />
                      </li>
                    </ul>
                    <a href="/#" className="total_count">
                      <p>1,240 Reviews</p>
                      <ion-icon name="chevron-forward-outline" />
                    </a>
                  </div>
                  <button className="wishlist_btn">
                    <ion-icon name="heart-outline" />
                  </button>
                </div>
                <div className="bottom">
                  <p className="price">$10</p>
                  <button className="purchase_btn">Buy</button>
                </div>
              </div>
            </div>
            <div className="product">
              <img
                src="https://www.rituals.com/dw/image/v2/BBKL_PRD/on/demandware.static/-/Library-Sites-RitualsSharedContent/default/dw4e746267/Magazine/8dd6e14f-17cc-4b7a-a448-e79f70c0c8cf.jpg?sw=285&sh=370&sm=fit&cx=0&cy=0&cw=545&ch=707&sfrm=png"
                alt=""
              />
              <div className="info">
                <a href="/#" className="title">
                  My book cover
                </a>
                <pre className="description">
                  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec iaculis dui. Ut et felis ullamcorper, tempus magna id, consectetur erat. Vivamus sed urna dictum, porttitor felis id, dapibus nunc. Mauris vel dolor viverra, auctor mauris rhoncus, convallis magna. Suspendisse efficitur orci elit, et tincidunt nulla placerat scelerisque. Praesent fermentum pulvinar erat, sed imperdiet nisl elementum ac. Quisque auctor ornare pretium. Vivamus turpis ex, scelerisque eu ligula at, fringilla facilisis orci.

Aliquam cursus suscipit laoreet. Curabitur non magna pharetra, luctus sapien a, ultrices eros. Vestibulum volutpat ullamcorper nisi, eu ultrices nunc faucibus hendrerit. Sed vitae condimentum velit, nec placerat nisi. Maecenas posuere tortor turpis, at mollis est ullamcorper eu. Donec scelerisque nunc vitae nisi cursus scelerisque. Pellentesque interdum justo leo, vel scelerisque augue ornare nec. Cras aliquam velit mauris, sit amet facilisis diam eleifend a.
                    `}
                </pre>
                <div className="more">
                  <a href="/#">
                    <p>Read more</p>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                  </a>
                </div>
              </div>
              <div className="options">
                <div className="top">
                  <div className="reviews">
                    <ul className="stars">
                      <li className="star">
                        <ion-icon name="star-outline" />
                      </li>
                      <li className="star">
                        <ion-icon name="star-outline" />
                      </li>
                      <li className="star">
                        <ion-icon name="star-outline" />
                      </li>
                      <li className="star">
                        <ion-icon name="star-outline" />
                      </li>
                      <li className="star">
                        <ion-icon name="star-outline" />
                      </li>
                    </ul>
                    <a href="/#" className="total_count">
                      <p>1,240 Reviews</p>
                      <ion-icon name="chevron-forward-outline" />
                    </a>
                  </div>
                  <button className="wishlist_btn">
                    <ion-icon name="heart-outline" />
                  </button>
                </div>
                <div className="bottom">
                  <p className="price">$10</p>
                  <button className="purchase_btn">Buy</button>
                </div>
              </div>
            </div>
            <div className="product">
              <img
                src="https://www.rituals.com/dw/image/v2/BBKL_PRD/on/demandware.static/-/Library-Sites-RitualsSharedContent/default/dw4e746267/Magazine/8dd6e14f-17cc-4b7a-a448-e79f70c0c8cf.jpg?sw=285&sh=370&sm=fit&cx=0&cy=0&cw=545&ch=707&sfrm=png"
                alt=""
              />
              <div className="info">
                <a href="/#" className="title">
                  My book cover
                </a>
                <pre className="description">
                  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec iaculis dui. Ut et felis ullamcorper, tempus magna id, consectetur erat. Vivamus sed urna dictum, porttitor felis id, dapibus nunc. Mauris vel dolor viverra, auctor mauris rhoncus, convallis magna. Suspendisse efficitur orci elit, et tincidunt nulla placerat scelerisque. Praesent fermentum pulvinar erat, sed imperdiet nisl elementum ac. Quisque auctor ornare pretium. Vivamus turpis ex, scelerisque eu ligula at, fringilla facilisis orci.

Aliquam cursus suscipit laoreet. Curabitur non magna pharetra, luctus sapien a, ultrices eros. Vestibulum volutpat ullamcorper nisi, eu ultrices nunc faucibus hendrerit. Sed vitae condimentum velit, nec placerat nisi. Maecenas posuere tortor turpis, at mollis est ullamcorper eu. Donec scelerisque nunc vitae nisi cursus scelerisque. Pellentesque interdum justo leo, vel scelerisque augue ornare nec. Cras aliquam velit mauris, sit amet facilisis diam eleifend a.
                    `}
                </pre>
                <div className="more">
                  <a href="/#">
                    <p>Read more</p>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                  </a>
                </div>
              </div>
              <div className="options">
                <div className="top">
                  <div className="reviews">
                    <ul className="stars">
                      <li className="star">
                        <ion-icon name="star-outline" />
                      </li>
                      <li className="star">
                        <ion-icon name="star-outline" />
                      </li>
                      <li className="star">
                        <ion-icon name="star-outline" />
                      </li>
                      <li className="star">
                        <ion-icon name="star-outline" />
                      </li>
                      <li className="star">
                        <ion-icon name="star-outline" />
                      </li>
                    </ul>
                    <a href="/#" className="total_count">
                      <p>1,240 Reviews</p>
                      <ion-icon name="chevron-forward-outline" />
                    </a>
                  </div>
                  <button className="wishlist_btn">
                    <ion-icon name="heart-outline" />
                  </button>
                </div>
                <div className="bottom">
                  <p className="price">$10</p>
                  <button className="purchase_btn">Buy</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BasePage>
  );
};

export default FilteredPage;
