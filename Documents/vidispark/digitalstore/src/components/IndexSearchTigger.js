import { useState } from "react";

const IndexSearchTigger = () => {
  const [activeToggle, setActiveToggle] = useState(false);
  const [active, setActive] = useState("All items");

  const searchValue = [
    { name: "All Categories", value: "all" },
    { name: "UI templates", value: "ui-templates" },
    { name: "Coded templates", value: "coded-templates" },
    { name: "Social Graphics", value: "social-graphics" },
  ];

  return (
    <div className="search-block">
      <form
        method="get"
        className="main-search"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="main-search-params"
          type="hidden"
          name="params"
          defaultValue="all"
        />
        <button
          className={`search-params ${activeToggle ? "active" : ""}`}
          onClick={() => setActiveToggle(!activeToggle)}
        >
          <span className="button-text search-param-title">{active}</span>
          <svg className="crumina-icon">
            <use xlinkHref="#arrow-down-icon" />
          </svg>
        </button>
        <ul className="search-dropdown">
          {searchValue &&
            searchValue.map((searchValue, i) => (
              <li
                data-param={searchValue.value}
                key={i}
                onClick={() => {
                  setActive(searchValue.name);
                  setActiveToggle(false);
                }}
              >
                {searchValue.name}
              </li>
            ))}
        </ul>
        <input
          type="text"
          className="search-input"
          placeholder="Enter your search here..."
        />
        <button className="search-button">
          <svg className="crumina-icon">
            <use xlinkHref="#search-icon" />
          </svg>
        </button>
      </form>
    </div>
  );
};
export default IndexSearchTigger;
