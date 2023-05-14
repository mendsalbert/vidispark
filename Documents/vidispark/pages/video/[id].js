import React, { useEffect } from "react";
import ProductInfo from "../../src/components/Product/ProductV1/ProductInfo";
import ProductRelatedItems from "../../src/components/Product/ProductV1/ProductRelatedItems";
import ProductTabs from "../../src/components/Product/ProductV1/ProductTabs";
import Layouts from "../../src/layouts/Layouts";
import { countdown } from "../../src/utils";
import ReactPlayer from "react-player";
import { useRouter } from "next/router";
import { useVideo } from "../../src/services/videos";
const Product05 = () => {
  useEffect(() => {
    countdown();
  }, []);

  const router = useRouter();
  const { id } = router.query;

  const { videoResults } = useVideo();
  const singleVid = videoResults?.filter((item) => item.videoId == id);
  return (
    <Layouts>
      {/* <div className="product-page product-version-1"> */}
      <div className="">
        <div className="product-media">
          <a
            className="expand-icon"
            data-fslightbox=""
            href="img/content/product-img/product-2.jpg"
          >
            <svg className="crumina-icon">
              <use xlinkHref="#maximize-icon" />
            </svg>
          </a>
          {/* <ReactPlayer
            url="https://media.thetavideoapi.com/video_u3d9u6gy1pmxfrscd9j5csmiam/master.m3u8"
            controls
            width="100%"
            height="auto"
            className="rounded-md shadow-lg"
          /> */}
          <iframe
            src={singleVid[0]?.videoData?.videoUrl}
            border="0"
            width="100%"
            height="500"
            allowfullscreen
            allow="autoplay; fullscreen"
            autoplay="false"
          />
        </div>
        <div className="product-info">
          <div className="product-info-wrapper">
            {/* / Products Info */}
            <div className="page-title-section">
              <h1>Breathing Nature</h1>
            </div>
            <div className="avatar-block">
              <div className="avatar box-42">
                {" "}
                <Link href="/08-profile-page">
                  <a>
                    <img src="img/avatar.png" alt="avatar" />
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
                      <a>Dexter Stark</a>
                    </Link>{" "}
                  </span>
                </div>
                <div className="avatar-meta">@DexterStark</div>
              </div>
            </div>
            <div className="product-meta-section">
              <div className="product-meta-item">
                <div className="label">Current bid</div>
                <div className="value">2.31 ETH</div>
                <div className="caption">125.230 U$D</div>
              </div>
              <div className="product-meta-item">
                <div className="label">Edition</div>
                <div className="value">01/40</div>
                <div className="caption">Tokens</div>
              </div>
              <div className="product-meta-item">
                <div className="label">AUCTION ENDING IN</div>
                <div className="countdown">
                  <div
                    className="js-countdown"
                    data-timer={104400}
                    data-labels="Days , Hours , Mins , Secs"
                  />
                </div>
              </div>
            </div>
            <div className="product-description">
              <div className="small-title">Description</div>
              <p>
                I am a self-taught digital artist who specializes in 3d art and
                motion graphics. Most of my works are inspired by nature and
                biomechanic themes.
              </p>
              <p>
                What does it mean? Biomechanics is the study of the structure,
                function and motion of the mechanical aspects of biological
                systems, at any level from whole organisms to organs, cells and
                cell organelles, using the methods of mechanics. Biomechanics is
                a branch of biophysics.
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
            {/* / Products Tabs */}
            <ProductTabs />
            {/*  RELATED ITEMS */}
          </div>
        </div>
      </div>
    </Layouts>
  );
};
export default Product05;
