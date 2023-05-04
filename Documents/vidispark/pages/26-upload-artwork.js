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

//GOLD
// import React, { useState } from "react";
// import axios from "axios";
// function VideoUploader() {
//   const [uploadUrl, setUploadUrl] = useState("");
//   const [videoUrl, setVideoUrl] = useState("");

//   const handleFileChange = async (event) => {
//     const file = event.target.files[0];
//     const uploadResponse = await fetch("https://api.thetavideoapi.com/upload", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "x-tva-sa-id": "srvacc_fk130i83e047t4kg5w4edswj7",
//         "x-tva-sa-secret": "6hvuhqk3499qu9gbb8w34gft6q6q8re5",
//       },
//       body: JSON.stringify({}),
//     });
//     const uploadResponseJson = await uploadResponse.json();
//     const { presigned_url } = uploadResponseJson.body.uploads[0];
//     setUploadUrl(presigned_url);
//     await fetch(presigned_url, {
//       method: "PUT",
//       headers: { "Content-Type": "application/octet-stream" },
//       body: file,
//     });
//     const videoResponse = await fetch("https://api.thetavideoapi.com/video", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "x-tva-sa-id": "srvacc_fk130i83e047t4kg5w4edswj7",
//         "x-tva-sa-secret": "6hvuhqk3499qu9gbb8w34gft6q6q8re5",
//       },
//       body: JSON.stringify({
//         source_upload_id: uploadResponseJson.body.uploads[0].id,
//         playback_policy: "public",
//         nft_collection: "0x5d0004fe2e0ec6d002678c7fa01026cabde9e793",
//       }),
//     });
//     const videoResponseJson = await videoResponse.json();
//     console.log(videoResponseJson.body.videos);
//     let finished = false;

//     while (!finished) {
//       const { data } = await axios.get(
//         `https://api.thetavideoapi.com/video/${videoResponseJson.body.videos[0].id}`,
//         {
//           headers: {
//             "x-tva-sa-id": "srvacc_fk130i83e047t4kg5w4edswj7",
//             "x-tva-sa-secret": "6hvuhqk3499qu9gbb8w34gft6q6q8re5",
//           },
//         }
//       );
//       console.log("data", data);
//       if (
//         data?.body?.videos?.[0]?.state === "success" &&
//         data?.body?.videos?.[0]?.sub_state === "none"
//       ) {
//         finished = true;
//         setVideoUrl(data.body.videos[0].player_uri);
//       } else {
//         await new Promise((resolve) => setTimeout(resolve, 1000)); // wait one second before checking again
//       }
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       {videoUrl && <video controls src={videoUrl} />}
//       {/* <iframe
//         src="https://player.thetavideoapi.com/video/video_5v9q854twpr893bz4nktx22xkh"
//         border="0"
//         width="100%"
//         height="100%"
//         allowfullscreen
//       /> */}
//     </div>
//   );
// }

// export default VideoUploader;
import React, { useState, useRef } from "react";
import axios from "axios";

function VideoUploader() {
  const [streamUrl, setStreamUrl] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);

  // start recording the video stream
  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    videoRef.current.srcObject = stream;
    videoRef.current.play();
    mediaRecorderRef.current = new MediaRecorder(stream, {
      mimeType: "video/webm",
    });
    mediaRecorderRef.current.start();
    setIsRecording(true);
  };

  // stop recording and upload the video to Theta Video API for live streaming
  const stopRecording = async () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
    const videoBlob = new Blob(mediaRecorderRef.current.chunks, {
      type: "video/webm",
    });
    const videoUrl = URL.createObjectURL(videoBlob);
    const uploadUrl = await createUploadUrl();
    const uploadResponse = await fetch(uploadUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "video/webm",
        "x-tva-sa-id": "srvacc_fk130i83e047t4kg5w4edswj7",
        "x-tva-sa-secret": "6hvuhqk3499qu9gbb8w34gft6q6q8re5",
      },
      body: videoBlob,
    });
    const videoResponse = await fetch("https://api.thetavideoapi.com/video", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-tva-sa-id": "srvacc_fk130i83e047t4kg5w4edswj7",
        "x-tva-sa-secret": "6hvuhqk3499qu9gbb8w34gft6q6q8re5",
      },
      body: JSON.stringify({
        source_upload_id: uploadResponse.body.uploads[0].id,
        playback_policy: "public",
        nft_collection: "0x5d0004fe2e0ec6d002678c7fa01026cabde9e793",
      }),
    });
    const videoResponseJson = await videoResponse.json();
    const streamUrl = `${videoResponseJson.body.videos[0].hls_uri}.m3u8`;
    setStreamUrl(streamUrl);
  };

  // create a new upload URL for the video
  const createUploadUrl = async () => {
    const response = await axios.post(
      "https://api.thetavideoapi.com/upload",
      {
        size: 100000, // replace with actual video size
      },
      {
        headers: {
          "x-tva-sa-id": "srvacc_fk130i83e047t4kg5w4edswj7",
          "x-tva-sa-secret": "6hvuhqk3499qu9gbb8w34gft6q6q8re5",
          "Content-Type": "application/json",
        },
      }
    );
    return response.data.body.uploads[0].url;
  };

  return (
    <div>
      <button disabled={isRecording} onClick={startRecording}>
        Start Recording
      </button>
      <button disabled={!isRecording} onClick={stopRecording}>
        Stop Recording and Publish Live Stream
      </button>
      {streamUrl && (
        <div>
          <div>Live stream URL: {streamUrl}</div>
          <video width="640" height="360" controls>
            <source src={streamUrl} type="application/x-mpegURL" />
          </video>
        </div>
      )}
      <video ref={videoRef} width="640" height="360" />
    </div>
  );
}

export default VideoUploader;
