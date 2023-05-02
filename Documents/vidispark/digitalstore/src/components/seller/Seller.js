import Link from "next/link";
import { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { iconSlider } from "../../sliderProps";
import { dblock } from "../../utils";

const Seller = ({ creator, active, i, sort }) => {
  return (
    <div className={` creator-item ${dblock(active, i, sort)}`}>
      <div className="creator-cover">
        <img src="img/content/creators/creator-cover-13.png" alt="" />
      </div>
      <div className="follow-me">
        <button
          className={`btn btn-small ${
            creator.follow
              ? "btn-fuchsia"
              : "btn-dark waves-effect waves-button waves-float waves-light"
          }`}
        >
          {creator.follow ? "Unfollow" : "Follow!"}
        </button>
      </div>
      <div className="creator-wrapper">
        <div className="creator-info-wrapper">
          <div className="creator-info">
            <div className="avatar box-64">
              <Link href="06-profile-page">
                <a>
                  <img src={creator.img} alt="avatar" />
                  <span className="verified">
                    <svg className="crumina-icon">
                      <use xlinkHref="#check-icon" />
                    </svg>
                  </span>
                </a>
              </Link>
            </div>
            <div className="title">
              <Link href="06-profile-page">
                <a>{creator.name}</a>
              </Link>
            </div>
            <div className="item-meta">
              <span className="gradient-text"> @{creator.username}</span>
            </div>
          </div>
        </div>
        {creator.links && creator.links.length > 5 ? (
          <Fragment>
            <div className="social-swiper-nav">
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
            <Swiper {...iconSlider} className="social-icons-carousel">
              <ul className="social-icons-list swiper-wrapper">
                {creator.links &&
                  creator.links.map((link, l) => (
                    <SwiperSlide
                      className="social-icon icon-border swiper-slide"
                      key={l}
                    >
                      <a href="#">
                        <svg className="crumina-icon">
                          <use xlinkHref={`#${link.name}-icon`} />
                        </svg>
                      </a>
                    </SwiperSlide>
                  ))}
              </ul>
            </Swiper>
          </Fragment>
        ) : (
          <Fragment>
            <ul className="social-icons-list">
              {creator.links &&
                creator.links.map((link, l) => (
                  <li className="social-icon icon-border " key={l}>
                    <a href="#">
                      <svg className="crumina-icon">
                        <use xlinkHref={`#${link.name}-icon`} />
                      </svg>
                    </a>
                  </li>
                ))}
            </ul>
          </Fragment>
        )}
        <div className="creator-stats">
          <div className="stats-item">
            <div className="number">{creator.followers}</div>
            <div className="label">Followers</div>
          </div>
          <div className="stats-item">
            <div className="number">{creator.following}</div>
            <div className="label">Following</div>
          </div>
          <div className="stats-item">
            <div className="number">{creator.created}</div>
            <div className="label">Created</div>
          </div>
        </div>
      </div>
      <div className="projects-previews">
        <div className="preview-box">
          <Link href="05-product">
            <a>
              <img src="img/content/previews/project-thumb-37.png" alt="" />
            </a>
          </Link>
        </div>
        <div className="preview-box">
          <Link href="05-product">
            <a>
              <img src="img/content/previews/project-thumb-38.png" alt="" />
            </a>
          </Link>
        </div>
        <div className="preview-box more-projects">
          <Link href="06-profile-page">
            <a>
              <svg className="crumina-icon">
                <use xlinkHref="#dots-icon" />
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Seller;
