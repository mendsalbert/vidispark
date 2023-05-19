import Link from "next/link";
import React from "react";
import { useUser } from "../../../services/user";
const ProfileInfoSidebar = () => {
  const { userInfo, logout } = useUser();

  console.log(userInfo);
  return (
    <aside>
      <div className="user-db-menu">
        <div className="user-db-header">
          {/* <div className="user-db-cover-image profile-cover-image" /> */}
          <div className="tw-rounded-2xl">
            <img src={userInfo[0]?.data?.avatarCover} alt="" />
          </div>
          <div className="user-header-user-profile">
            <div className="avatar box-64">
              {" "}
              <Link href={`/profile-page/${userInfo[0]?.id}`}>
                <a>
                  <img src={userInfo[0]?.data?.avatarUrl} alt="avatar" />
                  {/* <span className="verified">
                    <svg className="crumina-icon">
                      <use xlinkHref="#check-icon" />
                    </svg>
                  </span> */}
                </a>
              </Link>{" "}
            </div>
            <div className="title">
              {" "}
              <Link href={`/profile-page/${userInfo[0]?.id}`}>
                <a>{userInfo[0]?.data?.fullname}</a>
              </Link>{" "}
            </div>
            <div className="item-meta">
              <span className="gradient-text">
                @{userInfo[0]?.data?.username}
              </span>
            </div>
          </div>
        </div>
        <div className="user-db-body">
          <ul className="profile-menu">
            <li className="account">
              {" "}
              <Link href="/29-account-settings">
                <a className="tw-flex tw-flex-row tw-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-robot"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M7 7h10a2 2 0 0 1 2 2v1l1 1v3l-1 1v3a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-3l-1 -1v-3l1 -1v-1a2 2 0 0 1 2 -2z"></path>
                    <path d="M10 16h4"></path>
                    <circle
                      cx="8.5"
                      cy="11.5"
                      r=".5"
                      fill="currentColor"
                    ></circle>
                    <circle
                      cx="15.5"
                      cy="11.5"
                      r=".5"
                      fill="currentColor"
                    ></circle>
                    <path d="M9 7l-1 -4"></path>
                    <path d="M15 7l1 -4"></path>
                  </svg>
                  VidisAI{" "}
                </a>
              </Link>{" "}
            </li>
            <li className="profile">
              {" "}
              <Link href="/23-profile-info">
                <a className="tw-flex tw-flex-row tw-items-center">
                  <svg className="crumina-icon">
                    <use xlinkHref="#user-icon" />
                  </svg>
                  Profile Info
                </a>
              </Link>{" "}
            </li>
            <li className="account">
              {" "}
              <Link href="/29-account-settings">
                <a className="tw-flex tw-flex-row tw-items-center">
                  <svg className="crumina-icon">
                    <use xlinkHref="#settings-icon" />
                  </svg>
                  Account Settings{" "}
                </a>
              </Link>{" "}
            </li>

            <li className="artwork">
              {" "}
              <Link href="/upload-artwork">
                <a className="tw-flex tw-flex-row tw-items-center">
                  <svg className="crumina-icon">
                    <use xlinkHref="#picture-icon" />
                  </svg>
                  Create Artwork
                </a>
              </Link>{" "}
            </li>

            <li className="verification">
              {" "}
              <Link href="/get-verified">
                <a className="tw-flex tw-flex-row tw-items-center">
                  <svg className="crumina-icon">
                    <use xlinkHref="#circle-checked-icon" />
                  </svg>
                  Get Verified
                </a>
              </Link>{" "}
            </li>
            <li className="logout" onClick={logout}>
              <a
                onClick={logout}
                className="tw-flex tw-flex-row tw-items-center"
              >
                <svg onClick={logout} className="crumina-icon">
                  <use xlinkHref="#logout-icon" />
                </svg>
                Log Out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default ProfileInfoSidebar;
