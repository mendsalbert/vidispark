import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Item from "../src/components/Item";
import Paggination from "../src/components/Paggination";
import ShopFilter from "../src/components/ShopFilter";
import Layouts from "../src/layouts/Layouts";

const ShopCategory = ({ products }) => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(products);
  }, [products]);

  // Paggination
  const [active, setActive] = useState(0);
  let sort = 5;

  // currency
  const [currency, setCurrency] = useState("$");

  return (
    <Layouts>
      <div className="primary-content-area container grid-aside-main-4-col content-padding">
        {/* aside */}
        <ShopFilter
          items={products}
          onSubmit={(filter) => onSubmit(filter)}
          setFilteredData={setFilteredData}
          products={products}
          setCurrency={setCurrency}
        />
        <div className="main-content-area">
          <div className="page-title">
            <h2>
              <span className="gradient-text">Explore</span> Items
            </h2>
          </div>
          {/* featured items grid */}
          <div className="featured-box">
            <div className="featured-box-wrapper grid-3-columns">
              {filteredData &&
                filteredData.map((item, i) => (
                  <Item
                    item={item}
                    key={i}
                    active={active}
                    i={i}
                    sort={sort}
                    currency={currency}
                    setCurrency={setCurrency}
                  />
                ))}
            </div>
          </div>
          <Paggination
            active={active}
            setActive={setActive}
            sort={sort}
            length={filteredData && filteredData.length}
            className={"flex-center"}
          />
        </div>
      </div>
    </Layouts>
  );
};
const mapStateToProps = (state) => ({
  products: state.data.products,
});
export default connect(mapStateToProps, {})(ShopCategory);
