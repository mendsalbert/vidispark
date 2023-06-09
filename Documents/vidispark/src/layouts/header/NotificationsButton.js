import Link from "next/link";
import { Fragment, useState } from "react";
import useClickOutside from "../../useClickOutside";

const NotificationsButton = () => {
  const [toggle, setToggle] = useState(false);
  let domNode = useClickOutside(() => {
    setToggle(false);
  });
  return (
    <Fragment>
      <div className="notifications-button-cont" ref={domNode}>
        <button
          className={`cart-button cryptoki-notif-bttn ${
            toggle ? "active" : ""
          }`}
          data-target="notifications-dropdown"
          onClick={() => setToggle(!toggle)}
        >
          {/*notifications icon*/}
          <span className="counter">10</span>
          <svg className="crumina-icon">
            <use xlinkHref="#bell-icon" />
          </svg>
          {/*/notifications icon*/}
        </button>
        {/*notification dropdown*/}
        <div
          id="notifications-dropdown"
          className={`cryptoki-notif-target ${toggle ? "active" : ""}`}
        >
          <div className="title">
            Notifications <span className="colored">10</span>
          </div>
          <div className="notifications-wrapper cryptoki-scrollbar">
            {/*notification-item*/}
            <div className="notification">
              <div className="thumb-box">
                <img
                  src="img/content/notifications/notif-thumb-1.png"
                  width={50}
                  height={50}
                  alt=""
                  loading="lazy"
                />
                <span className="bid-type">
                  <svg className="crumina-icon">
                    <use xlinkHref="#annotation-icon" />
                  </svg>
                </span>
              </div>
              <div className="notification-info">
                <div className="message">
                  {" "}
                  <Link href="/08-profile-page">
                    <a className="bold">@JackieJ</a>
                  </Link>{" "}
                  just commented on{" "}
                  <Link href="/05-product-page">
                    <a className="bold">
                      Cryptoki NFT and Digital Market PSD Template
                    </a>
                  </Link>{" "}
                </div>
                <div className="publish-date">2 minutes ago</div>
              </div>
            </div>
            {/*/notification-item*/}
            {/*notification-item*/}
            <div className="notification">
              <div className="thumb-box">
                <img
                  src="img/content/notifications/notif-thumb-1.png"
                  height={50}
                  width={50}
                  alt=""
                  loading="lazy"
                />
                <span className="purchase-type">
                  <svg className="crumina-icon">
                    <use xlinkHref="#wallet-icon" />
                  </svg>
                </span>
              </div>
              <div className="notification-info">
                <div className="message">
                  {" "}
                  <Link href="/08-profile-page">
                    <a className="bold">@CrimsonRay</a>
                  </Link>{" "}
                  just purchased{" "}
                  <Link href="/06-product-page-v2">
                    <a href="06-product-page-v2" className="bold">
                      Cryptoki NFT and Digital Market PSD Template
                    </a>
                  </Link>{" "}
                </div>
                <div className="publish-date">10 minutes ago</div>
              </div>
            </div>
            {/*/notification-item*/}
            {/*notification-item*/}
            <div className="notification">
              <div className="thumb-box">
                <img
                  src="img/content/notifications/notif-thumb-2.png"
                  width={50}
                  height={50}
                  alt=""
                  loading="lazy"
                />
                <span className="like-type">
                  <svg className="crumina-icon">
                    <use xlinkHref="#heart-icon" />
                  </svg>
                </span>
              </div>
              <div className="notification-info">
                <div className="message">
                  {" "}
                  <Link href="/08-profile-page">
                    <a className="bold">@NoirArtks</a>
                  </Link>{" "}
                  just liked{" "}
                  <Link href="/07-product-page-v3">
                    <a className="bold">Twitter Gaming Headers Pack 04</a>
                  </Link>{" "}
                </div>
                <div className="publish-date">37 minutes ago</div>
              </div>
            </div>
            {/*/notification-item*/}
            {/*notification-item*/}
            <div className="notification">
              <div className="thumb-box">
                <img
                  src="img/content/notifications/notif-thumb-1.png"
                  height={50}
                  width={50}
                  alt=""
                  loading="lazy"
                />
                <span className="review-type">
                  <svg className="crumina-icon">
                    <use xlinkHref="#star-icon" />
                  </svg>
                </span>
              </div>
              <div className="notification-info">
                <div className="message">
                  {" "}
                  <Link href="/08-profile-page">
                    <a className="bold">@CrimsonRay</a>
                  </Link>{" "}
                  just reviewed{" "}
                  <Link href="/05-product-page">
                    <a className="bold">
                      Cryptoki NFT and Digital Market PSD Template
                    </a>
                  </Link>{" "}
                </div>
                <div className="publish-date">49 minutes ago</div>
              </div>
            </div>
            {/*/notification-item*/}
          </div>{" "}
          <Link href="/25-notifications">
            <a className="btn-small-fullwidth btn-dark btn-square">
              View all Notifications
            </a>
          </Link>{" "}
        </div>
      </div>
    </Fragment>
  );
};
export default NotificationsButton;
