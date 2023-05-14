import Link from "next/link";
import React from "react";
const ProductInfo = ({ singleVid }) => {
  return (
    <>
      <div className="page-title-section">
        <h1 className="tw-text-xl -tw-mb-20">{singleVid?.videoData?.title}</h1>
      </div>
      <div className="avatar-block">
        <div className="avatar box-42">
          {" "}
          <Link href="/08-profile-page">
            <a>
              <img src={singleVid?.user?.avatarUrlL} alt="avatar" />
            </a>
          </Link>{" "}
          <span className="verified">
            <svg className="crumina-icon">
              <use xlinkHref="#check-icon" />
            </svg>
          </span>
        </div>
        <div className="avatar-meta">
          <div className="avatar-title">
            <span className="gradient-text">
              {" "}
              <Link href="/08-profile-page">
                <a>{singleVid?.user?.fullname}</a>
              </Link>{" "}
            </span>
          </div>
          <div className="avatar-meta">@{singleVid?.user?.username}</div>
        </div>
      </div>

      <div className="product-description">
        <div className="small-title">Description</div>
        <p>
          I am a self-taught digital artist who specializes in 3d art and motion
          graphics. Most of my works are inspired by nature and biomechanic
          themes.
        </p>
        <p>
          What does it mean? Biomechanics is the study of the structure,
          function and motion of the mechanical aspects of biological systems,
          at any level from whole organisms to organs, cells and cell
          organelles, using the methods of mechanics. Biomechanics is a branch
          of biophysics.
        </p>
      </div>
      <div className="bidding-section">
        <div className="place-bid">
          <button className="btn btn-wide btn-dark">Place a Bid!</button>
        </div>
        <div className="product-fav-counter">
          <svg className="crumina-icon">
            <use xlinkHref="#heart-icon" />
          </svg>
          <span className="count">105</span>
        </div>
        <div className="more-link">
          {" "}
          <a href="#">
            <svg className="crumina-icon">
              <use xlinkHref="#dots-icon" />
            </svg>
          </a>
        </div>
        <div className="social-share-box">
          <div className="share-icons">
            {" "}
            <a href="#">
              <svg className="crumina-icon">
                <use xlinkHref="#link-icon" />
              </svg>
            </a>{" "}
            <a href="#">
              <svg className="crumina-icon">
                <use xlinkHref="#facebook-icon" />
              </svg>
            </a>{" "}
            <a href="#">
              <svg className="crumina-icon">
                <use xlinkHref="#twitter-icon" />
              </svg>
            </a>
            <a href="">
              <svg className="crumina-icon">
                <use xlinkHref="#instagram-icon" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
