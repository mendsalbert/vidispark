import React, { useEffect } from "react";
import ProductInfo from "../src/components/Product/ProductV1/ProductInfo";
import ProductRelatedItems from "../src/components/Product/ProductV1/ProductRelatedItems";
import ProductTabs from "../src/components/Product/ProductV1/ProductTabs";
import Layouts from "../src/layouts/Layouts";
import { countdown } from "../src/utils";

const Product05 = () => {
  useEffect(() => {
    countdown();
  }, []);

  return (
    <Layouts>
      <div className="product-page product-version-1">
        <div className="product-media">
          <a
            className="expand-icon"
            data-fslightbox=""
            href="img/content/product-img/product-2.jpg"
          >
            <svg className="crumina-icon">
              <use xlinkHref="#maximize-icon" />
            </svg>
          </a>
          <div className="product-img">
            <img src="img/content/product-img/product-2.jpg" alt="" />
          </div>
        </div>
        <div className="product-info">
          <div className="product-info-wrapper">
            {/* / Products Info */}
            <ProductInfo />
            {/* / Products Tabs */}
            <ProductTabs />
            {/*  RELATED ITEMS */}
            <ProductRelatedItems />
            {/*  RELATED ITEMS */}
          </div>
        </div>
      </div>
    </Layouts>
  );
};
export default Product05;
