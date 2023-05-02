import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { itemscategoriescarousel } from "../sliderProps";
const BrowseCategories = () => {
  return (
    <div className="container section-padding">
      <div className="section-title-wrapper">
        <div className="section-title">
          Browse <span className="gradient-text">Categories</span>
        </div>
        <div className="title-navigation">
          <div className="items-categories-icon swiper-button-prev">
            <svg className="crumina-icon">
              <use xlinkHref="#arrow-left2-icon" />
            </svg>
          </div>
          <div className="items-categories-icon swiper-button-next">
            <svg className="crumina-icon">
              <use xlinkHref="#arrow-right2-icon" />
            </svg>
          </div>
        </div>
      </div>
      <Swiper
        {...itemscategoriescarousel}
        className="items-categories-carousel overflow-hidden"
      >
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <Link href="03-shop-category">
              <a>
                <div className="category-card turquoise-gradient-diagonal">
                  <div
                    className="category-wrapper"
                    style={{
                      backgroundImage:
                        "url(img/content/categories/screens-1.png)",
                    }}
                  >
                    <div className="category-content">
                      <div className="category-title">UI Templates</div>
                      <div className="category-meta">537 Items</div>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Link href="03-shop-category">
              <a>
                <div className="category-card purple-gradient-diagonal">
                  <div
                    className="category-wrapper"
                    style={{
                      backgroundImage:
                        "url(img/content/categories/screens-2.png)",
                    }}
                  >
                    <div className="category-content">
                      <div className="category-title">
                        Coded
                        <br />
                        Templates
                      </div>
                      <div className="category-meta">109 Items</div>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Link href="03-shop-category">
              <a>
                <div className="category-card orange-gradient-diagonal">
                  <div
                    className="category-wrapper"
                    style={{
                      backgroundImage:
                        "url(img/content/categories/screens-2.png)",
                    }}
                  >
                    <div className="category-content">
                      <div className="category-title">
                        Social
                        <br />
                        Graphics
                      </div>
                      <div className="category-meta">1066 Items</div>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};
export default BrowseCategories;
