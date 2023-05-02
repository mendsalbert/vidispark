import { useState } from "react";
import { getProductByFilter } from "../filter";
import NiceSelect from "./NiceSelect";

const ExploreItemFilter = ({ items, setActive, setFilterData }) => {
  const [filter, setFilter] = useState({});
  const onChnage = (name, value) => {
    setFilter({ ...filter, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setFilterData(getProductByFilter(items, filter));
    setActive(0);
  };
  return (
    <div className="filterable-bar">
      <form id="artworks-filter-form" onSubmit={(e) => onSubmit(e)}>
        <div className="filter-item">
          <NiceSelect
            arr={[
              { name: "Newest to Oldest", value: "newest" },
              { name: "Oldest to Newest", value: "oldest" },
              { name: "Most Popular", value: "most" },
            ]}
            ChangeFilterData={(name, value) => onChnage(name, value)}
            name="order"
          />
        </div>
        <div className="filter-item">
          <NiceSelect
            arr={[
              { name: "Auctions Only", value: "auctions" },
              { name: "Buy Now", value: "buy" },
              { name: "All Artworks", value: "" },
            ]}
            ChangeFilterData={(name, value) => onChnage(name, value)}
            name="type"
          />
        </div>
        <div className="filter-item">
          <NiceSelect
            arr={[
              { name: "Verified Creators", value: true },
              { name: "All Creators", value: "" },
            ]}
            ChangeFilterData={(name, value) => onChnage(name, value)}
            name="verified"
          />
        </div>
        <div className="filter-item">
          <NiceSelect
            arr={[
              { name: "Ending Soon", value: true },
              { name: "Anytime", value: "" },
            ]}
            ChangeFilterData={(name, value) => onChnage(name, value)}
            name="verified"
          />
        </div>
        <div className="filter-item">
          <select className="select-nice ">
            <option value="lowest-to-highest" selected="">
              Lowest to Highest $
            </option>
            <option value="highest-to-lowest">Highest to Lowest $</option>
          </select>
        </div>
        <div className="filter-button">
          <button className="btn  btn-normal btn-dark">Filter</button>
        </div>
      </form>
    </div>
  );
};
export default ExploreItemFilter;
