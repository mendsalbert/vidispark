import Link from "next/link";
import React from "react";
import Nft from "../Nft";

const HomeNewestItems = ({ data }) => {
  return (
    <div className="container section-padding">
      <div className="section-title-wrapper">
        <div className="section-title">
          <span className="gradient-text">Newest</span> Videos
        </div>
        <div className="all-items-link">
          {" "}
          <Link href="/02-explore">
            <a>Explore all Collections</a>
          </Link>{" "}
        </div>
      </div>
      <div className="featured-box">
        <div className="featured-box-wrapper grid-4-columns">
          {data && data.map((d, i) => d.newest && <Nft data={d} key={i} />)}
        </div>
        <div className="more-section flex-center">
          {" "}
          <Link href="/03-explore-v2">
            <a className="btn btn-normal btn-dark">View All Collections</a>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default HomeNewestItems;
