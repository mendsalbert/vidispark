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

function VideoUploader() {
  const [uploadUrl, setUploadUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState("Not started");
  const [videoStatus, setVideoStatus] = useState("Not started");

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    try {
      setUploadStatus("Uploading file...");
      const uploadResponse = await fetch(
        "https://api.thetavideoapi.com/upload",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-tva-sa-id": "srvacc_fk130i83e047t4kg5w4edswj7",
            "x-tva-sa-secret": "6hvuhqk3499qu9gbb8w34gft6q6q8re5",
          },
          body: JSON.stringify({}),
        }
      );
      const uploadResponseJson = await uploadResponse.json();
      const { presigned_url } = uploadResponseJson.body.uploads[0];
      setUploadUrl(presigned_url);

      let uploadedBytes = 0;
      const xhr = new XMLHttpRequest();
      xhr.upload.addEventListener("progress", (event) => {
        if (event.lengthComputable) {
          const percentUploaded = (event.loaded / event.total) * 100;
          setUploadProgress(percentUploaded);
        }
      });

      xhr.onreadystatechange = async function () {
        if (xhr.readyState === 4) {
          setUploadProgress(0);
          if (xhr.status === 200) {
            setUploadStatus("Upload complete");
            setVideoStatus("Encoding video...");
            const videoResponse = await fetch(
              "https://api.thetavideoapi.com/video",
              {
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
              }
            );
            const videoResponseJson = await videoResponse.json();
            setVideoUrl(videoResponseJson?.body?.videos[0]?.id);
            let finished = false;

            while (!finished) {
              const { data } = await axios.get(
                `https://api.thetavideoapi.com/video/${videoResponseJson?.body?.videos[0]?.id}`,
                {
                  headers: {
                    "x-tva-sa-id": "srvacc_fk130i83e047t4kg5w4edswj7",
                    "x-tva-sa-secret": "6hvuhqk3499qu9gbb8w34gft6q6q8re5",
                  },
                }
              );
              if (
                data?.body?.videos?.[0]?.state === "success" &&
                data?.body?.videos?.[0]?.sub_state === "none"
              ) {
                finished = true;
                setVideoUrl(data.body.videos[0].id);
                setVideoStatus("Ready to play");
              } else {
                await new Promise((resolve) => setTimeout(resolve, 1000)); // wait one second before checking again
              }
            }
          } else {
            setUploadStatus("Upload failed");
          }
        }
      };

      xhr.open("PUT", presigned_url, true);
      xhr.upload.addEventListener("progress", (event) => {
        const percentUploaded = (event.loaded / event.total) * 100;
        setUploadProgress(percentUploaded);
        uploadedBytes = event.loaded;
      });
      xhr.setRequestHeader("Content-Type", file.type);
      xhr.send(file);
    } catch (error) {
      console.error(error);
      setUploadStatus("Error occurred");
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <div>
        {uploadProgress > 0 && (
          <progress value={uploadProgress} max="100">
            {uploadProgress}%
          </progress>
        )}
      </div>
      <div>{uploadStatus}</div>
      <div>{videoStatus}</div>
      {videoUrl && (
        <div>
          <iframe
            src={`https://player.thetavideoapi.com/video/${videoUrl}`}
            border="0"
            width="100%"
            height="100%"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}

export default VideoUploader;
