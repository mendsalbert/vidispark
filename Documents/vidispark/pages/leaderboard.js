import Link from "next/link";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import NiceSelect from "../src/components/NiceSelect";
import Paggination from "../src/components/Paggination";
import Layouts from "../src/layouts/Layouts";
import { getCollector } from "../src/redux/action/collectors";
import { dblock } from "../src/utils";

const Cretors11 = ({ getCollector, collectors }) => {
  let sort = 6;
  const [active, setActive] = useState(0);
  const [state, setstate] = useState([]);
  useEffect(() => {
    setFilterData(collectors);
  }, [collectors]);

  const [filterData, setFilterData] = useState(collectors);
  const [iconValue, setIconValue] = useState("$");
  const filterFun = (name, value) => {
    // setFilterData(getProductByFilter(collectors, { time: value }));
    setActive(0);
  };
  const iconValueChange = (name, value) => {
    setIconValue(value);
    setActive(0);
  };

  return (
    <Layouts>
      <div className="primary-content-area container content-padding">
        <div className="page-title-section">
          <h2>
            Explore
            <span className="gradient-text"> Users with more tokens</span>
          </h2>
        </div>
        {/* FILTERABLE BAR */}
        <div className="collectors-filter">
          <form className="flex-right">
            <NiceSelect
              arr={[
                { name: "All Time", value: "" },
                { name: "Last Week", value: "week" },
                { name: "Last Month", value: "month" },
              ]}
              ChangeFilterData={(name, value) => filterFun(name, value)}
              name={"time"}
            />
            <NiceSelect
              arr={[
                { name: "Show in USD", value: "$" },
                { name: "Show in Euro", value: "€" },
              ]}
              ChangeFilterData={(name, value) => iconValueChange(name, value)}
              name={"value"}
            />
          </form>
        </div>
        {/* FILTERABLE BAR */}
        {/* COLLECTORS LIST */}
        <div className="collectors-box">
          <table className="content-table">
            <thead>
              <tr>
                <th scope="col" className="heading-label">
                  Collector
                </th>
                <th scope="col" className="heading-label">
                  Items Collected
                </th>
                <th scope="col" className="heading-label">
                  Items Owned
                </th>
                <th scope="col" className="heading-label">
                  AVG PURCHASE PRICE
                </th>
                <th scope="col" className="heading-label">
                  Total purchased
                </th>
                <th scope="col" className="heading-label">
                  Top purchase
                </th>
                <th scope="col" className="heading-label">
                  Item resold
                </th>
                <th scope="col" className="heading-label">
                  Avg.resell price
                </th>
                <th scope="col" className="heading-label">
                  Total resold
                </th>
              </tr>
            </thead>
            <tbody>
              {filterData &&
                filterData.map((collector, i) => (
                  <tr key={i} className={`${dblock(active, i, sort, "__")}`}>
                    <td data-label="Collector">
                      <div className="collector-info avatar-block">
                        <div className="avatar box-42">
                          <Link href="/08-profile-page">
                            <a>
                              <img src={collector.creator.img} alt="avatar" />
                              {collector.creator.varified && (
                                <span className="verified">
                                  <svg className="crumina-icon">
                                    <use xlinkHref="#check-icon" />
                                  </svg>
                                </span>
                              )}
                            </a>
                          </Link>
                        </div>
                        <div className="avatar-meta">
                          <div className="avatar-title">
                            <Link href="/08-profile-page">
                              <a>{collector.creator.name}</a>
                            </Link>
                          </div>
                          <div className="avatar-meta">
                            @{collector.creator.username}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td data-label="Items Collected" className="stats-item">
                      {collector.collection}
                    </td>
                    <td data-label="Items Owned" className="stats-item">
                      {collector.owned}
                    </td>
                    <td data-label="AVG PURCHASE PRICE" className="stats-item">
                      {iconValue}
                      {collector.avgPurchasePrice}
                    </td>
                    <td data-label="Total purchased" className="stats-item">
                      {iconValue}
                      {collector.totalPurchased}
                    </td>
                    <td data-label="Top purchase" className="stats-item">
                      {collector.topPurchased
                        ? `${iconValue}${collector.topPurchased}`
                        : "-"}
                    </td>
                    <td data-label="Item resold" className="stats-item">
                      {collector.itemResold ? `${collector.itemResold}` : "-"}
                    </td>
                    <td data-label="Avg.resell price" className="stats-item">
                      {collector.resellPrice
                        ? `${iconValue}${collector.resellPrice}`
                        : "-"}
                    </td>
                    <td data-label="Total resold" className="stats-item">
                      {collector.resold
                        ? `${iconValue}${collector.resold}`
                        : "-"}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        <Paggination
          active={active}
          setActive={setActive}
          sort={sort}
          length={filterData && filterData.length}
          className="flex-center"
        />
        {/* PAGINATION */}
      </div>
    </Layouts>
  );
};
const mapStateToProps = (state) => ({
  collectors: state.collectors.data,
});
export default connect(mapStateToProps, { getCollector })(Cretors11);
