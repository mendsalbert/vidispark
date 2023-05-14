// services/todo.js

import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../pages/authContext";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";

const bcrypt = require("bcryptjs");

export const useVideo = () => {
  const { db, user, userInfo } = useContext(AuthContext);
  const router = useRouter();
  const [videoResults, setVideoResults] = useState([]);

  useEffect(() => {
    const getAllVideos = async () => {
      const videos = await db.cget("video");
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

    getAllVideos();
  }, [db]);

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
        date: db.ts(),
      },
      "video",
      user
    );
    console.log(res);
  };

  return { addVideo, videoResults };
};
