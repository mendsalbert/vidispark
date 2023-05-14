// services/todo.js

import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../pages/authContext";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";

const bcrypt = require("bcryptjs");

export const useVideo = () => {
  const { db, user, userInfo, setupWeaveDB, initDB } = useContext(AuthContext);
  const router = useRouter();
  const [videoResults, setVideoResults] = useState([]);
  console.log(initDB);

  useEffect(() => {
    getAllVideos();
  }, [initDB]);

  const addVideo = async (videoObj) => {
    console.log(videoObj);
    let res = await db.add(
      {
        id: uuidv4(),
        title: videoObj.title,
        description: videoObj.description,
        category: videoObj.category,
        thumbnailUrl: videoObj.thumbnail,
        videoUrl: videoObj.videoUrl,
        uploaderId: userInfo[0]?.id,
        uploaderAddress: db.signer(),
        views: 1,
        likes: 0,
        date: db.ts(),
      },
      "video",
      user
    );
    console.log(res);
  };

  const getAllVideos = async () => {
    if (!db) {
      return;
    }
    const videos = await db.cget("video");
    // await db.delete("video", "6jebHFjlrVPNJ06dMx4M");

    const results = [];

    for (const video of videos) {
      console.log(video.data.uploaderId);
      const userId = video.data.uploaderId;
      const user = await db.get("user", userId);

      results.push({
        videoId: video.id,
        videoData: video.data,
        user: user,
      });
    }

    setVideoResults(results);
  };

  return { addVideo, videoResults };
};
