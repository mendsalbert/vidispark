import React from "react";
import {} from "@heroicons/react/outline";

const ProfileUploadAndPreview = () => {
  const categories = [
    {
      name: "Entertainment",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-device-gamepad-2"
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
          <path d="M12 5h3.5a5 5 0 0 1 0 10h-5.5l-4.015 4.227a2.3 2.3 0 0 1 -3.923 -2.035l1.634 -8.173a5 5 0 0 1 4.904 -4.019h3.4z"></path>
          <path d="M14 15l4.07 4.284a2.3 2.3 0 0 0 3.925 -2.023l-1.6 -8.232"></path>
          <path d="M8 9v2"></path>
          <path d="M7 10h2"></path>
          <path d="M14 10h2"></path>
        </svg>
      ),
    },
    {
      name: "Music",
      icon: (
        <svg
          className="tw-w-5 tw-h-5 tw-mr-2 tw-text-gray-400"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M9 18V5l12-2v13z" />
        </svg>
      ),
    },
    {
      name: "Education",
      icon: (
        <svg
          className="tw-w-5 tw-h-5 tw-mr-2 tw-text-gray-400"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
        </svg>
      ),
    },
    {
      name: "Sports",
      icon: (
        <svg
          className="tw-w-5 tw-h-5 tw-mr-2 tw-text-gray-400"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M6 21h12v-4a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v4z" />
        </svg>
      ),
    },
    {
      name: "Gaming",
      icon: (
        <svg
          className="tw-w-5 tw-h-5 tw-mr-2 tw-text-gray-400"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10zm4 13h-3v3h-2v-3H8v-2h3V10h2v3h3v2z" />
        </svg>
      ),
    },
  ];

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
      </div>

      <div id="tab-1" className="tab active">
        <div className="tab-content">
          <form className="cryptoki-form" id="personal-info-form">
            <div className="form-title">Main Details</div>
            <div className="form-group">
              <div className="form-field">
                <label htmlFor="name">Artwork name</label>
                <input type="text" id="name" defaultValue="Breathing Nature" />
              </div>
              <div className="form-field">
                <label>Category</label>
                <select
                  className="tw-appearance-none tw-w-full tw-py-2 tw-px-4 tw-pr-8 tw-leading-tight tw-focus:tw-outline-none tw-focus:tw-bg-white tw-focus:tw-border-gray-500"
                  name="category"
                >
                  {categories.map((category, index) => (
                    <option key={index} value={category.name}>
                      {category.icon}
                      {category.name}
                    </option>
                  ))}
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
  );
};

export default ProfileUploadAndPreview;
