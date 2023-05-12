import React from "react";
const ProfileUploadAndPreview = () => {
  return (
    <div className="artwork-upload-box">
      <div className="user-db-title">Upload</div>
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
            <button className="tw-bg-red-600 tw-rounded-full tw-px-3 tw-py-2 tw-flex tw-flex-row tw-items-center tw-space-x-2">
              <span className="tw-text-white">Go Live</span>
              <span class="tw-relative tw-flex tw-h-3 tw-w-3">
                <span class="tw-animate-ping tw-absolute tw-inline-flex tw-h-full tw-w-full tw-rounded-full tw-bg-gray-200 tw-opacity-75"></span>
                <span class="tw-relative tw-inline-flex tw-rounded-full tw-h-3 tw-w-3 tw-bg-gray-300"></span>
              </span>
            </button>
          </div>
        </div>

        <div className="purchase-type-box">
          <div className="db-tabs-block">
            <div id="tab-1" className="tab active">
              <div className="tab-content">
                <form className="cryptoki-form" id="personal-info-form">
                  <div className="form-title">Main Details</div>
                  <div className="form-group">
                    <div className="form-field">
                      <label htmlFor="name">Artwork name</label>
                      <input
                        type="text"
                        id="name"
                        defaultValue="Breathing Nature"
                      />
                    </div>
                    <div className="form-field">
                      <label>Category</label>
                      <select className="select-nice" name="currency">
                        <option value="ETH" selected="">
                          Gaming
                        </option>
                        <option value="USD">Music</option>
                        <option value="Euro">Education</option>
                      </select>
                    </div>
                    <div className="form-field">
                      <label htmlFor="price">Thumnail URL</label>
                      <input type="number" id="price" defaultValue="3.21" />
                    </div>
                  </div>
                  <div className="form-field comment-area">
                    <label>Description</label>
                    <textarea
                      id="message"
                      cols={30}
                      rows={10}
                      className=""
                      spellCheck="false"
                      defaultValue={""}
                    />
                  </div>
                  <p>Linces and linces type</p>
                  <p>Audience</p>
                  <p>Public or private</p>
                  <button className="btn btn-wide btn-dark">Create Item</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUploadAndPreview;
