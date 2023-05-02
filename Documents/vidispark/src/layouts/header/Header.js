import Link from "next/link";
import React, { useState } from "react";
import CartButton from "./CartButton";
import MobileHeader from "./MobileHeader";
import MobileSearchTrigger from "./MobileSearchTrigger";
import NotificationsButton from "./NotificationsButton";
import ProfileDropdown from "./ProfileDropdown";
import SearchBox from "./SearchBox";
const Header = () => {
  const [searchToggle, setSearchToggle] = useState(false);

  return (
    <header className="site-header">
      <div className="topbar padding-top-bottom border-bottom">
        <div className="topbar-wrapper container">
          {/*MOBILE NAVIGATION*/}
          <MobileHeader />
          {/*/MOBILE NAVIGATION BUTTON*/}
          {/*LOGO*/}
          <div className="logo ">
            <Link href="/">
              <a className="logo-link">
                {/* <div className="logo-img">
                  <img src="svg/cryptoki-logo.svg" alt="logo" />
                </div> */}
                <div className="logo-text">Vidispark</div>
              </a>
            </Link>
          </div>
          {/*/LOGO*/}
          {/*TOP SERCH BOX*/}
          <SearchBox />
          {/*/TOP SERCH BOX*/}
          {/*OPEN SEARCH ON  MOBILE*/}
          <button
            id="mobile-search"
            onClick={() => setSearchToggle(!searchToggle)}
            className={searchToggle ? "clicked" : "s____"}
          >
            <svg className="crumina-icon open-button">
              <use
                id="search"
                xlinkHref={searchToggle ? "#cross-icon" : "#search-icon"}
              />
            </svg>
          </button>
          {/*/OPEN SEARCH ON  MOBILE*/}
          {/*HEADER BUTTON*/}
          <div className="collection-box">
            <a
              className="btn btn-normal btn-dark create-collection"
              href="26-upload-artwork"
            >
              Create
            </a>
          </div>
          {/*/HEADER BUTTON*/}
          {/*HEADER ICONS*/}
          <div className="user-activity-buttons">
            <div className="favourites-button-cont">
              <button
                className="favourites-button cryptoki-notif-bttn"
                data-target=""
              >
                <svg className="crumina-icon">
                  <use xlinkHref="#heart-icon" />
                </svg>
              </button>
            </div>
            <NotificationsButton />
            {/*/notification dropdown*/}
            {/*/NOTIFICATION BUTTON*/}
          </div>
          {/*/HEADER ICONS*/}
          <ProfileDropdown />
        </div>
      </div>
      {/*MOBILE SEARCH FORM*/}
      <MobileSearchTrigger
        active={searchToggle}
        close={() => setSearchToggle(false)}
      />
      {/*/MOBILE SEARCH FORM*/}
    </header>
  );
};
export default Header;
