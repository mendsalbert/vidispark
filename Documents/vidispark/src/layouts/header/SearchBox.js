import { Fragment, useState } from "react";

const SearchBox = () => {
  const [activeToggle, setActiveToggle] = useState(false);
  const [active, setActive] = useState("All items");

  return (
    <Fragment>
      <div className="searchbox">
        <form
          method="get"
          className="main-search"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* <input
            className="main-search-params"
            type="hidden"
            name="params"
            defaultValue="all"
          /> */}
          {/* <button
            className={`search-params ${activeToggle ? "active" : ""}`}
            onClick={() => setActiveToggle(!activeToggle)}
          >
            <span className="search-param-title">{active}</span>{" "}
            <svg className="crumina-icon">
              <use xlinkHref="#arrow-down-icon" />
            </svg>
          </button> */}
          {/* <ul className="search-dropdown">
            <li
              data-param="all"
              onClick={() => {
                setActiveToggle(false);
                setActive("All items");
              }}
            >
              All items
            </li>
            <li
              data-param="auctions"
              onClick={() => {
                setActiveToggle(false);
                setActive("Auctions");
              }}
            >
              Auctions
            </li>
            <li
              data-param="collections"
              onClick={() => {
                setActiveToggle(false);
                setActive("Collections");
              }}
            >
              Collections
            </li>
            <li
              data-param="creators"
              onClick={() => {
                setActiveToggle(false);
                setActive("Auctions");
              }}
            >
              Auctions
            </li>
          </ul> */}
          <input
            type="text"
            className="search-input"
            name="head-search"
            id="head-search"
            placeholder="Enter your search here..."
          />
          <button className="search-button">
            <svg className="crumina-icon">
              <use xlinkHref="#search-icon" />
            </svg>
          </button>
        </form>
      </div>
    </Fragment>
  );
};
export default SearchBox;
