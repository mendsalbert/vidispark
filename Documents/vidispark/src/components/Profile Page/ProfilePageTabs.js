import { useRouter } from "next/router";
import { useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import ProfilePageTabsAbout from "./Profile Page Tabs List/ProfilePageTabsAbout";
import ProfilePageTabsActivity from "./Profile Page Tabs List/ProfilePageTabsActivity";
import ProfilePageTabsCollected from "./Profile Page Tabs List/ProfilePageTabsCollected";
import ProfilePageTabsCreated from "./Profile Page Tabs List/ProfilePageTabsCreated";
import ProfilePageTabsFollow from "./Profile Page Tabs List/ProfilePageTabsFollow";
import ProfilePageTabsFollowing from "./Profile Page Tabs List/ProfilePageTabsFollowing";
import ProfilePageTabsLiked from "./Profile Page Tabs List/ProfilePageTabsLiked";
import ProfilePageTabsOnSale from "./Profile Page Tabs List/ProfilePageTabsOnSale";

const ProfilePageTabs = () => {
  const router = useRouter();
  let currentPath = router.pathname;
  currentPath = currentPath.includes("/09-profile-page-about")
    ? "tab7"
    : "tab1";
  const [activeToggle, setActiveToggle] = useState(currentPath);

  return (
    <div className="profile-page-container container">
      {/*  TABS BLOCK */}
      <div className="tabs-block swiper-container">
        <div className="swiper-nav">
          <div className="swiper-button-next">
            <svg className="crumina-icon next-button">
              <use xlinkHref="#arrow-right2-icon" />
            </svg>
          </div>
          <div className="swiper-button-prev">
            <svg className="crumina-icon prev-button">
              <use xlinkHref="#arrow-left2-icon" />
            </svg>
          </div>
        </div>
        <Tab.Container defaultActiveKey={activeToggle}>
          {/* TABS BUTTONS AND TABS SWIPER */}
          <Nav className="tabs-list swiper-wrapper">
            <Nav.Link as={"li"} eventKey={"tab1"} className="swiper-slide">
              <a href="#tab1">
                Created <span className="count">135</span>
              </a>
            </Nav.Link>
            <Nav.Link as={"li"} eventKey={"tab8"} className="swiper-slide">
              <a href="#tab2">
                Collected <span className="count">48</span>
              </a>
            </Nav.Link>
            <Nav.Link as={"li"} eventKey={"tab2"} className="swiper-slide">
              <a href="#tab3">
                On Sale <span className="count">12</span>
              </a>
            </Nav.Link>
            <Nav.Link as={"li"} eventKey={"tab3"} className="swiper-slide">
              <a href="#tab4">
                Liked <span className="count">7.2K</span>
              </a>
            </Nav.Link>
            <Nav.Link as={"li"} eventKey={"tab4"} className="swiper-slide">
              <a href="#tab5">
                Following <span className="count">56</span>
              </a>
            </Nav.Link>
            <Nav.Link as={"li"} eventKey={"tab5"} className="swiper-slide">
              <a href="#tab6">
                Followers <span className="count">903</span>
              </a>
            </Nav.Link>
            <Nav.Link as={"li"} eventKey={"tab6"} className="swiper-slide">
              <a href="#tab7">Activity</a>
            </Nav.Link>
            <Nav.Link as={"li"} eventKey={"tab7"} className="swiper-slide">
              <a href="#tab8">About</a>
            </Nav.Link>
          </Nav>
          {/* TABS BUTTONS AND TABS SWIPER */}
          <Tab.Content className="tabs-content-wrapper">
            {/*  CREATED */}
            <ProfilePageTabsCreated Tab={Tab} />
            {/*  CREATED */}
            {/*  COLLECTED*/}
            <ProfilePageTabsCollected Tab={Tab} />
            {/*  COLLECTED*/}
            {/*  ON SALE*/}
            <ProfilePageTabsOnSale Tab={Tab} />
            {/*  ON SALE*/}
            {/*  LIKED*/}
            <ProfilePageTabsLiked Tab={Tab} />
            {/*  LIKED*/}
            {/*  FOLLOWING*/}
            <ProfilePageTabsFollow Tab={Tab} />
            {/*  FOLLOWING*/}
            {/*  FOLLOWERS*/}
            <ProfilePageTabsFollowing Tab={Tab} />
            {/*  FOLLOWERS*/}
            {/*  TAB ACTIVITY */}
            <ProfilePageTabsActivity Tab={Tab} />
            {/*  TAB ACTIVITY */}
            {/*  TAB ABOUT */}
            <ProfilePageTabsAbout Tab={Tab} />
            {/*  TAB ABOUT */}
          </Tab.Content>
        </Tab.Container>
      </div>
      {/*  TABS BLOCK */}
    </div>
  );
};

export default ProfilePageTabs;
