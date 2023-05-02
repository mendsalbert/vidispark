import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Paggination from "../src/components/Paggination";
import Seller from "../src/components/seller/Seller";
import SellerFilter from "../src/components/seller/SellerFilter";
import { getProductByFilter } from "../src/filter";
import Layouts from "../src/layouts/Layouts";
import { getCreator } from "../src/redux/action/creator";

const Sellers = ({ getCreator, creators }) => {
  const [state, setstate] = useState([]);
  const [filter_, setFilter_] = useState({});
  const [filteredData, setFilteredData] = useState(null);
  useEffect(() => {
    setFilteredData(creators);
  }, [creators]);

  // Paggination
  const [active, setActive] = useState(0);
  let sort = 8;
  return (
    <Layouts>
      <div className="primary-content-area container content-padding">
        <div className="page-title-section">
          <h2>
            Explore<span className="gradient-text"> Creators</span>
          </h2>
        </div>
        {/* FILTERABLE BAR */}
        <SellerFilter
          setActive={setActive}
          setFilter_={setFilter_}
          setFilteredData={setFilteredData}
          getProductByFilter={getProductByFilter}
          filter_={filter_}
          creators={creators}
        />
        {/* FILTERABLE BAR */}
        {/* CREATORS GRID */}
        <div className="creators-box grid-4-columns">
          {filteredData &&
            filteredData.map((creator, i) => (
              <Seller
                key={i}
                creator={creator}
                i={i}
                active={active}
                sort={sort}
              />
            ))}
        </div>
        {/* CREATORS GRID */}
        {/* PAGINATION */}
        <Paggination
          active={active}
          setActive={setActive}
          sort={sort}
          length={filteredData && filteredData.length}
          className={"flex-center"}
        />
        {/* PAGINATION */}
      </div>
    </Layouts>
  );
};

const mapStateTopProps = (state) => ({
  creators: state.creator.data,
});

export default connect(mapStateTopProps, { getCreator })(Sellers);
