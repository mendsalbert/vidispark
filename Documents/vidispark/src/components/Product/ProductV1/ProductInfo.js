import { EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import { useUser } from "../../../services/user";
const ProductInfo = ({ singleVid }) => {
  const [followerState, setFollowerState] = useState("f");
  const { followUser, userInfo, unfollowUser } = useUser();

  return (
    <>
      <div className="page-title-section">
        <h1 className="tw-text-xl -tw-mb-20 tw-flex tw-flex-row tw-items-center tw-space-x-2">
          <span>{singleVid?.videoData?.title}</span>
          <div class="tw-w-3 tw-h-3 tw-rounded-full tw-bg-gray-400 "></div>
          <span className="tw-flex tw-flex-row tw-items-center tw-space-x-1 ">
            <span>{singleVid?.videoData?.views}</span>
            <EyeIcon />
          </span>
        </h1>
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
        <p>{singleVid?.videoData?.description}</p>
      </div>
      <div className="bidding-section">
        <div className="place-bid">
          {singleVid?.user?.following?.includes(userInfo[0]?.id) ? (
            <button
              type="button"
              onClick={() => {
                setFollowerState("f");
                unfollowUser(singleVid?.videoData?.uploaderId);
              }}
              className="btn btn-wide btn-dark"
            >
              {followerState == "f" ? "Admire" : "Stop Admiring"}
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                setFollowerState("nf");
                followUser(singleVid?.videoData?.uploaderId);
              }}
              className="btn btn-wide btn-dark"
            >
              {followerState == "nf" ? "Stop Admiring" : " Admiring"}
              Admire
            </button>
          )}
        </div>
        <div className="product-fav-counter">
          <svg className="crumina-icon">
            <use xlinkHref="#heart-icon" />
          </svg>
          <span className="count">105</span>
        </div>
        <div className="social-share-box tw-flex tw-flex-row tw-items-center">
          <div className="share-icons tw-flex tw-flex-row tw-items-center">
            {" "}
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-share"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                <path d="M8.7 10.7l6.6 -3.4"></path>
                <path d="M8.7 13.3l6.6 3.4"></path>
              </svg>
            </a>{" "}
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-message-circle-2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1"></path>
              </svg>
            </a>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
