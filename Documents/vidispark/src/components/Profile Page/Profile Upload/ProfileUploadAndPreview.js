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
            <button className="tw-bg-red-600 tw-rounded-full tw-px-3 tw-py-2 tw-flex tw-flex-row tw-items-center">
              <span>Go Live</span>
              <span class="tw-relative tw-flex tw-h-3 tw-w-3">
                <span class="tw-animate-ping tw-absolute tw-inline-flex tw-h-full tw-w-full tw-rounded-full tw-bg-gray-200 tw-opacity-75"></span>
                <span class="tw-relative tw-inline-flex tw-rounded-full tw-h-3 tw-w-3 tw-bg-gray-300"></span>
              </span>
            </button>
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
