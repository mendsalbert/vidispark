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

const UploadVideo = () => {
  const [presignedUrl, setPresignedUrl] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleUpload = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://api.thetavideoapi.com/upload", {
        method: "POST",
        headers: {
          "x-tva-sa-id": "srvacc_fk130i83e047t4kg5w4edswj7",
          "x-tva-sa-secret": "6hvuhqk3499qu9gbb8w34gft6q6q8re5",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });
      const data = await response.json();
      setPresignedUrl(data.body.uploads[0].presigned_url);
    } catch (error) {
      console.error("Failed to get pre-signed URL:", error);
    }
  };

  const handleFileChange = async (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    try {
      const response = await fetch(presignedUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/octet-stream",
        },
        body: file,
      });
      if (!response.ok) {
        throw new Error(`Failed to upload file: ${response.status}`);
      }
      const sourceUploadId = response.url.split("/")[3];
      const response2 = await fetch("https://api.thetavideoapi.com/video", {
        method: "POST",
        headers: {
          "x-tva-sa-id": "srvacc_fk130i83e047t4kg5w4edswj7",
          "x-tva-sa-secret": "6hvuhqk3499qu9gbb8w34gft6q6q8re5",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          source_upload_id: sourceUploadId,
          playback_policy: "public",
        }),
      });
      const data2 = await response2.json();
      const playbackUri = data2?.body?.videos[0]?.playback_uri;
      setVideoUrl(playbackUri);
    } catch (error) {
      console.error("Failed to upload and transcode video:", error);
    }
  };

  const handleUploadProgress = (event) => {
    if (event.lengthComputable) {
      const progress = Math.round((event.loaded / event.total) * 100);
      setUploadProgress(progress);
    }
  };

  return (
    <>
      {!presignedUrl && <button onClick={handleUpload}>Upload video</button>}
      {presignedUrl && (
        <>
          <p>Upload video file:</p>
          <input type="file" onChange={handleFileChange}></input>
          {uploadProgress > 0 && <progress value={uploadProgress} max="100" />}
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
