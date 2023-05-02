import { useEffect, useState } from "react";
import { connect } from "react-redux";
import BrowseCategories from "../src/components/BrowseCategories";
import ExploreItemFilter from "../src/components/ExploreItemFilter";
import Item from "../src/components/Item";
import Paggination from "../src/components/Paggination";
import Layouts from "../src/layouts/Layouts";

const Explore02 = ({ items }) => {
  const [filterData, setFilterData] = useState(items);
  useEffect(() => {
    setFilterData(items);
  }, [items]);
  // Paggination
  const [active, setActive] = useState(0);
  let sort = 8;

  // currency
  const [currency, setCurrency] = useState("$");
  return (
    <Layouts>
      <div className="primary-content-area content-padding">
        {/*  items categories carousel */}
        <BrowseCategories />
        <div className="container section-padding">
          <div className="section-title-wrapper">
            <div className="section-title">
              <span className="gradient-text">Explore</span> Items
            </div>
          </div>
          {/* filterable panel */}
          <ExploreItemFilter
            items={items}
            setActive={setActive}
            setFilterData={setFilterData}
          />
          {/* featured items grid */}
          <div className="featured-box">
            <div className="featured-box-wrapper grid-4-columns">
              {filterData &&
                filterData.map((item, i) => (
                  <Item
                    item={item}
                    key={i}
                    active={active}
                    i={i}
                    sort={sort}
                    currency={currency}
                  />
                ))}
            </div>
            <Paggination
              active={active}
              setActive={setActive}
              sort={sort}
              length={filterData && filterData.length}
              className={"flex-center"}
            />
          </div>
        </div>
      </div>
    </Layouts>
  );
};
const mapStateTopProps = (state) => ({
  items: state.data.products,
});
export default connect(mapStateTopProps, {})(Explore02);
