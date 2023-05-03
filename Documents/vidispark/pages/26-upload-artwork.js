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
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [playbackURI, setPlaybackURI] = useState(null);

  const handleFileSelect = (e) => {
    setSelectedFile(e.target.files[0]);
    setPlaybackURI(null);
  };

  const handleUpload = async () => {
    const presignedRes = await axios.post(
      "https://api.thetavideoapi.com/upload",
      {
        headers: {
          "x-tva-sa-id": "srvacc_fk130i83e047t4kg5w4edswj7",
          "x-tva-sa-secret": "6hvuhqk3499qu9gbb8w34gft6q6q8re5",
        },
      }
    );
    const { id, presigned_url } = presignedRes.data.body.uploads[0];

    const uploadRes = await axios.put(presigned_url, selectedFile, {
      headers: {
        "Content-Type": "application/octet-stream",
        onUploadProgress: (e) => {
          setUploadProgress(Math.round((100 * e.loaded) / e.total));
        },
      },
    });

    const transcodeRes = await axios.post(
      "https://api.thetavideoapi.com/video",
      {
        source_upload_id: id,
        playback_policy: "public",
        nft_collection: "YOUR_NFT_COLLECTION_ADDRESS",
      },
      {
        headers: {
          "x-tva-sa-id": "srvacc_fk130i83e047t4kg5w4edswj7",
          "x-tva-sa-secret": "6hvuhqk3499qu9gbb8w34gft6q6q8re5",
          "Content-Type": "application/json",
        },
      }
    );

    let videoRes;
    do {
      videoRes = await axios.get(transcodeRes.data.body.videos[0].id, {
        headers: {
          "x-tva-sa-id": "srvacc_fk130i83e047t4kg5w4edswj7",
          "x-tva-sa-secret": "6hvuhqk3499qu9gbb8w34gft6q6q8re5",
        },
      });
      setUploadProgress(
        Math.round(
          100 *
            (videoRes.data.body.videos[0].progress || 0) *
            (videoRes.data.body.videos[0].sub_state === "done" ? 0 : 1)
        )
      );
      if (videoRes.data.body.videos[0].state === "success") {
        setPlaybackURI(videoRes.data.body.videos[0].playback_uri);
      }
      await new Promise((resolve) => setTimeout(resolve, 5000));
    } while (videoRes.data.body.videos[0].state !== "success");
  };

  return (
    <div>
      <input type="file" onChange={handleFileSelect} accept="video/*" />
      <button onClick={handleUpload}>Upload</button>
      {uploadProgress > 0 && <div>Progress: {uploadProgress}%</div>}
      {playbackURI && <div>Playback URI: {playbackURI}</div>}
    </div>
  );
};

export default UploadVideo;
