import Link from "next/link";
const DashBoardSidebar = () => {
  return (
    <aside>
      {/*    dashboard menu */}
      <div className="user-db-menu-ds">
        <ul className="profile-menu-ds">
          <li>
            <Link href="26-profile-info">
              <a>
                <svg className="crumina-icon">
                  <use xlinkHref="#user-icon" />
                </svg>
                Profile Info
              </a>
            </Link>
          </li>
          <li>
            <a href="#">
              <svg className="crumina-icon">
                <use xlinkHref="#settings-icon" />
              </svg>
              Account Settings
            </a>
          </li>
          <li>
            <a href="#">
              <svg className="crumina-icon">
                <use xlinkHref="#slide-filter-icon" />
              </svg>
              Notification Settings
            </a>
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
            <Link href="/11-profile-sales-statement">
              <a>
                <svg className="crumina-icon">
                  <use xlinkHref="#file-text-icon" />
                </svg>
                Sales Statement
              </a>
            </Link>
          </li>
          <li>
            <Link href="/12-profile-upload-item">
              <a>
                <svg className="crumina-icon">
                  <use xlinkHref="#picture-icon" />
                </svg>
                Upload Item
              </a>
            </Link>
          </li>
          <li>
            <Link href="/13-profile-manage-items">
              <a>
                <svg className="crumina-icon">
                  <use xlinkHref="#picture-icon" />
                </svg>
                Manage Items
              </a>
            </Link>
          </li>
          <li>
            <Link href="/14-profile-payment-history">
              <a>
                <svg className="crumina-icon">
                  <use xlinkHref="#dollar-icon" />
                </svg>
                Payouts
              </a>
            </Link>
          </li>
          <li>
            <Link href="/15-profile-purchases">
              <a>
                <svg className="crumina-icon">
                  <use xlinkHref="#wallet-icon" />
                </svg>
                Purchases
              </a>
            </Link>
          </li>
          <li>
            <a href="#">
              <svg className="crumina-icon">
                <use xlinkHref="#circle-checked-icon" />
              </svg>
              Get Verified
            </a>
          </li>
          <li className="logout">
            <a href="#">
              <svg className="crumina-icon">
                <use xlinkHref="#logout-icon" />
              </svg>
              Log Out
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};
export default DashBoardSidebar;
