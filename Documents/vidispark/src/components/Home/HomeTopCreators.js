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
              <Link href="/08-profile-page">
                <a>
                  <picture>
                    <source type="image/avif" srcSet="avif/avatar.avif" />
                    <img
                      src="img/avatar.png"
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
                <Link href="/08-profile-page">
                  <a>Dexter Stark</a>
                </Link>{" "}
              </div>
              <div className="creator-meta">@DexterStark</div>
            </div>
          </div>
          <div className="projects-score">
            <div className="number title">135</div>
            <div className="label">Created</div>
          </div>
          <div className="projects-previews">
            <div className="preview-box box-68">
              {" "}
              <Link href="/05-product-page">
                <a>
                  <picture>
                    <source
                      type="image/avif"
                      srcSet="avif/content/previews/project-thumb-1.avif"
                    />
                    <img
                      src="img/content/previews/project-thumb-1.png"
                      height={68}
                      width={68}
                      alt=""
                      loading="lazy"
                    />
                  </picture>
                </a>
              </Link>{" "}
            </div>
            <div className="preview-box box-68">
              {" "}
              <Link href="/06-product-page-v2">
                <a>
                  <picture>
                    <source
                      type="image/avif"
                      srcSet="avif/content/previews/project-thumb-2.avif"
                    />
                    <img
                      src="img/content/previews/project-thumb-2.png"
                      height={66}
                      width={66}
                      alt=""
                      loading="lazy"
                    />
                  </picture>
                </a>
              </Link>{" "}
            </div>
            <div className="preview-box box-68">
              {" "}
              <Link href="/07-product-page-v3">
                <a>
                  <picture>
                    <source
                      type="image/avif"
                      srcSet="avif/content/previews/project-thumb-3.avif"
                    />
                    <img
                      src="img/content/previews/project-thumb-3.png"
                      height={68}
                      width={68}
                      alt=""
                      loading="lazy"
                    />
                  </picture>
                </a>
              </Link>{" "}
            </div>
          </div>
        </div>
        <div className="top-creator-item">
          <div className="creator-number">02</div>
          <div className="creator-box">
            <div className="avatar box-64">
              {" "}
              <Link href="/08-profile-page">
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
                <Link href="/08-profile-page">
                  <a>Jackie Jones</a>
                </Link>{" "}
              </div>
              <div className="creator-meta">@JackieJ</div>
            </div>
          </div>
          <div className="projects-score">
            <div className="number title">107</div>
            <div className="label">Created</div>
          </div>
          <div className="projects-previews">
            <div className="preview-box box-68">
              {" "}
              <Link href="/05-product-page">
                <a>
                  <picture>
                    <source
                      type="image/avif"
                      srcSet="avif/content/previews/project-thumb-5.avif"
                    />
                    <img
                      src="img/content/previews/project-thumb-5.png"
                      height={68}
                      width={68}
                      alt=""
                      loading="lazy"
                    />
                  </picture>
                </a>
              </Link>{" "}
            </div>
            <div className="preview-box box-68">
              {" "}
              <Link href="/06-product-page-v2">
                <a>
                  <picture>
                    <source
                      type="image/avif"
                      srcSet="avif/content/previews/project-thumb-9.avif"
                    />
                    <img
                      src="img/content/previews/project-thumb-9.png"
                      height={74}
                      width={74}
                      alt=""
                      loading="lazy"
                    />
                  </picture>
                </a>
              </Link>{" "}
            </div>
            <div className="preview-box box-68">
              {" "}
              <Link href="/07-product-page-v3">
                <a>
                  <picture>
                    <source
                      type="image/avif"
                      srcSet="avif/content/previews/project-thumb-10.avif"
                    />
                    <img
                      src="img/content/previews/project-thumb-10.png"
                      height={68}
                      width={68}
                      alt=""
                      loading="lazy"
                    />
                  </picture>
                </a>
              </Link>{" "}
            </div>
          </div>
        </div>
        <div className="top-creator-item">
          <div className="creator-number">03</div>
          <div className="creator-box">
            <div className="avatar box-64">
              {" "}
              <Link href="/08-profile-page">
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
                <Link href="/08-profile-page">
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
          <div className="projects-previews">
            <div className="preview-box box-68">
              {" "}
              <Link href="/05-product-page">
                <a>
                  <picture>
                    <source
                      type="image/avif"
                      srcSet="avif/content/previews/project-thumb-4.avif"
                    />
                    <img
                      src="img/content/previews/project-thumb-4.png"
                      height={68}
                      width={68}
                      alt=""
                      loading="lazy"
                    />
                  </picture>
                </a>
              </Link>{" "}
            </div>
            <div className="preview-box box-68">
              {" "}
              <Link href="/06-product-page-v2">
                <a>
                  <picture>
                    <source
                      type="image/avif"
                      srcSet="avif/content/previews/project-thumb-11.avif"
                    />
                    <img
                      src="img/content/previews/project-thumb-11.png"
                      height={68}
                      width={68}
                      alt=""
                      loading="lazy"
                    />
                  </picture>
                </a>
              </Link>{" "}
            </div>
            <div className="preview-box box-68">
              {" "}
              <Link href="/07-product-page-v3">
                <a>
                  <picture>
                    <source
                      type="image/avif"
                      srcSet="avif/content/previews/project-thumb-12.avif"
                    />
                    <img
                      src="img/content/previews/project-thumb-12.png"
                      height={68}
                      width={68}
                      alt=""
                      loading="lazy"
                    />
                  </picture>
                </a>
              </Link>{" "}
            </div>
          </div>
        </div>
        <div className="top-creator-item">
          <div className="creator-number">04</div>
          <div className="creator-box">
            <div className="avatar box-64">
              {" "}
              <Link href="/08-profile-page">
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
                <Link href="/08-profile-page">
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
          <div className="projects-previews">
            <div className="preview-box box-68">
              {" "}
              <Link href="/05-product-page">
                <a>
                  <img
                    src="img/content/previews/project-thumb-13.png"
                    height={68}
                    width={68}
                    alt=""
                    loading="lazy"
                  />
                </a>
              </Link>{" "}
            </div>
            <div className="preview-box box-68">
              {" "}
              <Link href="/06-product-page-v2">
                <a>
                  <img
                    src="img/content/previews/project-thumb-14.png"
                    height={68}
                    width={68}
                    alt=""
                    loading="lazy"
                  />
                </a>
              </Link>{" "}
            </div>
            <div className="preview-box box-68">
              {" "}
              <Link href="/07-product-page-v3">
                <a>
                  <img
                    src="img/content/previews/project-thumb-8.png"
                    height={74}
                    width={74}
                    alt=""
                    loading="lazy"
                  />
                </a>
              </Link>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTopCreators;
