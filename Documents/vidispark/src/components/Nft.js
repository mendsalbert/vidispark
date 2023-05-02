import Link from "next/link";
import CountDown from "./CountDown";
// import { IconEye } from "@tabler/icons";

const Nft = ({ data }) => {
  return (
    <div className="featured-item">
      <div className="featured-item-wrapper">
        <div className="featured-item-content">
          <div className="fav-counter">
            <svg className="crumina-icon">
              <use xlinkHref="#heart-icon" />
            </svg>{" "}
            <span className="count">{data.react}</span>
          </div>
          <div className="featured-item-image">
            {" "}
            <Link href="/05-product-page">
              <a>
                <picture>
                  <source type="image/avif" srcSet={data.image} />
                  <img
                    src={data.image}
                    width={304}
                    height={340}
                    alt="Featured"
                  />
                </picture>
              </a>
            </Link>{" "}
          </div>
          <div className="featured-item-info">
            {/* {data.time && <CountDown endDateTime={data.time} />} */}
            <div className="title">
              {" "}
              <Link href="/05-product-page">
                <a>{data.name}</a>
              </Link>{" "}
            </div>
            <div className="tw-flex tw-flex-row tw-items-center tw-justify-between tw-w-full">
              <span className="tw-flex tw-flex-row tw-items-center tw-space-x-2">
                <span className="avatar box-26">
                  {" "}
                  <Link href="/08-profile-page">
                    <a>
                      <picture>
                        <source type="image/avif" srcSet={data.author.image} />
                        <img
                          src={data.author.image}
                          alt="avatar"
                          loading="lazy"
                          width={100}
                          height={100}
                        />
                      </picture>
                    </a>
                  </Link>{" "}
                  <span className="verified">
                    <svg className="crumina-icon">
                      <use xlinkHref="#check-icon" />
                    </svg>{" "}
                  </span>
                </span>
                <span>@{data.author.name}</span>
              </span>
              <span>239K</span>
              {/* <IconEye /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Nft;
