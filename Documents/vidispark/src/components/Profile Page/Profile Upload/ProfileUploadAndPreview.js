import React from "react";
const ProfileUploadAndPreview = () => {
  return (
    <div className="artwork-upload-box">
      <div className="user-db-title">Upload &amp; Preview</div>
      <div className="upload-container">
        <div className="artwork-upload">
          <div className="label">Upload File</div>
          <div className="upload-box">
            <svg className="crumina-icon">
              <use xlinkHref="#upload-icon" />
            </svg>
            <div className="upload-notice"> Max 120MB, PNG, JPEG, MP3, MP4</div>
            <button className="btn btn-normal btn-dark browse-btn">
              Browse File
            </button>
          </div>
        </div>

        <div className="artwork-upload">
          <div className="label">Go Live</div>
          <div className="upload-box">
            <div className="upload-notice"> Start a live stream</div>
            <button className=" bg-danger">Browse File</button>
          </div>
        </div>
        <div className="artwork-preview">
          <div className="label">File Preview </div>
          <div className="preview-box" />
        </div>
      </div>
    </div>
  );
};

export default ProfileUploadAndPreview;
