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
  const [videoUrl, setVideoUrl] = useState("video_u2stwz9f2euf5hnndshk6xhqx2");
  const [uploadProgress, setUploadProgress] = useState(0);

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
    console.log(videoResponseJson?.body?.videos);
    setVideoUrl(videoResponseJson?.body?.videos[0].id);
    console.log("video url ", videoResponseJson?.body?.videos[0]?.id);
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
        console.log("video url ", data.body.videos[0].id);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // wait one second before checking again
      }
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
      {/* {videoUrl && ( */}
      <iframe
        src={`https://player.thetavideoapi.com/video/${videoUrl}/master.m3u8
        `}
        border="0"
        width="100%"
        height="100%"
        allowfullscreen
      />
      {/* )} */}
    </div>
  );
}

export default VideoUploader;
