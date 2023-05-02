import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getProductByFilter } from "../filter";
import {
  catagoryfilter,
  creatorFilter,
  likeFilter,
  orderFilter,
  priceFilter,
  reviewFilter,
} from "../redux/action/filter";
import { findFilterValue, totalProductByKey } from "../utils";
import NiceSelect from "./NiceSelect";

const ShopFilter = ({
  items,
  catagoryfilter,
  setFilteredData,
  filter,
  products,
  orderFilter,
  creatorFilter,
  priceFilter,
  likeFilter,
  reviewFilter,
  setCurrency,
}) => {
  let categories = findFilterValue(items, "categories");
  const [price, setPrice] = useState({ min: 0, max: 100 });
  const [changeCurrency, setChangeCurrency] = useState("$");
  const changePrice = (e) => {
    setPrice({ ...price, [e.target.name]: Number(e.target.value) });
  };
  useEffect(() => {
    priceFilter(price);
  }, [price]);

  const submitData = (e) => {
    e.preventDefault();
    setFilteredData(products && getProductByFilter(products, filter));
    setCurrency(changeCurrency);
  };

  const currencyChange = (name, value) => {
    setChangeCurrency(value);
  };

  return (
    <aside>
      <div className="aside-wrapper">
        <div className="widget widget-filter-panel">
          <div className="widget-title h6">Filters</div>
          <form
            className="cryptoki-form"
            id="filter-form"
            onSubmit={(e) => submitData(e)}
          >
            <div className="form-group">
              <div className="small-title">Categories</div>
              <div className="form-list-wrapper">
                {categories &&
                  categories.map((cat, i) => (
                    <div className="form-list-elem flex-space-between" key={i}>
                      <input
                        type="checkbox"
                        name={cat}
                        id={cat}
                        className="cryptoki-checkbox"
                        onClick={(e) => catagoryfilter(cat)}
                      />
                      <label htmlFor={cat} className="text-capitalize">
                        {cat.split("-").join(" ")}
                      </label>
                      <div className="count colored">
                        ({totalProductByKey(items, "categories", cat)})
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="form-group">
              <div className="small-title">Order By</div>
              <div className="form-list-elem">
                <input
                  type="radio"
                  name="order-by"
                  id="newest"
                  className="cryptoki-radio"
                  onClick={() => orderFilter("newest")}
                />
                <label htmlFor="newest">Newest</label>
              </div>
              <div className="form-list-elem">
                <input
                  type="radio"
                  name="order-by"
                  id="oldest"
                  className="cryptoki-radio"
                  onClick={() => orderFilter("oldest")}
                />
                <label htmlFor="oldest">Oldest</label>
              </div>
              <div className="form-list-elem">
                <input
                  type="radio"
                  name="order-by"
                  id="trending"
                  className="cryptoki-radio"
                  onClick={() => orderFilter("trending")}
                />
                <label htmlFor="trending">Trending</label>
              </div>
            </div>
            <div className="form-group">
              <div className="small-title">Likes</div>
              <div className="form-list-elem">
                <input
                  type="radio"
                  name="like"
                  id="most-liked"
                  className="cryptoki-radio"
                  onClick={() => likeFilter("most")}
                />
                <label htmlFor="most-liked">Most Liked</label>
              </div>
              <div className="form-list-elem">
                <input
                  type="radio"
                  name="like"
                  id="least-liked"
                  className="cryptoki-radio"
                  onClick={() => likeFilter("least")}
                />
                <label htmlFor="least-liked">Least Liked</label>
              </div>
              <div className="form-list-elem">
                <input
                  type="radio"
                  name="like"
                  id="all-likes"
                  className="cryptoki-radio"
                  onClick={() => likeFilter("")}
                />
                <label htmlFor="all-likes">All Likes</label>
              </div>
            </div>
            <div className="form-group">
              <div className="small-title">Sellers</div>
              <div className="form-list-elem">
                <input
                  type="radio"
                  name="seller-type"
                  id="all-sellers"
                  className="cryptoki-radio"
                  onClick={() => creatorFilter("")}
                />
                <label htmlFor="all-sellers">All Sellers</label>
              </div>
              <div className="form-list-elem">
                <input
                  type="radio"
                  name="seller-type"
                  id="verified-only"
                  className="cryptoki-radio"
                  onClick={() => creatorFilter(true)}
                />
                <label htmlFor="verified-only">Verified Only</label>
              </div>
            </div>
            <div className="form-group">
              <div className="small-title">Reviews</div>
              <div className="form-list-elem">
                <input
                  type="radio"
                  name="reviews"
                  id="all"
                  className="cryptoki-radio"
                  onClick={() => reviewFilter("")}
                />
                <label htmlFor="all">All Reviews</label>
              </div>
              <div className="form-list-elem flex-left">
                <input
                  type="radio"
                  name="reviews"
                  id="5-stars"
                  className="cryptoki-radio"
                  onClick={() => reviewFilter("5")}
                />
                <label htmlFor="5-stars">
                  <span className="item-rating">
                    <span className="filled">
                      <svg className="crumina-icon">
                        <use xlinkHref="#star2-icon" />
                      </svg>
                    </span>
                    <span className="filled">
                      <svg className="crumina-icon">
                        <use xlinkHref="#star2-icon" />
                      </svg>
                    </span>
                    <span className="filled">
                      <svg className="crumina-icon">
                        <use xlinkHref="#star2-icon" />
                      </svg>
                    </span>
                    <span className="filled">
                      <svg className="crumina-icon">
                        <use xlinkHref="#star2-icon" />
                      </svg>
                    </span>
                    <span className="filled">
                      <svg className="crumina-icon">
                        <use xlinkHref="#star2-icon" />
                      </svg>
                    </span>
                  </span>
                </label>
                <div className="count">5</div>
              </div>
              <div className="form-list-elem flex-left">
                <input
                  type="radio"
                  name="reviews"
                  id="4-stars"
                  className="cryptoki-radio"
                  onClick={() => reviewFilter("4")}
                />
                <label htmlFor="4-stars">
                  <span className="item-rating">
                    <span className="filled">
                      <svg className="crumina-icon">
                        <use xlinkHref="#star2-icon" />
                      </svg>
                    </span>
                    <span className="filled">
                      <svg className="crumina-icon">
                        <use xlinkHref="#star2-icon" />
                      </svg>
                    </span>
                    <span className="filled">
                      <svg className="crumina-icon">
                        <use xlinkHref="#star2-icon" />
                      </svg>
                    </span>
                    <span className="filled">
                      <svg className="crumina-icon">
                        <use xlinkHref="#star2-icon" />
                      </svg>
                    </span>
                    <span>
                      <svg className="crumina-icon">
                        <use xlinkHref="#star2-icon" />
                      </svg>
                    </span>
                  </span>
                </label>
                <div className="count">4+</div>
              </div>
              <div className="form-list-elem flex-left">
                <input
                  type="radio"
                  name="reviews"
                  id="3-stars"
                  className="cryptoki-radio"
                  onClick={() => reviewFilter("3")}
                />
                <label htmlFor="3-stars">
                  <span className="item-rating">
                    <span className="filled">
                      <svg className="crumina-icon">
                        <use xlinkHref="#star2-icon" />
                      </svg>
                    </span>
                    <span className="filled">
                      <svg className="crumina-icon">
                        <use xlinkHref="#star2-icon" />
                      </svg>
                    </span>
                    <span className="filled">
                      <svg className="crumina-icon">
                        <use xlinkHref="#star2-icon" />
                      </svg>
                    </span>
                    <span>
                      <svg className="crumina-icon">
                        <use xlinkHref="#star2-icon" />
                      </svg>
                    </span>
                    <span>
                      <svg className="crumina-icon">
                        <use xlinkHref="#star2-icon" />
                      </svg>
                    </span>
                  </span>
                </label>
                <div className="count">3+</div>
              </div>
              <div className="form-list-elem flex-left">
                <input
                  type="radio"
                  name="reviews"
                  id="2-stars"
                  className="cryptoki-radio"
                  onClick={() => reviewFilter("2")}
                />
                <label htmlFor="2-stars">
                  <span className="item-rating">
                    <span className="filled">
                      <svg className="crumina-icon">
                        <use xlinkHref="#star2-icon" />
                      </svg>
                    </span>
                    <span className="filled">
                      <svg className="crumina-icon">
                        <use xlinkHref="#star2-icon" />
                      </svg>
                    </span>
                    <span>
                      <svg className="crumina-icon">
                        <use xlinkHref="#star2-icon" />
                      </svg>
                    </span>
                    <span>
                      <svg className="crumina-icon">
                        <use xlinkHref="#star2-icon" />
                      </svg>
                    </span>
                    <span>
                      <svg className="crumina-icon">
                        <use xlinkHref="#star2-icon" />
                      </svg>
                    </span>
                  </span>
                </label>
                <div className="count">2+</div>
              </div>
              <div className="form-list-elem flex-left">
                <input
                  type="radio"
                  name="reviews"
                  id="1-star"
                  className="cryptoki-radio"
                  onClick={() => reviewFilter("1")}
                />
                <label htmlFor="1-star">
                  <span className="item-rating">
                    <span className="filled">
                      <svg className="crumina-icon">
                        <use xlinkHref="#star2-icon" />
                      </svg>
                    </span>
                    <span>
                      <svg className="crumina-icon">
                        <use xlinkHref="#star2-icon" />
                      </svg>
                    </span>
                    <span>
                      <svg className="crumina-icon">
                        <use xlinkHref="#star2-icon" />
                      </svg>
                    </span>
                    <span>
                      <svg className="crumina-icon">
                        <use xlinkHref="#star2-icon" />
                      </svg>
                    </span>
                    <span>
                      <svg className="crumina-icon">
                        <use xlinkHref="#star2-icon" />
                      </svg>
                    </span>
                  </span>
                </label>
                <div className="count">1+</div>
              </div>
            </div>
            <div className="form-group">
              <NiceSelect
                arr={[
                  { name: "$ United States Dollars", value: "$" },
                  { name: "€ European Euro", value: "€" },
                  { name: "£ Great Britain Pound", value: "£" },
                ]}
                ChangeFilterData={(name, value) => currencyChange(name, value)}
                name="currency"
              />
              <div className="price-range">
                <input
                  type="number"
                  name="min"
                  onChange={(e) => changePrice(e)}
                  placeholder="From"
                />
                <input
                  type="number"
                  name="max"
                  onChange={(e) => changePrice(e)}
                  placeholder="To"
                />
              </div>
            </div>
            <input className="" type="submit" defaultValue="Apply Filters" />
            <input type="reset" defaultValue="Reset Filters" />
          </form>
        </div>
      </div>
    </aside>
  );
};

const mapStateToProps = (state) => ({
  filter: state.filter,
});

export default connect(mapStateToProps, {
  catagoryfilter,
  orderFilter,
  creatorFilter,
  priceFilter,
  reviewFilter,
  likeFilter,
})(ShopFilter);
