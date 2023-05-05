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

// export default ThetaLiveStreaming;

import { useRef, useState, useEffect } from "react";
import lf from "localforage";
import { isNil, map } from "ramda";
import SDK from "weavedb-sdk";
import { Buffer } from "buffer";
import { ethers } from "ethers";
import { useState } from "react";

const { Box, Flex, Input } = require("tailwindcss/stubs/defaultConfig.stub");
const contractTxId = "CRE4-5cQNsfGOyfW54qI--yEzXwbI3h0A-gu9GbF-JI";

let db;
export default function App() {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [tab, setTab] = useState("All");
  const [initDB, setInitDB] = useState(false);
  let task = useRef();
  const tabs = isNil(user) ? ["All"] : ["All", "Yours"];

  const setupWeaveDB = async () => {
    window.Buffer = Buffer;
    db = new SDK({
      contractTxId,
    });
    await db.initializeWithoutWallet();
    setInitDB(true);
  };

  const getTasks = async () => {
    setTasks(await db.cget("tasks", ["date", "desc"]));
  };

  const getMyTasks = async () => {
    setTasks(
      await db.cget(
        "tasks",
        ["user_address", "==", user.wallet.toLowerCase()],
        ["date", "desc"]
      )
    );
  };

  const addTask = async (newTask) => {
    await db.add(
      {
        task: newTask,
        date: db.ts(),
        user_address: db.signer(),
        done: false,
      },
      "tasks",
      user
    );
    await getTasks();
  };

  const completeTask = async (id) => {
    await db.update(
      {
        done: true,
      },
      "tasks",
      id,
      user
    );
    await getTasks();
  };

  const deleteTask = async (id) => {
    await db.delete("tasks", id, user);
    await getTasks();
  };

  const login = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    await provider.send("eth_requestAccounts", []);
    const wallet_address = await provider.getSigner().getAddress();
    let identity = await lf.getItem(
      `temp_address:${contractTxId}:${wallet_address}`
    );
    let tx;
    let err;
    if (isNil(identity)) {
      ({ tx, identity, err } = await db.createTempAddress(wallet_address));
      const linked = await db.getAddressLink(identity.address);
      if (isNil(linked)) {
        alert("something went wrong");
        return;
      }
    } else {
      await lf.setItem("temp_address:current", wallet_address);
      setUser({
        wallet: wallet_address,
        privateKey: identity.privateKey,
      });
      return;
    }
    if (!isNil(tx) && isNil(tx.err)) {
      identity.tx = tx;
      identity.linked_address = wallet_address;
      await lf.setItem("temp_address:current", wallet_address);
      await lf.setItem(
        `temp_address:${contractTxId}:${wallet_address}`,
        identity
      );
      setUser({
        wallet: wallet_address,
        privateKey: identity.privateKey,
      });
    }
  };

  const logout = async () => {
    if (confirm("Would you like to sign out?")) {
      await lf.removeItem("temp_address:current");
      setUser(null, "temp_current");
    }
  };

  const checkUser = async () => {
    const wallet_address = await lf.getItem(`temp_address:current`);
    if (!isNil(wallet_address)) {
      const identity = await lf.getItem(
        `temp_address:${contractTxId}:${wallet_address}`
      );
      if (!isNil(identity))
        setUser({
          wallet: wallet_address,
          privateKey: identity.privateKey,
        });
    }
  };

  useEffect(() => {
    checkUser();
    setupWeaveDB();
  }, []);

  useEffect(() => {
    if (initDB) {
      if (tab === "All") {
        getTasks();
      } else {
        getMyTasks();
      }
    }
  }, [tab, initDB]);

  const NavBar = () => (
    <Flex p={3} position="fixed" w="100%" sx={{ top: 0, left: 0 }}>
      <Box flex={1} />
      <Flex
        bg="#111"
        color="white"
        py={2}
        px={6}
        sx={{
          borderRadius: "5px",
          cursor: "pointer",
          ":hover": { opacity: 0.75 },
        }}
      >
        {" "}
        {!isNil(user) ? (
          <Box onClick={() => logout()}>{user.wallet.slice(0, 7)}</Box>
        ) : (
          <Box onClick={() => login()}>Connect Wallet</Box>
        )}{" "}
      </Flex>{" "}
    </Flex>
  );

  const Tabs = () => (
    <Flex justify="center" style={{ display: "flex" }} mb={4}>
      {" "}
      {map((v) => (
        <Box
          mx={2}
          onClick={() => setTab(v)}
          className={`${
            tab === v ? "text-red-500 underline" : ""
          } cursor-pointer`}
        >
          {" "}
          {v}{" "}
        </Box>
      ))(tabs)}{" "}
    </Flex>
  );

  const Tasks = () =>
    map((v) => (
      <Flex className="border border-gray-300 rounded-md p-3 my-1" key={v.id}>
        {" "}
        <Box
          w="30px"
          textAlign="center"
          className={`${v.data.done ? "" : "cursor-pointer hover:opacity-75"} `}
        >
          {" "}
          {v.data.done ? (
            "✅"
          ) : v.data.user_address !== user?.wallet.toLowerCase() ? null : (
            <Box onClick={() => completeTask(v.id)}>⬜</Box>
          )}{" "}
        </Box>{" "}
        <Box px={3} flex={1} style={{ marginLeft: "10px" }}>
          {" "}
          {v.data.task}{" "}
        </Box>{" "}
        <Box w="100px" textAlign="center" style={{ marginLeft: "10px" }}>
          {" "}
          {v.data.user_address.slice(0, 7)}{" "}
        </Box>{" "}
        <Box
          w="50px"
          textAlign="center"
          className={`${
            v.data.user_address === user?.wallet.toLowerCase()
              ? "cursor-pointer hover:opacity-75"
              : ""
          }`}
        >
          {" "}
          {v.data.user_address === user?.wallet.toLowerCase() ? (
            <Box
              style={{ marginLeft: "10px" }}
              onClick={() => deleteTask(v.id)}
            >
              {" "}
              ❌{" "}
            </Box>
          ) : null}{" "}
        </Box>{" "}
      </Flex>
    ))(tasks);

  const NewTask = () => {
    const [newTask, setNewTask] = useState("");

    const handleAddBtnClick = async () => {
      if (!/^\s*$/.test(newTask)) {
        await addTask(newTask);
        setNewTask("");
      }
    };

    return (
      <Flex mb={4}>
        <Input
          placeholder="Enter New Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="w-full p-2 rounded-l-md"
        />
        <Flex
          bg="#111"
          color="white"
          py={2}
          px={6}
          className="rounded-r-md cursor-pointer hover:opacity-75"
          onClick={handleAddBtnClick}
        >
          add
        </Flex>
      </Flex>
    );
  };

  const Transactions = () => {
    return (
      <Flex justify="center" p={4}>
        {" "}
        <Box
          as="a"
          target="_blank"
          href={`https://sonar.warp.cc/?#/app/contract/${contractTxId}`}
          className="text-blue-500 underline"
        >
          {" "}
          view transactions{" "}
        </Box>{" "}
      </Flex>
    );
  };

  return (
    <>
      {" "}
      <NavBar />{" "}
      <Flex mt="60px" justify="center" p={3}>
        {" "}
        <Box className="w-full max-w-2xl">
          {" "}
          <Tabs /> {!isNil(user) ? <NewTask /> : null} <Tasks />{" "}
        </Box>{" "}
      </Flex>{" "}
      <Transactions />{" "}
    </>
  );
}
