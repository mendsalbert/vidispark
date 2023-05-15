import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Nft from "../src/components/Nft";
import Paggination from "../src/components/Paggination";
import { getProductByFilter } from "../src/filter";
import Layouts from "../src/layouts/Layouts";
import { getData } from "../src/redux/action/data";

import {
  catagoryfilter,
  creatorFilter,
  endingFilter,
  orderFilter,
  priceFilter,
  typeFilter,
} from "../src/redux/action/filter";
import { dblock } from "../src/utils";
import { useVideo } from "../src/services/videos";

const Explorev2 = ({
  catagoryfilter,
  data,
  filter,
  getData,
  orderFilter,
  typeFilter,
  creatorFilter,
  endingFilter,
  priceFilter,
  keyValueForQurey,
  value,
}) => {
  const [filteredData, setFilteredData] = useState([]);
  const [price, setPrice] = useState({ min: 0, max: 100 });
  const changePrice = (e) => {
    setPrice({ ...price, [e.target.name]: Number(e.target.value) });
  };
  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  useEffect(() => {
    priceFilter(price);
  }, [price]);

  const onSubmit = (e) => {
    e.preventDefault();
    setFilteredData(data && getProductByFilter(data, filter));
  };

  const [active, setActive] = useState(0);
  let sort = 6;

  const { videoResults } = useVideo();

  return (
    <Layouts>
      <div className="primary-content-area container grid-aside-main-4-col content-padding">
        <aside>
          <div className="aside-wrapper">
            <div className="widget widget-filter-panel">
              <div className="widget-title h6">Filters</div>
              <form
                className="cryptoki-form"
                id="filter-form"
                onSubmit={(e) => onSubmit(e)}
              >
                <div className="form-group">
                  <div className="small-title">Categories</div>
                  <div className="is-two-col-element">
                    <div className="form-list-wrapper">
                      <div className="form-list-elem">
                        <input
                          type="checkbox"
                          name="entertainment"
                          id="entertainment"
                          className="cryptoki-checkbox"
                          onClick={(e) => catagoryfilter("entertainment")}
                        />
                        <label htmlFor="entertainment">🎭 Entertainment</label>
                      </div>
                      <div className="form-list-elem">
                        <input
                          type="checkbox"
                          name="music"
                          id="music"
                          className="cryptoki-checkbox"
                          onClick={(e) => catagoryfilter("music")}
                        />
                        <label htmlFor="music"> 🎵 Music</label>
                      </div>
                      <div className="form-list-elem">
                        <input
                          type="checkbox"
                          name="sports"
                          id="sports"
                          className="cryptoki-checkbox"
                          onClick={(e) => catagoryfilter("sports")}
                        />
                        <label htmlFor="sports">⚽ Sports</label>
                      </div>
                      <div className="form-list-elem">
                        <input
                          type="checkbox"
                          name="gaming"
                          id="gaming"
                          className="cryptoki-checkbox"
                          onClick={(e) => catagoryfilter("gaming")}
                        />
                        <label htmlFor="gaming">🎮 Gaming</label>
                      </div>
                      <div className="form-list-elem">
                        <input
                          type="checkbox"
                          name="photography"
                          id="photography"
                          className="cryptoki-checkbox"
                          onClick={(e) => catagoryfilter("photography")}
                        />
                        <label htmlFor="photography">Photography</label>
                      </div>
                    </div>
                    <div className="form-list-wrapper">
                      <div className="form-list-elem">
                        <input
                          type="checkbox"
                          name="motion-graphics"
                          id="motion-graphics"
                          className="cryptoki-checkbox"
                          onClick={(e) => catagoryfilter("motion-graphics")}
                        />
                        <label htmlFor="motion-graphics">Motion Graphics</label>
                      </div>
                      <div className="form-list-elem">
                        <input
                          type="checkbox"
                          name="pop-culture"
                          id="pop-culture"
                          className="cryptoki-checkbox"
                          onClick={(e) => catagoryfilter("pop-culture")}
                        />
                        <label htmlFor="pop-culture">Pop Culture</label>
                      </div>
                      <div className="form-list-elem">
                        <input
                          type="checkbox"
                          name="memes"
                          id="memes"
                          className="cryptoki-checkbox"
                          onClick={(e) => catagoryfilter("memes")}
                        />
                        <label htmlFor="memes">Memes</label>
                      </div>
                      <div className="form-list-elem">
                        <input
                          type="checkbox"
                          name="nsfw"
                          id="nsfw"
                          className="cryptoki-checkbox"
                          onClick={(e) => catagoryfilter("nsfw")}
                        />
                        <label htmlFor="nsfw">NSFW</label>
                      </div>
                      <div className="form-list-elem">
                        <input
                          type="checkbox"
                          name="looping-artwork"
                          id="looping-artwork"
                          className="cryptoki-checkbox"
                          onClick={(e) => catagoryfilter("looping-artwork")}
                        />
                        <label htmlFor="looping-artwork">Looping Artwork</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="small-title">Order By</div>
                  <div className="form-list-elem">
                    <input
                      type="radio"
                      name="order"
                      onClick={() => orderFilter("newest")}
                      id="newest"
                      className="cryptoki-radio"
                    />
                    <label htmlFor="newest">Newest</label>
                  </div>
                  <div className="form-list-elem">
                    <input
                      type="radio"
                      name="order"
                      onClick={() => orderFilter("oldest")}
                      id="oldest"
                      className="cryptoki-radio"
                    />
                    <label htmlFor="oldest">Oldest</label>
                  </div>
                  <div className="form-list-elem">
                    <input
                      type="radio"
                      name="order"
                      id="trending"
                      className="cryptoki-radio"
                      onClick={() => orderFilter("trending")}
                    />
                    <label htmlFor="trending">Trending</label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="small-title">Type</div>
                  <div className="form-list-elem">
                    <input
                      type="radio"
                      name="type"
                      id="all-artwork"
                      className="cryptoki-radio"
                      onClick={() => typeFilter("")}
                    />
                    <label htmlFor="all-artwork">All Artwork</label>
                  </div>
                  <div className="form-list-elem">
                    <input
                      type="radio"
                      name="type"
                      id="auctions-only"
                      className="cryptoki-radio"
                      onClick={() => typeFilter("auctions-only")}
                    />
                    <label htmlFor="auctions-only">Auctions Only</label>
                  </div>
                  <div className="form-list-elem">
                    <input
                      type="radio"
                      name="type"
                      id="buy-now"
                      className="cryptoki-radio"
                      onClick={() => typeFilter("buy-now")}
                    />
                    <label htmlFor="buy-now">Buy Now</label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="small-title">Creators</div>
                  <div className="form-list-elem">
                    <input
                      type="radio"
                      name="creator-type"
                      id="all-creators"
                      className="cryptoki-radio"
                      onClick={() => creatorFilter("")}
                    />
                    <label htmlFor="all-creators">All Creators</label>
                  </div>
                  <div className="form-list-elem">
                    <input
                      type="radio"
                      name="creator-type"
                      id="verified-only"
                      className="cryptoki-radio"
                      onClick={() => creatorFilter(true)}
                    />
                    <label htmlFor="verified-only">Verified Only</label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="small-title">Ending</div>
                  <div className="form-list-elem">
                    <input
                      type="radio"
                      name="ending"
                      id="anytime"
                      className="cryptoki-radio"
                      onClick={() => endingFilter("")}
                    />
                    <label htmlFor="anytime">Anytime</label>
                  </div>
                  <div className="form-list-elem">
                    <input
                      type="radio"
                      name="ending"
                      id="soon"
                      className="cryptoki-radio"
                      onClick={() => endingFilter(true)}
                    />
                    <label htmlFor="soon">Soon</label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="price-range">
                    <input
                      type="number"
                      name="min"
                      onChange={(e) => changePrice(e)}
                      placeholder="From"
                    />
                    <input
                      type="number"
                      name="max"
                      onChange={(e) => changePrice(e)}
                      placeholder="To"
                    />
                  </div>
                </div>
                <input type="submit" defaultValue="Apply Filters" />
              </form>
            </div>
          </div>
        </aside>
        <div className="main-content-area">
          <div className="page-title">
            <h2>
              <span className="gradient-text">Explore</span> Artworks
            </h2>
          </div>
          {/* FEATURED ITEMS */}
          <div className="featured-box grid-4-columns">
            {videoResults && videoResults?.length > 0 ? (
              videoResults?.map((data, i) => (
                <div key={data.id} className={`${dblock(active, i, sort)}`}>
                  <Nft data={data} />
                </div>
              ))
            ) : (
              <h2 className="text-center">
                No<span className="gradient-text"> Nft </span> Found
              </h2>
            )}
          </div>
          {/* FEATURED ITEMS */}
          {/* PAGINATION */}
          <Paggination
            active={active}
            setActive={setActive}
            sort={sort}
            length={videoResults && videoResults.length}
          />
          {/* PAGINATION */}
        </div>
      </div>
    </Layouts>
  );
};
const mapStateToProps = (state) => ({
  data: state.data.nfts,
  filter: state.filter,
});
export default connect(mapStateToProps, {
  catagoryfilter,
  getData,
  orderFilter,
  typeFilter,
  creatorFilter,
  endingFilter,
  priceFilter,
})(Explorev2);
