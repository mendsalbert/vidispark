import DashBoardSidebar from "../src/components/DashBoardSidebar";
import Layouts from "../src/layouts/Layouts";

const ProfileInfo = () => {
  return (
    <Layouts>
      <div className="primary-content-area container content-padding grid-left-sidebar">
        <DashBoardSidebar />
        <div className="main-content-area">
          <div className="page-title">
            <h2>
              <span className="gradient-text">Profile</span> Info
            </h2>
          </div>
          <div className="user-db-content-area">
            <form
              className="cryptoki-form"
              onSubmit={(e) => e.preventDefault()}
              id="personal-info-form"
            >
              <div className="user-db-title">Personal Info</div>
              <div className="form-group">
                <div className="form-field">
                  <label htmlFor="name">Full name</label>
                  <input type="text" id="name" defaultValue="Dexter Stark" />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    id="email"
                    defaultValue="dexstark@fakemail.com"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="form-field">
                  <label htmlFor="username">Username</label>
                  <input type="text" id="username" defaultValue="dexterstark" />
                </div>
                <div className="form-field">
                  <label htmlFor="phone">Phone contact</label>
                  <input type="number" id="phone" defaultValue="" />
                </div>
              </div>
              <div className="form-group">
                <div className="form-field">
                  <label htmlFor="password-1">Change password</label>
                  <input type="password" name="password" id="password-1" />
                </div>
                <div className="form-field">
                  <label htmlFor="password-2">Repeat password</label>
                  <input type="password" name="password" id="password-2" />
                </div>
              </div>
            </form>
            <div className="upload-photo-box">
              <div className="user-db-title">Avatar and Cover</div>
              <div className="user-avatar">
                <img src="img/content/profile/avatar-upload.png" alt="" />
              </div>
              <div className="user-cover-image">
                <img src="img/content/profile/profile-cover-1.png" alt="" />
              </div>
              <div className="upload-notice">
                Images must be .png or .jpg format. Min size 100x100px (avatar)
                and 1920x320px (cover){" "}
              </div>
            </div>
          </div>
          <button className="btn btn-wide btn-dark">Save Changes</button>
        </div>
      </div>
    </Layouts>
  );
};
export default ProfileInfo;
