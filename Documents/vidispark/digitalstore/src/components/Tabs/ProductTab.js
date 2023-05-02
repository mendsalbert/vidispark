import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
const ProductTab = () => {
  return (
    <Tab.Container defaultActiveKey={"tab1"}>
      <Nav as={"ul"} className="tabs-list swiper-wrapper">
        <Nav.Link eventKey={"tab1"} as={"li"} className="swiper-slide">
          <a className="c-pointer">Description</a>
        </Nav.Link>
        <Nav.Link eventKey={"tab2"} as={"li"} className="swiper-slide">
          <a className="c-pointer">
            Comments <span className="count">2</span>
          </a>
        </Nav.Link>
        <Nav.Link eventKey={"tab3"} as={"li"} className="swiper-slide">
          <a className="c-pointer">
            Reviews <span className="count">1</span>
          </a>
        </Nav.Link>
      </Nav>
      <Tab.Content className="tabs-content-wrapper">
        <Tab.Pane eventKey="tab1" className="tab">
          <div className="product-description">
            <div className="title h6">
              Revive your Twitter with Awesome Graphics!
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <ul className="list-line-height">
              <li>
                <svg className="crumina-icon bullet-icon">
                  <use xlinkHref="#circle-icon" />
                </svg>
                1500x500 pixels
              </li>
              <li>
                <svg className="crumina-icon bullet-icon">
                  <use xlinkHref="#circle-icon" />
                </svg>
                All free fonts used
              </li>
              <li>
                <svg className="crumina-icon bullet-icon">
                  <use xlinkHref="#circle-icon" />
                </svg>
                PS vectors for easier customization
              </li>
            </ul>
            <p>
              Remember to follow our <a href="#">profile</a> to know when new
              items are released!
            </p>
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey="tab2" className="tab">
          <ul className="comments-list">
            <li className="comment-item has-children">
              <div className="comment-item-wrapper">
                <div className="avatar-block">
                  <div className="avatar box-42">
                    <Link href="06-profile-page">
                      <a>
                        <img src="img/avatar.png" alt="avatar" />
                        <span className="verified">
                          <svg className="crumina-icon">
                            <use xlinkHref="#check-icon" />
                          </svg>
                        </span>
                      </a>
                    </Link>
                  </div>
                  <div className="avatar-meta">
                    <div className="avatar-title">
                      <Link href="06-profile-page">
                        <a>Dexter Stark</a>
                      </Link>
                    </div>
                    <div className="avatar-meta">@dexterstark</div>
                  </div>
                </div>
                <div className="comment-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco...
                </div>
                <div className="comment-meta">
                  <div className="publish-date">2 hours ago</div>
                  <div className="reply">
                    <a href="#">Reply</a>
                  </div>
                </div>
              </div>
              <ul className="children">
                <li className="comment-item">
                  <div className="comment-item-wrapper">
                    <div className="avatar-block">
                      <div className="avatar box-42">
                        <Link href="06-profile-page">
                          <a>
                            <img src="img/avatar-2.png" alt="avatar" />
                            <span className="verified">
                              <svg className="crumina-icon">
                                <use xlinkHref="#check-icon" />
                              </svg>
                            </span>
                          </a>
                        </Link>
                      </div>
                      <div className="avatar-meta">
                        <div className="avatar-title">
                          <Link href="06-profile-page">
                            <a>Jackie Jones</a>
                          </Link>
                        </div>
                        <div className="avatar-meta">@JackieJ</div>
                      </div>
                    </div>
                    <div className="comment-body">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque.
                    </div>
                    <div className="comment-meta">
                      <div className="publish-date">46 minutes ago</div>
                      <div className="reply">
                        <a href="#">Reply</a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </Tab.Pane>
        <Tab.Pane eventKey="tab3" className="tab">
          <ul className="reviews-list">
            <li className="review-item">
              <div className="review-header">
                <div className="review-title">
                  This is an incredible template!!!!!!!
                </div>
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
                  <span className="">
                    <svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="review-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco...
              </div>
              <div className="review-footer">
                <div className="review-author">
                  <span className="avatar box-26">
                    <Link href="06-profile-page">
                      <a>
                        <img src="img/avatar-2.png" alt="" />
                      </a>
                    </Link>
                    <span className="verified">
                      <svg className="crumina-icon">
                        <use xlinkHref="#check-icon" />
                      </svg>
                    </span>
                  </span>
                  @JackieJ
                </div>
                <div className="publish-date">2 hours ago</div>
              </div>
            </li>
          </ul>
          <div className="leave-review">
            <h5 className="content-heading">Leave a review</h5>
            <form
              className="cryptoki-form"
              onSubmit={(e) => e.preventDefault()}
              id="comment-form"
            >
              <div className="rating-field">
                <label htmlFor="name">Your rating</label>
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
                  <span className="">
                    <svg className="crumina-icon">
                      <use xlinkHref="#star2-icon" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="name">Review Title</label>
                <input className="" type="text" id="title" name="title" />
              </div>
              <div className="form-field comment-area">
                <label htmlFor="message">Your comment</label>
                <textarea
                  name="message"
                  id="message"
                  className="comment-form"
                  cols={30}
                  rows={10}
                  defaultValue={""}
                />
              </div>
              <div className="form-group">
                <div className="form-field">
                  <label htmlFor="name">Your name</label>
                  <input className="" type="text" id="name" name="name" />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email address</label>
                  <input className="" type="email" id="email" name="email" />
                </div>
              </div>
              <button type="submit" className="btn btn-normal btn-dark">
                Post review
              </button>
            </form>
          </div>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
};
export default ProductTab;
