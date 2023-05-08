// import React from "react";
// import ProfileInfoSidebar from "../src/components/Profile Page/Profile Info/ProfileInfoSidebar";
// import ProfilePurchase from "../src/components/Profile Page/Profile Upload/ProfilePurchase";
// import ProfileUploadAndPreview from "../src/components/Profile Page/Profile Upload/ProfileUploadAndPreview";
// import Layouts from "../src/layouts/Layouts";
// import { useAccount,useSigner } from "wagmi";
// import { useAccount, useConnect, useDisconnect } from "wagmi";
// import { InjectedConnector } from "wagmi/connectors/injected";
// const UploadArtWork = () => {

//   const signer = useSigner();
//   const { address, isConnected } = useAccount();
//   const { connect } = useConnect({
//     connector: new InjectedConnector(),
//   });
//   const { disconnect } = useDisconnect();
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
// import React, { useState, useRef } from "react";
// import axios from "axios";

// function ThetaLiveStreaming() {
//   const [streamUrl, setStreamUrl] = useState("");
//   const [isStreaming, setIsStreaming] = useState(false);
//   const videoRef = useRef(null);
//   const streamRef = useRef(null);

//   const startStream = async () => {
//     setIsStreaming(true);
//     const streamData = new FormData();
//     streamData.append("name", "My Live Stream");
//     streamData.append("resolutions", [
//       "160p",
//       "240p",
//       "360p",
//       "720p",
//       "source",
//     ]);
//     streamData.append("source_resolution", "720p");
//     streamData.append("fps", "60");

//     const response = await axios.post(
//       "https://api.thetavideoapi.com/stream",
//       streamData,
//       {
//         headers: {
//           "x-tva-sa-id": "srvacc_fk130i83e047t4kg5w4edswj7",
//           "x-tva-sa-secret": "6hvuhqk3499qu9gbb8w34gft6q6q8re5",
//           "Content-Type": "multipart/form-data",
//         },
//       }
//     );

//     const streamKey = response.data.body.stream_key;
//     const streamServer = response.data.body.stream_server;

//     setStreamUrl(`${streamServer}/${streamKey}`);

//     const stream = await navigator.mediaDevices.getUserMedia({
//       audio: true,
//       video: true,
//     });

//     streamRef.current = stream;
//     videoRef.current.srcObject = stream;
//     videoRef.current.play();

//     const publishStreamUrl = `rtmp://ingestor.thetavideoapi.com/app/${streamKey}`;

//     const ws = new WebSocket("ws://ingestor.thetavideoapi.com/app");

//     ws.addEventListener("open", () => {
//       console.log("Connection established");
//       ws.send(`{"command":"publish","streamName":"${streamKey}"}`);
//     });

//     ws.addEventListener("message", (event) => {
//       console.log(`[message] Data received from server: ${event.data}`);
//       const message = JSON.parse(event.data);
//       if (message.status == "publishing") {
//         console.log("Stream is publishing");
//       }
//     });

//     const wsHeartbeatInterval = setInterval(() => {
//       ws.send('{"command":"ping"}');
//     }, 5000);

//     window.addEventListener("beforeunload", () => {
//       clearInterval(wsHeartbeatInterval);
//       ws.close();
//       streamRef.current.getTracks().forEach((track) => track.stop());
//     });
//   };

//   const stopStream = () => {
//     setIsStreaming(false);
//     streamRef.current.getTracks().forEach((track) => track.stop());
//   };

//   return (
//     <div>
//       {!isStreaming && <button onClick={startStream}>Start Live Stream</button>}
//       {isStreaming && <button onClick={stopStream}>Stop Live Stream</button>}
//       {streamUrl && (
//         <div>
//           <div>
//             <a href={streamUrl} target="_blank">
//               Playback Live Stream
//             </a>
//           </div>
//           <video ref={videoRef} width="640" height="480" controls></video>
//         </div>
//       )}
//     </div>
//   );
// }

export default function App() {
  // Require the web3storage module
  const { Web3Storage } = require("web3.storage");

  // Create a new instance of Web3Storage
  const client = new Web3Storage({ token: "your-api-key" });

  // Define a function for uploading user data to web3storage
  async function uploadUserData(user, data) {
    // Convert the data to a Uint8Array
    const uint8Data = new TextEncoder().encode(JSON.stringify(data));

    // Upload the data to web3storage and get the resulting CID
    const { cid } = await client.put(uint8Data);

    // Save the CID to the user's profile
    user.web3storageCid = cid.toString();
  }

  // Define a function for downloading user data from web3storage
  async function downloadUserData(user) {
    // Retrieve the data from web3storage using the CID
    const res = await fetch(`https://dweb.link/ipfs/${user.web3storageCid}`);
    const data = await res.json();

    // Return the data
    return data;
  }

  // Define a function for authenticating a user
  async function authenticateUser(username, password) {
    // Retrieve the user's data from web3storage
    const user = await downloadUserData(username);

    // Check if the password is correct
    if (user.password === password) {
      // Return the user object if the password is correct
      return user;
    } else {
      // Throw an error if the password is incorrect
      throw new Error("Incorrect password");
    }
  }

  // Define a function for creating a new user
  async function createUser(username, password, profileImage) {
    // Check if the username is available
    const existingUser = await downloadUserData(username);
    if (existingUser) {
      throw new Error("Username already taken");
    }

    // Upload the user's profile image to IPFS and get the resulting CID
    const { cid } = await client.put(profileImage);

    // Create a new user object with the provided data
    const user = {
      username,
      password,
      profileImageCid: cid.toString(),
      web3storageCid: null,
      followers: [],
      following: [],
      tokenBalance: 0,
    };

    // Upload the user object to web3storage
    await uploadUserData(user);

    // Return the new user object
    return user;
  }

  return <div></div>;
}
