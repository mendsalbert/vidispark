import React, { useState } from "react";
import axios from "axios";

const ProfileUploadAndPreview = () => {
  const [uploadUrl, setUploadUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [videoUploading, setVideoUploading] = useState(false);
  const [uploadStep, setUploadStep] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [category, setCategory] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  const handleFileChange = async (event) => {
    setVideoUploading(true);
    setUploadStep("Uploading Video");
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
    setUploadStep("Analyzing Video");
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
    setUploadStep("About to Complete ");

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
        setUploadStep("Completed ");
        setIsComplete(true);
        setVideoUploading(false);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // wait one second before checking again
      }
    }
  };

  const categories = [
    {
      name: "Entertainment",
      tags: ["Movies", "TV Shows", "Celebrities", "Events"],
    },
    { name: "Music", tags: ["Pop", "Rock", "Hip Hop", "Jazz", "Classical"] },
    {
      name: "Sports",
      tags: ["Football", "Basketball", "Soccer", "Tennis", "Golf"],
    },
    {
      name: "Gaming",
      tags: ["Video Games", "Esports", "Game Reviews", "Game Streaming"],
    },
    {
      name: "Education",
      tags: ["Science", "History", "Mathematics", "Language Learning"],
    },
    {
      name: "News",
      tags: ["World News", "Politics", "Technology News", "Breaking News"],
    },
    {
      name: "Comedy",
      tags: ["Stand-up Comedy", "Sketch Comedy", "Funny Videos"],
    },
    {
      name: "Lifestyle",
      tags: ["Fashion", "Home Decor", "Travel", "Personal Development"],
    },
    { name: "Travel", tags: ["Adventure", "Beaches", "City Tours", "Hiking"] },
    {
      name: "Science and Technology",
      tags: ["Space", "Innovation", "Gadgets", "Artificial Intelligence"],
    },
    {
      name: "Health and Fitness",
      tags: ["Exercise", "Nutrition", "Mental Health", "Yoga"],
    },
    {
      name: "Fashion and Beauty",
      tags: ["Fashion Trends", "Makeup", "Skincare", "Hairstyles"],
    },
    {
      name: "Food and Cooking",
      tags: ["Recipes", "Cooking Techniques", "Food Reviews", "Healthy Eating"],
    },
    {
      name: "Business and Finance",
      tags: ["Entrepreneurship", "Investing", "Personal Finance", "Startups"],
    },
    {
      name: "Art and Design",
      tags: ["Painting", "Photography", "Graphic Design", "Architecture"],
    },
  ];

  const handleCategoryChange = (event) => {
    console.log("change");
    setCategory(event.target.value);
    const tagsForCategory =
      categories.find((category) => category.name === selectedCategory)?.tags ||
      [];
    console.log(tagsForCategory);
    // setSelectedTags(categories.filter());
  };

  const handleTagInputChange = (event) => {
    setTagInput(event.target.value);
  };

  const handleAddTag = () => {
    if (tagInput.trim() !== "") {
      setSelectedTags([...selectedTags, tagInput]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (tag) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
  };

  const selectedCategory = categories.find((c) => c.name === category);
  const suggestedTags = selectedCategory ? selectedCategory.tags : [];

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
        <div className="artwork-upload">
          <label htmlFor="fileInput2">
            <div className="label">Upload File</div>
            <div className="">
              <div className="upload-box">
                <svg className="crumina-icon">
                  <use xlinkHref="#upload-icon" />
                </svg>
                <div className="upload-notice">
                  {" "}
                  Max 120MB, PNG, JPEG, MP3, MP4
                </div>
                {videoUploading ? (
                  <>
                    <div
                      class="tw-inline-block tw-h-8 tw-w-8 tw-animate-spin tw-rounded-full tw-border-4 tw-border-solid tw-border-current tw-border-r-transparent tw-align-[-0.125em] tw-motion-reduce:animate-[spin_1.5s_linear_infinite]"
                      role="status"
                    >
                      <span class="tw-!absolute tw!-m-px tw!h-px tw!w-px tw!overflow-hidden tw!whitespace-nowrap tw!border-0 tw!p-0 tw![clip:rect(0,0,0,0)]"></span>
                    </div>
                    <p className="upload-notice">{uploadStep}</p>
                  </>
                ) : (
                  <button className="btn btn-normal btn-dark browse-btn">
                    Browse File
                  </button>
                )}
              </div>
            </div>
          </label>
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
                <label htmlFor="name">Video name</label>
                <input type="text" id="name" />
              </div>
              <div className="form-field">
                <label>Category</label>
                <select
                  value={category}
                  onChange={handleCategoryChange}
                  // className="tw-appearance-none tw-w-full tw-py-2 tw-px-4 tw-pr-8 tw-leading-tight tw-focus:tw-outline-none tw-focus:tw-bg-white tw-focus:tw-border-gray-500"
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

            {true && (
              <div className="tw-space-x-2">
                <label htmlFor="tagInput" className="tw-block tw-font-medium">
                  Tags:
                </label>
                <div className="tw-flex tw-items-center tw-space-x-2">
                  {selectedTags.map((tag) => (
                    <div
                      key={tag}
                      className="tw-bg-blue-500 tw-text-white tw-rounded-full tw-px-2 tw-py-1 tw-text-sm tw-flex tw-items-center tw-space-x-1 tw-cursor-pointer"
                      onClick={() => handleRemoveTag(tag)}
                    >
                      <span>{tag}</span>
                      <span className="tw-text-xs">X</span>
                    </div>
                  ))}
                  <input
                    type="text"
                    id="tagInput"
                    value={tagInput}
                    onChange={handleTagInputChange}
                    placeholder="Enter a tag"
                    className="tw-border tw-border-gray-300 tw-rounded tw-px-2 tw-py-1 tw-focus:outline-none tw-focus:ring tw-focus:border-blue-500"
                  />
                  <button
                    type="button" // Set the type to "button"
                    onClick={handleAddTag}
                    className="tw-bg-blue-500 tw-text-white tw-rounded tw-px-3 tw-py-1 tw-text-sm tw-focus:outline-none tw-focus:ring tw-focus:border-blue-500"
                  >
                    Add
                  </button>
                </div>
              </div>
            )}
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
