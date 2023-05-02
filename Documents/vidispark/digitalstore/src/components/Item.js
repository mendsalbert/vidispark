import Link from "next/link";
import { dblock } from "../utils";

const Item = ({ item, active, i, sort, currency }) => {
  return (
    <div className={`featured-item v5 ${dblock(active, i, sort)}`}>
      <div className="featured-item-wrapper">
        <div className="featured-item-content">
          <div className="fav-counter">
            <svg className="crumina-icon">
              <use xlinkHref="#heart-icon" />
            </svg>
            <span className="count">{item.numberOfreact}</span>
          </div>
          <div className="featured-item-image">
            <Link href="05-product">
              <a>
                <img src={item.img} alt="" />
              </a>
            </Link>
          </div>
          <div className="featured-item-info">
            <div className={`item-category ${item.categories[0]}`}>
              {item.categories[0].split("-").join(" ")}
            </div>
            <div className="title">
              <Link href="05-product">
                <a>{item.name}</a>
              </Link>
            </div>
            <div className="item-meta">
              <span className="avatar box-26">
                <Link href="06-profile-page">
                  <a>
                    <img src={item.author && item.author.img} alt="" />
                  </a>
                </Link>
                <span className="verified">
                  <svg className="crumina-icon">
                    <use xlinkHref="#check-icon" />
                  </svg>
                </span>
              </span>
              @{item.author && item.author.username}
            </div>
          </div>
        </div>
        <div className="featured-item-post-content">
          <div className="item-rating">
            <span className={item.reviews >= 1 ? "filled" : "notfilled"}>
              <svg className="crumina-icon">
                <use xlinkHref="#star2-icon" />
              </svg>
            </span>
            <span className={item.reviews >= 2 ? "filled" : "notfilled"}>
              <svg className="crumina-icon">
                <use xlinkHref="#star2-icon" />
              </svg>
            </span>
            <span className={item.reviews >= 3 ? "filled" : "notfilled"}>
              <svg className="crumina-icon">
                <use xlinkHref="#star2-icon" />
              </svg>
            </span>
            <span className={item.reviews >= 4 ? "filled" : "notfilled"}>
              <svg className="crumina-icon">
                <use xlinkHref="#star2-icon" />
              </svg>
            </span>
            <span className={item.reviews >= 5 ? "filled" : "notfilled"}>
              <svg className="crumina-icon">
                <use xlinkHref="#star2-icon" />
              </svg>
            </span>
          </div>
          <div className="item-price">
            {currency ? currency : "$"}
            {item.price.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Item;
