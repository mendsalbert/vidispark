import Link from "next/link";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import BlogClassicFilter from "../src/components/Blog/BlogClassicFilter";
import BlogClassicPostList from "../src/components/Blog/BlogClassicPostList";
import Paggination from "../src/components/Paggination";
import Layouts from "../src/layouts/Layouts";

const BlogClassic = ({ blogs }) => {
  const [filterData, setFilterData] = useState(blogs);
  useEffect(() => {
    setFilterData(blogs);
  }, [blogs]);

  // Paggination
  const [active, setActive] = useState(0);
  let sort = 5;
  return (
    <Layouts>
      <div className="primary-content-area container content-padding">
        <div className="page-title-section">
          <h2>
            Our <span className="gradient-text">Blog Classic</span>
          </h2>
        </div>
        <BlogClassicFilter
          setFilterData={setFilterData}
          blogs={blogs}
          setActive={setActive}
        />
        {/* blog area */}
        <div className="blog-classic-area grid-right-sidebar-large">
          <div className="blog-list">
            <BlogClassicPostList
              blogs={filterData}
              active={active}
              sort={sort}
            />
            <Paggination
              active={active}
              setActive={setActive}
              sort={sort}
              length={filterData && filterData.length}
              className={"flex-left"}
            />
          </div>
          {/*  ASIDE */}
          <aside>
            <div className="widgets-list">
              {/*  RECENT POSTS WIDGET */}
              <div className="widget-2 recent-posts-widget">
                <div className="widget-title h5">Latest News</div>
                <div className="widget-body">
                  <div className="recent-posts-widget-item">
                    <div className="recent-posts-widget-item-img">
                      <Link href="15-blog-post-sidebar">
                        <a>
                          <img
                            src="img/content/latest-news/news-thumb9.png"
                            alt=""
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="recent-posts-widget-item-info">
                      <div className="recent-posts-widget-item-tags">
                        <a className="tag-item" href="#">
                          Guides
                        </a>
                      </div>
                      <div className="recent-posts-widget-item-title">
                        <Link href="15-blog-post-sidebar">
                          <a>
                            We explain with details everything you need to know
                            about crypto art and cryptocurrencies!
                          </a>
                        </Link>
                      </div>
                      <div className="recent-posts-widget-item-meta">
                        by{" "}
                        <Link href="06-profile-page">
                          <a>Cryptoki</a>
                        </Link>
                        {","} March 26th, 2021
                      </div>
                    </div>
                  </div>
                  <div className="recent-posts-widget-item">
                    <div className="recent-posts-widget-item-img">
                      <Link href="15-blog-post-sidebar">
                        <a>
                          <img
                            src="img/content/latest-news/news-thumb10.png"
                            alt=""
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="recent-posts-widget-item-info">
                      <div className="recent-posts-widget-item-tags">
                        <a className="tag-item" href="#">
                          Guides
                        </a>{" "}
                        <a className="tag-item" href="#">
                          News
                        </a>
                      </div>
                      <div className="recent-posts-widget-item-title">
                        <Link href="15-blog-post-sidebar">
                          <a>
                            {`Here’s`} a quick guide about how to make money
                            selling your artworks with Criptoki
                          </a>
                        </Link>
                      </div>
                      <div className="recent-posts-widget-item-meta">
                        by{" "}
                        <Link href="06-profile-page">
                          <a>Marina Valentine</a>
                        </Link>
                        {","} March 13th, 2021
                      </div>
                    </div>
                  </div>
                  <div className="recent-posts-widget-item">
                    <div className="recent-posts-widget-item-img">
                      <Link href="15-blog-post-sidebar">
                        <a>
                          <img
                            src="img/content/latest-news/news-thumb11.png"
                            alt=""
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="recent-posts-widget-item-info">
                      <div className="recent-posts-widget-item-tags">
                        <a className="tag-item" href="#">
                          Currencies
                        </a>
                      </div>
                      <div className="recent-posts-widget-item-title">
                        <Link href="15-blog-post-sidebar">
                          <a>
                            {`What’s`} ETH? An in-depth view of the currency
                            used in the market
                          </a>
                        </Link>
                      </div>
                      <div className="recent-posts-widget-item-meta">
                        by{" "}
                        <Link href="06-profile-page">
                          <a>Cryptoki</a>
                        </Link>
                        {","} March 4th, 2021
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  RECENT POSTS WIDGET */}
              {/*  SEARCH WIDGET */}
              <div className="widget-2 widget-search">
                <div className="widget-title h5">Search</div>
                <div className="widget-body">
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    method="get"
                    className="search"
                  >
                    <input
                      type="text"
                      className="search-input"
                      placeholder="Enter your search here..."
                    />
                    <button className="search-button">
                      <svg className="crumina-icon">
                        <use xlinkHref="#search-icon" />
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
              {/*  SEARCH WIDGET */}
              {/*  CATEGORIES WIDGET */}
              <div className="widget-2 categories-widget">
                <div className="widget-title h5">Categories</div>
                <div className="widget-body">
                  <div className="categories-widget-list">
                    <a href="#" className="categories-widget-item">
                      Guides
                    </a>{" "}
                    <a href="#" className="categories-widget-item">
                      News
                    </a>{" "}
                    <a href="#" className="categories-widget-item">
                      Currencies
                    </a>{" "}
                    <a href="#" className="categories-widget-item">
                      Creators
                    </a>{" "}
                    <a href="#" className="categories-widget-item">
                      Artworks
                    </a>{" "}
                    <a href="#" className="categories-widget-item">
                      Digital Freebies
                    </a>{" "}
                  </div>
                </div>
              </div>
              {/*  CATEGORIES WIDGET */}
              {/*  ARCHIVES WIDGET */}
              <div className="widget-2 archives-widget">
                <div className="widget-title h5">Archives</div>
                <div className="widget-body">
                  <ul className="archives-widget-list">
                    <li className="archive-item">
                      <a href="#">March 2021</a>
                      <span className="colored">(5)</span>
                    </li>
                    <li className="archive-item">
                      <a href="#">February 2021</a>
                      <span className="colored">(3)</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/*  ARCHIVES WIDGET */}
              {/*  COMMENTS WIDGET */}
              <div className="widget-2 latest-comments-widget">
                <div className="widget-title h5">Comments</div>
                <div className="widget-body">
                  <ul className="latest-comments-widget-list">
                    <li className="comment-item">
                      <Link href="06-profile-page">
                        <a className="colored comment-author">Jackie Jones</a>
                      </Link>{" "}
                      on{" "}
                      <a className="comment-link" href="19-blog-post-sidebar">
                        We explain with details everything you need to know
                        about crypto art and cryptocurrencies!
                      </a>
                    </li>
                    <li className="comment-item">
                      <Link href="06-profile-page">
                        <a className="colored comment-author">Dexter Stark</a>
                      </Link>{" "}
                      on{" "}
                      <a className="comment-link" href="19-blog-post-sidebar">
                        We explain with details everything you need to know
                        about crypto art and cryptocurrencies!
                      </a>
                    </li>
                    <li className="comment-item">
                      <Link href="06-profile-page">
                        <a className="colored comment-author">Crimson Ray</a>
                      </Link>{" "}
                      on{" "}
                      <a className="comment-link" href="19-blog-post-sidebar">
                        We explain with details everything you need to know
                        about crypto art and cryptocurrencies!
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/*  COMMENTS WIDGET */}
              {/*  CALENDAR WIDGET */}
              <div className="widget-2 calendar-widget">
                <div className="widget-title h5">Calendar</div>
                <div className="widget-body">
                  <table className="calendar-table">
                    <caption>August 2021</caption>
                    <thead>
                      <tr>
                        <th>sun</th>
                        <th>mon</th>
                        <th>tue</th>
                        <th>wed</th>
                        <th>thu</th>
                        <th>fri</th>
                        <th>sat</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <a href="#">1</a>
                        </td>
                        <td>
                          <a href="#">2</a>
                        </td>
                        <td>
                          <a href="#">3</a>
                        </td>
                        <td>
                          <a href="#">4</a>
                        </td>
                        <td>
                          <a href="#">5</a>
                        </td>
                        <td>
                          <a href="#">6</a>
                        </td>
                        <td>
                          <a href="#">7</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="#">8</a>
                        </td>
                        <td>
                          <a href="#">9</a>
                        </td>
                        <td>
                          <a href="#">10</a>
                        </td>
                        <td>
                          <a href="#">11</a>
                        </td>
                        <td>
                          <a href="#">12</a>
                        </td>
                        <td>
                          <a href="#">13</a>
                        </td>
                        <td>
                          <a href="#">14</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="#">15</a>
                        </td>
                        <td>
                          <a href="#">16</a>
                        </td>
                        <td>
                          <a href="#">17</a>
                        </td>
                        <td>
                          <a href="#">18</a>
                        </td>
                        <td>
                          <a href="#">19</a>
                        </td>
                        <td>
                          <a href="#">20</a>
                        </td>
                        <td>
                          <a href="#">21</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="#">22</a>
                        </td>
                        <td>
                          <a href="#">23</a>
                        </td>
                        <td>
                          <a href="#">24</a>
                        </td>
                        <td>
                          <a href="#">25</a>
                        </td>
                        <td>
                          <a href="#">26</a>
                        </td>
                        <td>
                          <a href="#">27</a>
                        </td>
                        <td>
                          <a href="#">28</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="#">29</a>
                        </td>
                        <td>
                          <a href="#">30</a>
                        </td>
                        <td>
                          <a href="#">31</a>
                        </td>
                        <td className="inactive">
                          <a href="#">1</a>
                        </td>
                        <td className="inactive">
                          <a href="#">2</a>
                        </td>
                        <td className="inactive">
                          <a href="#">3</a>
                        </td>
                        <td className="inactive">
                          <a href="#">4</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/*  CALENDAR WIDGET */}
            </div>
          </aside>
          {/*  ASIDE */}
        </div>
      </div>
    </Layouts>
  );
};
const mapStateToProps = (state) => ({
  blogs: state.blog.data,
});

export default connect(mapStateToProps, {})(BlogClassic);
