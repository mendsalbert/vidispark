import Link from "next/link";
import React from "react";
const ProfileHeader = ({ user }) => {
  console.log(user);
  return (
    <div className="profile-header-section">
      <div className="cover-image">
        <img src={user?.avatarCover} alt="" className="tw-w-full tw-h-28" />
      </div>
      <div className="about-author-section container">
        <div className="profile-header-user-profile">
          <div className="avatar box-152">
            {" "}
            <Link href="/08-profile-page">
              <a>
                <img src={user?.avatarUrl} alt="" />
              </a>
            </Link>{" "}
            <span className="verified">
              <svg className="crumina-icon">
                <use xlinkHref="#check-icon" />
              </svg>
            </span>
          </div>
          <div className="follow-box">
            <button className="btn btn-normal btn-dark">Follow!</button>
          </div>
        </div>
        <div className="author-primary-info">
          <div className="activity-meta">
            <div className="followers-number"></div>
            <div className="following-number"></div>
          </div>
          <div className="profile-author-info">
            <h3 className="author-name gradient-text">
              {" "}
              <Link href="/08-profile-page">
                <a>{user?.fullname}</a>
              </Link>{" "}
            </h3>
            <div className="author-meta">@{user?.username}</div>
            <div className=" tw-flex tw-w-full tw-space-x-2 tw-items-center ">
              {user?.user_address?.slice(0, 6) +
                "..." +
                user?.user_address?.slice(-4)}

              <svg className="crumina-icon tw-ml-2">
                <use xlinkHref="#copy-icon" />
              </svg>
            </div>
            {/*  */}
            <div className="number">
              {user?.followers?.length < 1 ? 0 : user?.followers?.length}
            </div>
            <div className="label">Followers</div>
            <div className="number">
              {" "}
              {user?.following?.length < 1 ? 0 : user?.followers?.length}
            </div>
            <div className="label">Following</div>
          </div>
          <div className="projects-meta">
            {/* <div className="projects-number">
              <div className="number">135</div>
              <div className="label">Content Created</div>
            </div>
            <div className="onsale-number">
              <div className="number">12</div>
              <div className="label"></div>
            </div> */}
          </div>
        </div>
        <div className="author-description">
          <p>{user?.bio}</p>
          <ul className="social-icons-list">
            <li className="social-icon icon-border">
              {" "}
              <a href="#">
                <svg className="crumina-icon">
                  <use xlinkHref="#link-icon" />
                </svg>
              </a>
            </li>
            <li className="social-icon icon-border">
              {" "}
              <a href="#">
                <svg className="crumina-icon">
                  <use xlinkHref="#facebook-icon" />
                </svg>
              </a>
            </li>
            <li className="social-icon icon-border">
              {" "}
              <a href="#">
                <svg className="crumina-icon">
                  <use xlinkHref="#twitter-icon" />
                </svg>
              </a>
            </li>
            <li className="social-icon icon-border">
              {" "}
              <a href="#">
                <svg className="crumina-icon">
                  <use xlinkHref="#instagram-icon" />
                </svg>
              </a>
            </li>
            <li className="social-icon icon-border">
              {" "}
              <a href="#">
                <svg className="crumina-icon">
                  <use xlinkHref="#twitch-icon" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
