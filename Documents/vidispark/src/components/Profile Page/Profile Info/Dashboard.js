import Link from "next/link";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Paggination from "../../Paggination";
import Layouts from "../../../layouts/Layouts";
import { getCollector } from "../../../redux/action/collectors";
import { dblock } from "../../../utils";
import { useUser } from "../../../services/user";
import { useVideo } from "../../../services/videos";

const Dashboard = ({ getCollector, collectors }) => {
  let sort = 6;
  const { users, userInfo } = useUser();
  const { videoResults } = useVideo();
  let users_ = users.sort((a, b) => {
    let tokensA = a.data.tokens ? Number(a.data.tokens) : 0;
    if (isNaN(tokensA)) tokensA = 0;
    let tokensB = b.data.tokens ? Number(b.data.tokens) : 0;
    if (isNaN(tokensB)) tokensB = 0;
    return tokensB - tokensA;
  });

  let filteredVid = videoResults.filter(
    (items) => items?.videoData?.uploaderId === userInfo[0]?.id
  );

  console.log(filteredVid);
  //   console.log(filteredVid);
  const [active, setActive] = useState(0);
  const [state, setstate] = useState([]);
  useEffect(() => {
    setFilterData(filteredVid);
  }, [filteredVid]);

  const [filterData, setFilterData] = useState(filteredVid);
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
    <>
      <div>
        {/* FILTERABLE BAR */}
        <div className="user-db-title">Dashboard</div>

        {/* FILTERABLE BAR */}
        {/* COLLECTORS LIST */}
        <div className="collectors-box">
          <table className="content-table">
            <thead>
              <tr>
                <th scope="col" className="heading-label">
                  Video
                </th>
                <th scope="col" className="heading-label">
                  Title
                </th>
                <th scope="col" className="heading-label">
                  Descriptoin
                </th>
                <th scope="col" className="heading-label">
                  Date added
                </th>
                <th scope="col" className="heading-label">
                  Views
                </th>
                <th scope="col" className="heading-label">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filterData &&
                filterData.map((data, i) => (
                  <tr key={i} className={`${dblock(active, i, sort, "__")}`}>
                    <td data-label="Collector">
                      <div className="collector-info avatar-block">
                        <div className="tw-rounded-2xl">
                          <Link href={`/video/${data?.videoId}`}>
                            <iframe
                              src={data?.videoData?.videoUrl}
                              border="0"
                              width="20"
                              height="20"
                              className=""
                              allowfullscreen
                              allow="autoplay; fullscreen"
                              autoplay="false"
                            />
                          </Link>
                        </div>
                        {/* <div className="avatar-meta">
                          <div className="avatar-title">
                            <Link href={`/profile-page/${collector?.id}`}>
                              <a>{collector?.data?.fullname}</a>
                            </Link>
                          </div>
                          <div className="avatar-meta">
                            @{collector?.data?.username}
                          </div>
                        </div> */}
                      </div>
                    </td>
                    {/* <td data-label="Items Collected" className="stats-item">
                      {collector?.data?.tokens}
                    </td> */}
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
    </>
  );
};
const mapStateToProps = (state) => ({
  collectors: state.collectors.data,
});
export default connect(mapStateToProps, { getCollector })(Dashboard);
