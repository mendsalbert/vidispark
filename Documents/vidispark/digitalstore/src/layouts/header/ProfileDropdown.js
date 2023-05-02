import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import useClickOutside from "../../useClickOutside";

const ProfileDropdown = () => {
  const [toggle, setToggle] = useState(false);
  const dayMood = useRef(true);
  let domNode = useClickOutside(() => {
    setToggle(false);
  });

  useEffect(() => {
    let mood = localStorage.getItem("mood");
    moodChange(mood);
    dayMood.current = mood ? true : false;
    console.log(dayMood.current, mood);
  }, []);

  const moodChange = (dark) => {
    if (dark) {
      document.querySelector("body").classList.add("dark-mode");
      localStorage.setItem("mood", "dark-mood");
    } else {
      document.querySelector("body").classList.remove("dark-mode");
      localStorage.removeItem("mood");
    }
  };

  const onClick = () => {
    dayMood.current = !dayMood.current;
    moodChange(dayMood.current);
  };
  return (
    <div
      className={`header-user-profile cryptoki-notif-bttn ${
        toggle ? "active" : ""
      }`}
      ref={domNode}
    >
      {/*user-meta*/}
      <div className="user-meta" onClick={() => setToggle(!toggle)}>
        <div className="user_name">Dexter Stark</div>
        <div className="user_score">$291.36</div>
      </div>
      {/*/user-meta*/}
      {/*user-avatar*/}
      <div
        className={`avatar box-42 ${toggle ? "hide" : ""}`}
        onClick={() => setToggle(!toggle)}
      >
        <img src="/img/avatar.png" alt="avatar" />
        <span className="verified">
          <svg className="crumina-icon">
            <use xlinkHref="#check-icon" />
          </svg>
        </span>
      </div>
      {/*/user-avatar*/}
      {/*close-icon*/}
      <div
        className={`closing-icon ${toggle ? "show" : ""}`}
        onClick={() => setToggle(!toggle)}
      >
        <svg className="crumina-icon close-icon">
          <use xlinkHref="#cross-icon" />
        </svg>
      </div>
      {/*/close-icon*/}
      <div
        id="profile-dropdown"
        className={`cryptoki-notif-target ${toggle ? "active open" : ""}`}
      >
        <div className="profile-dropdown-header profile-cover-image" />
        <div className="profile-dropdown-body">
          <div className="profile-heading">
            {/*user-avatar*/}
            <div className="profile-avatar avatar box-26">
              <img
                src="img/avatar.png"
                alt="avatar"
                loading="lazy"
                height={100}
                width={100}
              />
              <span className="verified">
                <svg className="crumina-icon">
                  <use xlinkHref="#check-icon" />
                </svg>
              </span>
            </div>
            {/*/user-avatar*/}
            <div className="profile-link">
              {" "}
              <Link href="/08-profile-page">
                <a className="btn btn-small gradient-background">My Profile</a>
              </Link>
            </div>
          </div>
          {/*user-menu*/}
          <ul className="profile-menu">
            <li>
              <Link href="/26-profile-info">
                <a>
                  <svg className="crumina-icon">
                    <use xlinkHref="#user-icon" />
                  </svg>
                  Profile Info
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <svg className="crumina-icon">
                    <use xlinkHref="#settings-icon" />
                  </svg>
                  Account Settings
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <svg className="crumina-icon">
                    <use xlinkHref="#slide-filter-icon" />
                  </svg>
                  Notification Settings
                </a>
              </Link>
            </li>
            <li>
              <Link href="/10-profile-dashboard">
                <a>
                  <svg className="crumina-icon">
                    <use xlinkHref="#dashboard-icon" />
                  </svg>
                  Dashboard
                </a>
              </Link>
            </li>
            <li>
              <Link href="11-profile-sales-statement">
                <a>
                  <svg className="crumina-icon">
                    <use xlinkHref="#file-text-icon" />
                  </svg>
                  Sales Statement
                </a>
              </Link>
            </li>
            <li>
              <Link href="12-profile-upload-item">
                <a>
                  <svg className="crumina-icon">
                    <use xlinkHref="#picture-icon" />
                  </svg>
                  Upload Item
                </a>
              </Link>
            </li>
            <li>
              <Link href="13-profile-manage-items">
                <a>
                  <svg className="crumina-icon">
                    <use xlinkHref="#picture-icon" />
                  </svg>
                  Manage Items
                </a>
              </Link>
            </li>
            <li>
              <Link href="14-profile-payment-history">
                <a>
                  <svg className="crumina-icon">
                    <use xlinkHref="#dollar-icon" />
                  </svg>
                  Payouts
                </a>
              </Link>
            </li>
            <li>
              <Link href="15-profile-purchases">
                <a>
                  <svg className="crumina-icon">
                    <use xlinkHref="#wallet-icon" />
                  </svg>
                  Purchases
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <svg className="crumina-icon">
                    <use xlinkHref="#circle-checked-icon" />
                  </svg>
                  Get Verified
                </a>
              </Link>
            </li>
            <li className="logout">
              <Link href="#">
                <a>
                  <svg className="crumina-icon">
                    <use xlinkHref="#logout-icon" />
                  </svg>
                  Log Out
                </a>
              </Link>
            </li>
          </ul>

          {/*/user-menu*/}
        </div>
        <div className="profile-dropdown-footer">
          {/*dark-mode-toggle*/}
          <div className="mode-toggle">
            <div className="mode-title">
              <span>
                <svg className="crumina-icon">
                  <use xlinkHref="#moon-icon" />
                </svg>
              </span>
              Night-mode
            </div>
            <label className="toggle-control">
              <input
                type="checkbox"
                ref={dayMood}
                defaultChecked={dayMood.current}
                onClick={(e) => onClick(e)}
              />
              <span className="control" />
            </label>
          </div>
          {/*/dark-mode-toggle*/}
        </div>
      </div>
    </div>
  );
};
export default ProfileDropdown;
