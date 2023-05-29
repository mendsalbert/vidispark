import Link from "next/link";
import React from "react";
import { Nav, Tab } from "react-bootstrap";
import Layouts from "../src/layouts/Layouts";

const Activity = () => {
  return (
    <Layouts>
      <div className="primary-content-area container content-padding">
        <div className="section-title-wrapper">
          <div className="section-title">
            <span className="gradient-text">Activity</span> Stream
          </div>
        </div>
        <div className="activity-stream">
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
            <Tab.Container defaultActiveKey={"tab1"}>
              <Nav as={"ul"} className="tabs-list swiper-wrapper">
                <Nav.Link as="li" eventKey={"tab1"} className="swiper-slide">
                  <a href="#tab1">All Activity</a>
                </Nav.Link>
                <Nav.Link as="li" eventKey={"tab2"} className="swiper-slide">
                  <a href="#tab2">Listings</a>
                </Nav.Link>
                <Nav.Link as="li" eventKey={"tab3"} className="swiper-slide">
                  <a href="#tab3">Sales</a>
                </Nav.Link>
                <Nav.Link as="li" eventKey={"tab4"} className="swiper-slide">
                  <a href="#tab4">Purchases</a>
                </Nav.Link>
                <Nav.Link as="li" eventKey={"tab5"} className="swiper-slide">
                  <a href="#tab5">Bids</a>
                </Nav.Link>
                <Nav.Link as="li" eventKey={"tab6"} className="swiper-slide">
                  <a href="#tab6">Likes</a>
                </Nav.Link>
                <Nav.Link as="li" eventKey={"tab7"} className="swiper-slide">
                  <a href="#tab7">Follows</a>
                </Nav.Link>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="tab1" className="tab">
                  <div className="activity-list">
                    <div className="activity-item bid">
                      <div className="bid-placer">
                        <div className="avatar box-42">
                          {" "}
                          <Link href="/08-profile-page">
                            <a>
                              <img src="img/avatar-15.png" alt="avatar" />
                            </a>
                          </Link>{" "}
                        </div>
                        <div className="bid-info">
                          <div className="bid-title">
                            Bid placed by
                            <span className="gradient-text">
                              {" "}
                              <Link href="/08-profile-page">
                                <a>Crimson Ray</a>
                              </Link>{" "}
                            </span>
                            of 2.31ETH (125.230 U$D) for
                            <span className="colored">
                              {" "}
                              <Link href="/06-product-page-v2">
                                <a>Breathing Nature</a>
                              </Link>{" "}
                            </span>
                            by
                            <span className="gradient-text">
                              {" "}
                              <Link href="/08-profile-page">
                                <a>Dexter Stark</a>
                              </Link>{" "}
                            </span>
                          </div>
                          <div className="bid-date">32 minutes ago</div>
                        </div>
                      </div>
                      <div className="bid-product">
                        {" "}
                        <Link href="/06-product-page-v2">
                          <a>
                            <img
                              src="img/content/previews/project-thumb-1.png"
                              alt=""
                            />
                          </a>
                        </Link>{" "}
                      </div>
                    </div>
                    <div className="activity-item bid">
                      <div className="bid-placer">
                        <div className="avatar box-42">
                          {" "}
                          <Link href="/08-profile-page">
                            <a>
                              <img src="img/avatar-13.png" alt="avatar" />
                            </a>
                          </Link>{" "}
                        </div>
                        <div className="bid-info">
                          <div className="bid-title">
                            Bid placed by
                            <span className="gradient-text">
                              {" "}
                              <Link href="/08-profile-page">
                                <a>JennArt</a>
                              </Link>{" "}
                            </span>
                            of 1.90ETH (86.325 U$D) for
                            <span className="colored">
                              {" "}
                              <Link href="/06-product-page-v2">
                                <a>Social Blockz</a>
                              </Link>{" "}
                            </span>
                            by
                            <span className="gradient-text">
                              {" "}
                              <Link href="/08-profile-page">
                                <a>Jackie Jones</a>
                              </Link>{" "}
                            </span>
                          </div>
                          <div className="bid-date">39 minutes ago</div>
                        </div>
                      </div>
                      <div className="bid-product">
                        {" "}
                        <Link href="/06-product-page-v2">
                          <a>
                            <img
                              src="img/content/previews/project-thumb-5.png"
                              alt=""
                            />
                          </a>
                        </Link>{" "}
                      </div>
                    </div>
                    <div className="activity-item like">
                      <div className="bid-placer">
                        <div className="avatar box-42">
                          {" "}
                          <Link href="/08-profile-page">
                            <a>
                              <img src="img/avatar-5.png" alt="avatar" />
                            </a>
                          </Link>{" "}
                          <span className="verified">
                            <svg className="crumina-icon">
                              <use xlinkHref="#check-icon" />
                            </svg>
                          </span>
                        </div>
                        <div className="bid-info">
                          <div className="bid-title">
                            <span className="gradient-text">
                              {" "}
                              <Link href="/08-profile-page">
                                <a>Noir Artworks</a>
                              </Link>{" "}
                            </span>
                            liked
                            <span className="colored">
                              {" "}
                              <Link href="/06-product-page-v2">
                                <a>Canary’s Kitchen</a>
                              </Link>{" "}
                            </span>
                          </div>
                          <div className="bid-date">47 minutes ago</div>
                        </div>
                      </div>
                      <div className="bid-product">
                        {" "}
                        <Link href="/06-product-page-v2">
                          <a>
                            <img
                              src="img/content/previews/project-thumb-6.png"
                              alt=""
                            />
                          </a>
                        </Link>{" "}
                      </div>
                    </div>
                    <div className="activity-item follow">
                      <div className="bid-placer">
                        <div className="avatar box-42">
                          {" "}
                          <Link href="/08-profile-page">
                            <a>
                              <img src="img/avatar-10.png" alt="avatar" />
                            </a>
                          </Link>{" "}
                          <span className="verified">
                            <svg className="crumina-icon">
                              <use xlinkHref="#check-icon" />
                            </svg>
                          </span>
                        </div>
                        <div className="bid-info">
                          <div className="bid-title">
                            <span className="gradient-text">
                              {" "}
                              <Link href="/08-profile-page">
                                <a>Nicholas Stevens</a>
                              </Link>{" "}
                            </span>
                            is now following
                            <span className="gradient-text">
                              {" "}
                              <Link href="/08-profile-page">
                                <a>Jackie Jones</a>
                              </Link>{" "}
                            </span>
                          </div>
                          <div className="bid-date">52 minutes ago</div>
                        </div>
                      </div>
                    </div>
                    <div className="activity-item sale">
                      <div className="bid-placer">
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
                        <div className="bid-info">
                          <div className="bid-title">
                            <span className="gradient-text">
                              {" "}
                              <Link href="/08-profile-page">
                                <a>Dexter Stark</a>
                              </Link>{" "}
                            </span>
                            sold
                            <span className="colored">
                              {" "}
                              <Link href="/06-product-page-v2">
                                <a>Golden Ebony</a>
                              </Link>{" "}
                            </span>
                            for 1.97ETH (104.368 U$D)
                          </div>
                          <div className="bid-date">53 minutes ago</div>
                        </div>
                      </div>
                      <div className="bid-product">
                        {" "}
                        <Link href="/06-product-page-v2">
                          <a>
                            <img
                              src="img/content/previews/project-thumb-7.png"
                              alt=""
                            />
                          </a>
                        </Link>{" "}
                      </div>
                    </div>
                    <div className="activity-item purchase">
                      <div className="bid-placer">
                        <div className="avatar box-42">
                          {" "}
                          <Link href="/08-profile-page">
                            <a>
                              <img src="img/avatar-14.png" alt="avatar" />
                            </a>
                          </Link>{" "}
                        </div>
                        <div className="bid-info">
                          <div className="bid-title">
                            <span className="gradient-text">
                              {" "}
                              <Link href="/08-profile-page">
                                <a>Derek Greyson</a>
                              </Link>{" "}
                            </span>
                            purchased
                            <span className="colored">
                              {" "}
                              <Link href="/06-product-page-v2">
                                <a>Bubblegum Dream</a>
                              </Link>{" "}
                            </span>
                            for 3.01ETH (169.478 U$D)
                          </div>
                          <div className="bid-date">56 minutes ago</div>
                        </div>
                      </div>
                      <div className="bid-product">
                        {" "}
                        <Link href="/06-product-page-v2">
                          <a>
                            <img
                              src="img/content/previews/project-thumb-8.png"
                              alt=""
                            />
                          </a>
                        </Link>{" "}
                      </div>
                    </div>
                    <div className="activity-item listing">
                      <div className="bid-placer">
                        <div className="avatar box-42">
                          {" "}
                          <Link href="/08-profile-page">
                            <a>
                              <img src="img/avatar-2.png" alt="avatar" />
                            </a>
                          </Link>{" "}
                          <span className="verified">
                            <svg className="crumina-icon">
                              <use xlinkHref="#check-icon" />
                            </svg>
                          </span>
                        </div>
                        <div className="bid-info">
                          <div className="bid-title">
                            <span className="gradient-text">
                              {" "}
                              <Link href="/08-profile-page">
                                <a>Jackie Jones</a>
                              </Link>{" "}
                            </span>
                            just listed
                            <span className="colored">
                              {" "}
                              <Link href="/06-product-page-v2">
                                <a>Soul Picz Block</a>
                              </Link>{" "}
                            </span>
                            for 3.25ETH (259.022 U$D)
                          </div>
                          <div className="bid-date">58 minutes ago</div>
                        </div>
                      </div>
                      <div className="bid-product">
                        {" "}
                        <Link href="/06-product-page-v2">
                          <a>
                            <img
                              src="img/content/previews/project-thumb-9.png"
                              alt=""
                            />
                          </a>
                        </Link>{" "}
                      </div>
                    </div>
                    <div className="activity-item bid">
                      <div className="bid-placer">
                        <div className="avatar box-42">
                          {" "}
                          <Link href="/08-profile-page">
                            <a>
                              <img src="img/avatar-15.png" alt="avatar" />
                            </a>
                          </Link>{" "}
                        </div>
                        <div className="bid-info">
                          <div className="bid-title">
                            Bid placed by
                            <span className="gradient-text">
                              {" "}
                              <Link href="/08-profile-page">
                                <a>Crimson Ray</a>
                              </Link>{" "}
                            </span>
                            of 0.25ETH (67.007u$d) for
                            <span className="colored">
                              {" "}
                              <Link href="/06-product-page-v2">
                                <a>Octo-Oceanic</a>
                              </Link>{" "}
                            </span>
                          </div>
                          <div className="bid-date">59 minutes ago</div>
                        </div>
                      </div>
                      <div className="bid-product">
                        {" "}
                        <Link href="/06-product-page-v2">
                          <a>
                            <img
                              src="img/content/previews/project-thumb-4.png"
                              alt=""
                            />
                          </a>
                        </Link>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="load-more_bars">
                    <div className="load-more_bar" />
                    <div className="load-more_bar" />
                    <div className="load-more_bar" />
                    <div className="load-more_bar" />
                    <div className="load-more_bar" />
                    <div className="load-more_bar" />
                    <div className="load-more_bar" />
                    <div className="load-more_bar" />
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </div>
    </Layouts>
  );
};
export default Activity;
