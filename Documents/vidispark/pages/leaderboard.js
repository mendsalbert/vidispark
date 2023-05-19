import Link from "next/link";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import NiceSelect from "../src/components/NiceSelect";
import Paggination from "../src/components/Paggination";
import Layouts from "../src/layouts/Layouts";
import { getCollector } from "../src/redux/action/collectors";
import { dblock } from "../src/utils";
import { useUser } from "../src/services/user";

const Cretors11 = ({ getCollector, collectors }) => {
  let sort = 6;
  const { users } = useUser();

  const [active, setActive] = useState(0);
  const [state, setstate] = useState([]);
  useEffect(() => {
    setFilterData(users);
  }, [users]);

  const [filterData, setFilterData] = useState(users);
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

        {/* FILTERABLE BAR */}
        {/* COLLECTORS LIST */}
        <div className="collectors-box">
          <table className="content-table">
            <thead>
              <tr>
                <th scope="col" className="heading-label">
                  Creator
                </th>
                <th scope="col" className="heading-label">
                  Tokens
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
