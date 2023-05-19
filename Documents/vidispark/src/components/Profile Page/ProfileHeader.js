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
            <div className="followers-number">
              <div className="number">
                {user?.followers.length < 1 ? 0 : user?.followers.length}
              </div>
              <div className="label">Followers</div>
            </div>
            <div className="following-number">
              <div className="number">
                {" "}
                {user?.following.length < 1 ? 0 : user?.followers.length}
              </div>
              <div className="label">Following</div>
            </div>
            <div className="likes-number">
              <div className="number">2</div>
              <div className="label">Videos uploaded</div>
            </div>
          </div>
          <div className="profile-author-info">
            <h3 className="author-name gradient-text">
              {" "}
              <Link href="/08-profile-page">
                <a>{user.fullname}</a>
              </Link>{" "}
            </h3>
            <div className="author-meta">@DexterStark</div>
            <div className="download-file">
              Ox465d53...d9c6
              <svg className="crumina-icon">
                <use xlinkHref="#copy-icon" />
              </svg>
            </div>
          </div>
          <div className="projects-meta">
            <div className="projects-number">
              <div className="number">135</div>
              <div className="label">Created</div>
            </div>
            <div className="onsale-number">
              <div className="number">12</div>
              <div className="label">On Sale</div>
            </div>
            <div className="country">
              <div className="flag">
                <img src="img/content/profile/us-flag.png" alt="" />
              </div>
              <div className="label">United States</div>
            </div>
          </div>
        </div>
        <div className="author-description">
          <p>
            I am a self-taught digital artist who specializes in 3d art and
            motion graphics. Most of my works are inspired by nature and
            biomechanic themes. What does it mean? Biomechanics is the study...
            <span className="bold">Read More</span>
          </p>
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
