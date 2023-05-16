import Link from "next/link";
import React from "react";
import { useUser } from "../../services/user";
const HomeTopCreators = () => {
  const { users, userInfo, unfollowUser, followUser } = useUser();

  return (
    <div className="container section-padding">
      <div className="section-title-wrapper">
        <div className="section-title">
          Top <span className="gradient-text">Creators</span>
        </div>
      </div>
      <div className="top-creators-box grid-2-columns">
        <div className="top-creator-item">
          <div className="creator-number">01</div>
          <div className="creator-box">
            <div className="avatar box-64">
              {" "}
              <Link href="profile-page">
                <a>
                  <picture>
                    <source type="image/avif" srcSet="avif/avatar.avif" />
                    <img
                      src={users[0].data.avatarUrl}
                      alt="avatar"
                      loading="lazy"
                      width={100}
                      height={100}
                    />
                  </picture>
                  <span className="verified">
                    <svg className="crumina-icon">
                      <use xlinkHref="#check-icon" />
                    </svg>
                  </span>
                </a>
              </Link>{" "}
            </div>
            <div className="creator-meta">
              <div className="title">
                {" "}
                <Link href="profile-page">
                  <a>{users[0].data.fullname}</a>
                </Link>{" "}
              </div>
              <div className="creator-meta">@{users[0].data.username}</div>
            </div>
          </div>
        </div>
        <div className="top-creator-item">
          <div className="creator-number">02</div>
          <div className="creator-box">
            <div className="avatar box-64">
              {" "}
              <Link href="profile-page">
                <a>
                  <img
                    src="img/avatar-2.png"
                    width={52}
                    height={52}
                    alt="avatar"
                    loading="lazy"
                  />
                  <span className="verified">
                    <svg className="crumina-icon">
                      <use xlinkHref="#check-icon" />
                    </svg>
                  </span>
                </a>
              </Link>{" "}
            </div>
            <div className="creator-meta">
              <div className="title">
                {" "}
                <Link href="profile-page">
                  <a>Jackie Jones</a>
                </Link>{" "}
              </div>
              <div className="creator-meta">@JackieJ</div>
            </div>
          </div>
        </div>
        <div className="top-creator-item">
          <div className="creator-number">03</div>
          <div className="creator-box">
            <div className="avatar box-64">
              {" "}
              <Link href="profile-page">
                <a>
                  <img
                    src="img/avatar-5.png"
                    height={52}
                    width={52}
                    alt="avatar"
                    loading="lazy"
                  />
                  <span className="verified">
                    <svg className="crumina-icon">
                      <use xlinkHref="#check-icon" />
                    </svg>
                  </span>
                </a>
              </Link>{" "}
            </div>
            <div className="creator-meta">
              <div className="title">
                {" "}
                <Link href="profile-page">
                  <a>Noir Artworks</a>
                </Link>{" "}
              </div>
              <div className="creator-meta">@noirArtks</div>
            </div>
          </div>
          <div className="projects-score">
            <div className="number title">94</div>
            <div className="label">Created</div>
          </div>
        </div>
        <div className="top-creator-item">
          <div className="creator-number">04</div>
          <div className="creator-box">
            <div className="avatar box-64">
              {" "}
              <Link href="profile-page">
                <a>
                  <img
                    src="img/avatar-3.png"
                    height={52}
                    width={52}
                    alt="avatar"
                    loading="lazy"
                  />
                  <span className="verified">
                    <svg className="crumina-icon">
                      <use xlinkHref="#check-icon" />
                    </svg>
                  </span>
                </a>
              </Link>{" "}
            </div>
            <div className="creator-meta">
              <div className="title">
                {" "}
                <Link href="profile-page">
                  <a>The Green Goo</a>
                </Link>{" "}
              </div>
              <div className="creator-meta">@daGreenGoo</div>
            </div>
          </div>
          <div className="projects-score">
            <div className="number title">83</div>
            <div className="label">Created</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTopCreators;
