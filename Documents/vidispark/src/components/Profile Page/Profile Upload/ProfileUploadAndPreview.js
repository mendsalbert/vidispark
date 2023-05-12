import React, { useState } from "react";
import axios from "axios";

const ProfileUploadAndPreview = () => {
  const [uploadUrl, setUploadUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    const uploadResponse = await fetch("https://api.thetavideoapi.com/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-tva-sa-id": "srvacc_fk130i83e047t4kg5w4edswj7",
        "x-tva-sa-secret": "6hvuhqk3499qu9gbb8w34gft6q6q8re5",
      },
      body: JSON.stringify({}),
    });
    const uploadResponseJson = await uploadResponse.json();
    const { presigned_url } = uploadResponseJson.body.uploads[0];
    setUploadUrl(presigned_url);
    await fetch(presigned_url, {
      method: "PUT",
      headers: { "Content-Type": "application/octet-stream" },
      body: file,
    });
    const videoResponse = await fetch("https://api.thetavideoapi.com/video", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-tva-sa-id": "srvacc_fk130i83e047t4kg5w4edswj7",
        "x-tva-sa-secret": "6hvuhqk3499qu9gbb8w34gft6q6q8re5",
      },
      body: JSON.stringify({
        source_upload_id: uploadResponseJson.body.uploads[0].id,
        playback_policy: "public",
        nft_collection: "0x5d0004fe2e0ec6d002678c7fa01026cabde9e793",
      }),
    });
    const videoResponseJson = await videoResponse.json();
    console.log(videoResponseJson.body.videos);
    let finished = false;

    while (!finished) {
      const { data } = await axios.get(
        `https://api.thetavideoapi.com/video/${videoResponseJson.body.videos[0].id}`,
        {
          headers: {
            "x-tva-sa-id": "srvacc_fk130i83e047t4kg5w4edswj7",
            "x-tva-sa-secret": "6hvuhqk3499qu9gbb8w34gft6q6q8re5",
          },
        }
      );
      console.log("data", data);
      if (
        data?.body?.videos?.[0]?.state === "success" &&
        data?.body?.videos?.[0]?.sub_state === "none"
      ) {
        finished = true;
        setVideoUrl(data.body.videos[0].player_uri);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // wait one second before checking again
      }
    }
  };

  const categories = [
    { name: "Entertainment" },
    { name: "Music" },
    { name: "Sports" },
    { name: "Gaming" },
    { name: "Education" },
    { name: "News" },
    { name: "Comedy" },
    { name: "Lifestyle" },
    { name: "Travel" },
    { name: "Science and Technology" },
    { name: "Health and Fitness" },
    { name: "Fashion and Beauty" },
    { name: "Food and Cooking" },
    { name: "Business and Finance" },
    { name: "Art and Design" },
  ];

  return (
    <div className="artwork-upload-box">
      <div className="user-db-title">Upload</div>
      <input
        type="file"
        id="fileInput2"
        className="tw-hidden"
        onChange={handleFileChange}
      />

      <div className="upload-container">
        <label htmlFor="fileInput2">
          <div className="artwork-upload">
            <div className="label">Upload File</div>
            <div className="upload-box">
              <svg className="crumina-icon">
                <use xlinkHref="#upload-icon" />
              </svg>
              <div className="upload-notice">
                {" "}
                Max 120MB, PNG, JPEG, MP3, MP4
              </div>
              <button className="btn btn-normal btn-dark browse-btn">
                Browse File
              </button>
            </div>
          </div>
        </label>

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
                <label htmlFor="name">Video name</label>
                <input type="text" id="name" />
              </div>
              <div className="form-field">
                <label>Category</label>
                <select
                  className="tw-appearance-none tw-w-full tw-py-2 tw-px-4 tw-pr-8 tw-leading-tight tw-focus:tw-outline-none tw-focus:tw-bg-white tw-focus:tw-border-gray-500"
                  name="category"
                >
                  {categories.map((category, index) => (
                    <option key={index} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="price">Thumnail URL</label>
                <input type="text" id="price" />
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
