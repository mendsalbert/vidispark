import Link from "next/link";
import ProfileTab from "../src/components/Tabs/ProfileTab";
import Layouts from "../src/layouts/Layouts";

const ProfilePage = () => {
  return (
    <Layouts>
      <div className="primary-content-area container bottom-padding-70 profile-page-ds">
        <div className="profile-header-section">
          <div className="follow-box">
            <div className="more-link">
              <a href="#">
                <svg className="crumina-icon">
                  <use xlinkHref="#dots-icon" />
                </svg>
              </a>
            </div>
            <button className="btn btn-wide gradient-background btn-follow">
              Follow!
            </button>
          </div>
          <div className="cover-image">
            <img src="img/content/profile/profile-cover-2.png" alt="" />
          </div>
          <div className="about-author-section container">
            <div className="profile-header-user-profile">
              <div className="avatar box-152">
                <Link href="06-profile-page">
                  <a>
                    <img src="img/avatar.png" alt="" />
                  </a>
                </Link>
                <span className="verified">
                  <svg className="crumina-icon">
                    <use xlinkHref="#check-icon" />
                  </svg>
                </span>
              </div>
            </div>
            <div className="author-primary-info">
              <div className="activity-meta">
                <div className="followers-number">
                  <div className="number">903</div>
                  <div className="label">Followers</div>
                </div>
                <div className="following-number">
                  <div className="number">56</div>
                  <div className="label">Following</div>
                </div>
                <div className="likes-number">
                  <div className="number">12K</div>
                  <div className="label">Likes Received</div>
                </div>
              </div>
              <div className="profile-author-info">
                <h3 className="author-name">
                  <Link href="06-profile-page">
                    <a>Dexter Stark</a>
                  </Link>
                </h3>
                <div className="author-meta gradient-text">@DexterStark</div>
                <div className="item-rating">
                  <span className="filled">
                    <svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg>
                  </span>
                  <span className="filled">
                    <svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg>
                  </span>
                  <span className="filled">
                    <svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg>
                  </span>
                  <span className="filled">
                    <svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg>
                  </span>
                  <span>
                    <svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg>
                  </span>
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
              <ul className="social-icons-list">
                <li className="social-icon icon-border">
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#link-icon" />
                    </svg>
                  </a>
                </li>
                <li className="social-icon icon-border">
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#facebook-icon" />
                    </svg>
                  </a>
                </li>
                <li className="social-icon icon-border">
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#twitter-icon" />
                    </svg>
                  </a>
                </li>
                <li className="social-icon icon-border">
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#instagram-icon" />
                    </svg>
                  </a>
                </li>
                <li className="social-icon icon-border">
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
        {/*   profile header mobile */}
        <div className="profile-header-mobile">
          <div className="cover-image">
            <img src="img/content/profile/profile-cover-2.png" alt="" />
          </div>
          <div className="about-author-section container">
            <div className="profile-header-user-profile">
              <div className="avatar box-64 bordered">
                <Link href="06-profile-page">
                  <a>
                    <img src="img/avatar.png" alt="" />
                  </a>
                </Link>
                <span className="verified">
                  <svg className="crumina-icon">
                    <use xlinkHref="#check-icon" />
                  </svg>
                </span>
              </div>
              <div className="profile-author-info">
                <h5 className="author-name">
                  <Link href="06-profile-page">
                    <a>Dexter Stark</a>
                  </Link>
                </h5>
                <div className="author-meta gradient-text">@DexterStark</div>
                <div className="item-rating">
                  <span className="filled">
                    <svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg>
                  </span>
                  <span className="filled">
                    <svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg>
                  </span>
                  <span className="filled">
                    <svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg>
                  </span>
                  <span className="filled">
                    <svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg>
                  </span>
                  <span>
                    <svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="follow-box">
                <div className="more-link">
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#dots-icon" />
                    </svg>
                  </a>
                </div>
                <button className="btn btn-wide gradient-background btn-follow">
                  Follow!
                </button>
              </div>
            </div>
          </div>
          <ul className="social-icons-list">
            <li className="social-icon icon-border">
              <a href="#">
                <svg className="crumina-icon">
                  <use xlinkHref="#link-icon" />
                </svg>
              </a>
            </li>
            <li className="social-icon icon-border">
              <a href="#">
                <svg className="crumina-icon">
                  <use xlinkHref="#facebook-icon" />
                </svg>
              </a>
            </li>
            <li className="social-icon icon-border">
              <a href="#">
                <svg className="crumina-icon">
                  <use xlinkHref="#twitter-icon" />
                </svg>
              </a>
            </li>
            <li className="social-icon icon-border">
              <a href="#">
                <svg className="crumina-icon">
                  <use xlinkHref="#instagram-icon" />
                </svg>
              </a>
            </li>
            <li className="social-icon icon-border">
              <a href="#">
                <svg className="crumina-icon">
                  <use xlinkHref="#twitch-icon" />
                </svg>
              </a>
            </li>
          </ul>
          <div className="author-primary-info">
            <div className="activity-meta">
              <div className="followers-number">
                <div className="number">903</div>
                <div className="label">Followers</div>
              </div>
              <div className="following-number">
                <div className="number">56</div>
                <div className="label">Following</div>
              </div>
              <div className="projects-number">
                <div className="number">135</div>
                <div className="label">Created</div>
              </div>
            </div>
          </div>
        </div>
        {/*  profile page body */}
        <div className="profile-page-container">
          <div className="tabs-block swiper-container">
            <div className="swiper-nav">
              <div className="swiper-button-next">
                <svg className="crumina-icon next-button">
                  <use xlinkHref="#arrow-right2-icon" />
                </svg>
              </div>
              <div className="swiper-button-prev">
                <svg className="crumina-icon prev-button">
                  <use xlinkHref="#arrow-left2-icon" />
                </svg>
              </div>
            </div>
            <ProfileTab />
          </div>
        </div>
      </div>
    </Layouts>
  );
};
export default ProfilePage;
