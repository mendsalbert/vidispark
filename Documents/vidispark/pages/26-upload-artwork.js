import React from "react";
import ProfileInfoSidebar from "../src/components/Profile Page/Profile Info/ProfileInfoSidebar";
import ProfilePurchase from "../src/components/Profile Page/Profile Upload/ProfilePurchase";
import ProfileUploadAndPreview from "../src/components/Profile Page/Profile Upload/ProfileUploadAndPreview";
import Layouts from "../src/layouts/Layouts";

const UploadArtWork = () => {
  return (
    <Layouts>
      <div className="primary-content-area container content-padding grid-left-sidebar">
        {/* / Profile Info Sidebar */}
        <ProfileInfoSidebar />
        {/* / Profile Info Sidebar */}
        <div className="main-content-area">
          <div className="page-title">
            <h2>
              <span className="gradient-text">Upload</span> Artwork
            </h2>
          </div>
          <div className="user-db-content-area">
            {/* / Profile Upload & Preview */}
            <ProfileUploadAndPreview />
            {/* / Profile Upload & Preview */}

            {/* / Profile Purchase */}
            <ProfilePurchase />
            {/* / Profile Purchase */}
          </div>
        </div>
      </div>
    </Layouts>
  );
};
export default UploadArtWork;
