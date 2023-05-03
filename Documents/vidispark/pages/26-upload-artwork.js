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
import axios from "axios";

const UploadVideo = () => {
  const [presignedUrl, setPresignedUrl] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);

  const handleUpload = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      "https://api.thetavideoapi.com/upload",
      {},
      {
        headers: {
          "x-tva-sa-id": "srvacc_fk130i83e047t4kg5w4edswj7",
          "x-tva-sa-secret": "6hvuhqk3499qu9gbb8w34gft6q6q8re5",
        },
      }
    );
    setPresignedUrl(response.data.body.uploads[0].presigned_url);
  };

  const handleFileChange = async (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const response = await axios.put(presignedUrl, file, {
      headers: {
        "Content-Type": "application/octet-stream",
      },
    });
    const sourceUploadId = response.request.path.split("/")[3];
    const response2 = await axios.post(
      "https://api.thetavideoapi.com/video",
      {
        source_upload_id: sourceUploadId,
        playback_policy: "public",
      },
      {
        headers: {
          "x-tva-sa-id": "srvacc_fk130i83e047t4kg5w4edswj7",
          "x-tva-sa-secret": "6hvuhqk3499qu9gbb8w34gft6q6q8re5",
          "Content-Type": "application/json",
        },
      }
    );
    const playbackUri = response2.data.body.videos[0].playback_uri;
    setVideoUrl(playbackUri);
  };

  return (
    <>
      {!presignedUrl && <button onClick={handleUpload}>Upload video</button>}
      {presignedUrl && (
        <>
          <p>Upload video file:</p>
          <input type="file" onChange={handleFileChange}></input>
          {videoUrl && (
            <>
              <p>View your video:</p>
              <a href={videoUrl} target="_blank" rel="noreferrer">
                {videoUrl}
              </a>
            </>
          )}
        </>
      )}
    </>
  );
};

export default UploadVideo;
