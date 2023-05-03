// import React from "react";
// import ProfileInfoSidebar from "../src/components/Profile Page/Profile Info/ProfileInfoSidebar";
// import ProfilePurchase from "../src/components/Profile Page/Profile Upload/ProfilePurchase";
// import ProfileUploadAndPreview from "../src/components/Profile Page/Profile Upload/ProfileUploadAndPreview";
// import Layouts from "../src/layouts/Layouts";

// const UploadArtWork = () => {
//   return (
//     <Layouts>
//       <div className="primary-content-area container content-padding grid-left-sidebar">
//         {/* / Profile Info Sidebar */}
//         <ProfileInfoSidebar />
//         {/* / Profile Info Sidebar */}
//         <div className="main-content-area">
//           <div className="page-title">
//             <h2>
//               <span className="gradient-text">Upload</span> Artwork
//             </h2>
//           </div>
//           <div className="user-db-content-area">
//             {/* / Profile Upload & Preview */}
//             <ProfileUploadAndPreview />
//             {/* / Profile Upload & Preview */}

//             {/* / Profile Purchase */}
//             <ProfilePurchase />
//             {/* / Profile Purchase */}
//           </div>
//         </div>
//       </div>
//     </Layouts>
//   );
// };
// export default UploadArtWork;

import React, { useState } from "react";
// import axios from "axios";
import axios from "axios";

function VideoUploader() {
  const [uploadUrl, setUploadUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    const response = await axios.post("https://api.thetavideoapi.com/upload", {
      headers: {
        "x-tva-sa-id": "srvacc_fk130i83e047t4kg5w4edswj7",
        "x-tva-sa-secret": "6hvuhqk3499qu9gbb8w34gft6q6q8re5",
      },
    });
    const { presigned_url } = response.data.body.uploads[0];
    setUploadUrl(presigned_url);
    await axios.put(presigned_url, file, {
      headers: { "Content-Type": "application/octet-stream" },
    });
    const { id: videoId } = await axios.post(
      "https://api.thetavideoapi.com/video",
      {
        source_upload_id: response.data.body.uploads[0].id,
        playback_policy: "public",
        nft_collection: "0x5d0004fe2e0ec6d002678c7fa01026cabde9e793",
      },
      {
        headers: {
          "x-tva-sa-id": "srvacc_fk130i83e047t4kg5w4edswj7",
          "x-tva-sa-secret": "6hvuhqk3499qu9gbb8w34gft6q6q8re5",
          "Content-Type": "application/json",
        },
      }
    );
    let finished = false;
    while (!finished) {
      const { data } = await axios.get(
        `https://api.thetavideoapi.com/video/${videoId}`,
        {
          headers: {
            "x-tva-sa-id": "srvacc_fk130i83e047t4kg5w4edswj7",
            "x-tva-sa-secret": "6hvuhqk3499qu9gbb8w34gft6q6q8re5",
          },
        }
      );
      if (
        data.body.videos[0].state === "success" &&
        data.body.videos[0].sub_state === "none"
      ) {
        finished = true;
        setVideoUrl(data.body.videos[0].playback_uri);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // wait one second before checking again
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <p>file upload</p>
      {videoUrl && <video controls src={videoUrl} />}
      {uploadUrl}
    </div>
  );
}

export default VideoUploader;
