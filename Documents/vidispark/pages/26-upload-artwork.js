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

import React, { useRef } from "react";
import axios from "axios";

function VideoUploader() {
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  // start the live stream
  const startStream = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    streamRef.current = stream;
    videoRef.current.srcObject = stream;
    videoRef.current.play();

    // create a new livestream
    const streamResponse = await axios.post(
      "https://api.thetavideoapi.com/stream",
      {
        name: "My New Livestream",
        resolutions: ["160p", "240p", "360p", "720p", "source"],
        source_resolution: "720p",
        fps: 30,
      },
      {
        headers: {
          "x-tva-sa-id": "srvacc_fk130i83e047t4kg5w4edswj7",
          "x-tva-sa-secret": "6hvuhqk3499qu9gbb8w34gft6q6q8re5",
          "Content-Type": "application/json",
        },
      }
    );

    // get the RTMP URL
    const streamUrl =
      streamResponse.data.body.stream_server +
      "/" +
      streamResponse.data.body.stream_key;
    console.log("Live stream URL:", streamUrl);

    // create a media source
    const mediaSource = new MediaSource();
    videoRef.current.src = URL.createObjectURL(mediaSource);

    // on media source open, add a new source buffer and set the source buffer update end callback
    mediaSource.addEventListener("sourceopen", async () => {
      const sourceBuffer = mediaSource.addSourceBuffer(
        'video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
      );

      // handle the source buffer update end
      sourceBuffer.addEventListener("updateend", async () => {
        if (!videoRef.current.ended) {
          try {
            // check the buffer length and update the source buffer if it's less than 60 seconds
            if (
              sourceBuffer.buffered.length &&
              sourceBuffer.buffered.end(0) - videoRef.current.currentTime < 60
            ) {
              console.log(
                `Buffer length: ${
                  sourceBuffer.buffered.end(0) - videoRef.current.currentTime
                }`
              );
              const { data } = await axios.get(
                `${streamUrl}.mp4?=time=${
                  sourceBuffer.buffered.end(0) - 1
                }&t=${Date.now()}`,
                {
                  responseType: "arraybuffer",
                }
              );

              if (data.byteLength > 0) {
                const buffer = new Uint8Array(data);
                sourceBuffer.appendBuffer(buffer);
              } else {
                console.log("No data received from the server");
              }
            }
          } catch (error) {
            console.error("Error fetching stream data:", error);
          }
        }
      });

      // request the initial data segment and append it to the source buffer
      try {
        const { data } = await axios.get(`${streamUrl}.mp4?t=${Date.now()}`, {
          responseType: "arraybuffer",
        });
        sourceBuffer.appendBuffer(data);
      } catch (error) {
        console.error("Error fetching stream data:", error);
      }
    });
  };

  return (
    <div>
      <button onClick={startStream}>Start Live Stream</button>
      <video ref={videoRef} width="640" height="360" controls></video>
    </div>
  );
}

export default VideoUploader;
