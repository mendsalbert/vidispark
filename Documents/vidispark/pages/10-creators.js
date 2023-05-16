import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import NiceSelect from "../src/components/NiceSelect";
import Paggination from "../src/components/Paggination";
import { getProductByFilter } from "../src/filter";
import Layouts from "../src/layouts/Layouts";
import { getCreator } from "../src/redux/action/creator";
import { iconSlider } from "../src/sliderProps";
import { dblock } from "../src/utils";
import { useUser } from "../src/services/user";

const Cretors = ({ getCreator, creators }) => {
  const [state, setstate] = useState([]);
  const [filter_, setFilter_] = useState({});
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    setFilteredData(creators);
  }, [creators]);

  const onChnage = (name, value) => {
    setFilter_({ ...filter_, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setFilteredData(getProductByFilter(creators, filter_));
    setActive(0);
  };

  const { users } = useUser();
  // Paggination
  const [active, setActive] = useState(0);
  let sort = 8;
  return (
    <Layouts>
      <div className="primary-content-area container content-padding">
        <div className="page-title-section">
          <h2>
            Explore<span className="gradient-text"> Creators</span>
          </h2>
        </div>
        {/* FILTERABLE BAR */}

        {/* FILTERABLE BAR */}
        {/* CREATORS GRID */}
        <div className="creators-box grid-4-columns">
          {users &&
            users.map((creator, i) => (
              <div
                key={i}
                className={` creator-item ${dblock(active, i, sort)}`}
              >
                <div className="creator-cover">
                  <img src={creator?.avatarCover || ""} alt="" />
                </div>
                <div className="creator-wrapper">
                  <div className="creator-info-wrapper">
                    <div className="creator-info">
                      <div className="avatar box-64">
                        <Link href="/08-profile-page">
                          <a>
                            <img src={creator.avatarUrl} alt="avatar" />
                            <span className="verified">
                              <svg className="crumina-icon">
                                <use xlinkHref="#check-icon" />
                              </svg>
                            </span>
                          </a>
                        </Link>
                      </div>
                      <div className="title">
                        <Link href="/08-profile-page">
                          <a>{creator.name}</a>
                        </Link>
                      </div>
                      <div className="item-meta">
                        <span className="gradient-text">
                          @{creator.username}
                        </span>
                      </div>
                    </div>
                    <div className="follow-me">
                      <button
                        className={`btn btn-small ${
                          creator.follow ? "btn-fuchsia" : "btn-dark"
                        }`}
                      >
                        {creator.follow ? "Unfollow" : "Follow!"}
                      </button>
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
                      <ul className="social-icons-list swiper-wrapper">
                        {creator.links &&
                          creator.links.map((link, l) => (
                            <li
                              className="social-icon icon-border swiper-slide"
                              key={l}
                            >
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

                  <div className="about-creator">
                    <p>{creator.bio}...</p>
                  </div>
                  <div className="projects-previews">
                    {creator.projects &&
                      creator.projects.map((project, j) => (
                        <div className="preview-box" key={j}>
                          <Link href="/07-product-page-v3">
                            <a>
                              <img src={project} alt="" />
                            </a>
                          </Link>
                        </div>
                      ))}
                    {creator.projects && creator.projects.length >= 3 && (
                      <div className="preview-box more-projects">
                        <Link href="/08-profile-page">
                          <a>
                            <svg className="crumina-icon">
                              <use xlinkHref="#dots-icon" />
                            </svg>
                          </a>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
                <div className="creator-stats">
                  <div className="stats-item">
                    <div className="label">Followers</div>
                    <div className="number">{creator.followers}</div>
                  </div>
                  <div className="stats-item">
                    <div className="label">Following</div>
                    <div className="number">{creator.following}</div>
                  </div>
                  <div className="stats-item">
                    <div className="label">Created</div>
                    <div className="number">{creator.created}</div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {/* CREATORS GRID */}
        {/* PAGINATION */}
        <Paggination
          active={active}
          setActive={setActive}
          sort={sort}
          length={filteredData && filteredData.length}
        />
        {/* PAGINATION */}
      </div>
    </Layouts>
  );
};

const mapStateTopProps = (state) => ({
  creators: state.creator.data,
});

export default connect(mapStateTopProps, { getCreator })(Cretors);
