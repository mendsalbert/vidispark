// services/todo.js

import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../pages/authContext";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";

const bcrypt = require("bcryptjs");

export const useVideo = () => {
  const { db, user, userInfo } = useContext(AuthContext);
  const router = useRouter();

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

  const getAllVideos = async () => {
    const videos = await db.cget("video");

    const videoResults = [];

    // for (const video of videos) {
    //   const userId = video.data.uploaderId;
    //   const user = await db.get("user", userId);

    //   videoResults.push({
    //     videoId: video.id,
    //     videoData: video.data,
    //     user: user.data
    //   });
    // }

    console.log(videos.data.uploaderId);
    //TODO get videos as well as the user who posted it
    // await db.get("collection_name", "doc_id", "sub_collection_name_1", "sub_doc_id_1", "sub_collection_name_2", "sub_doc_id_2")
  };
  return { addVideo, getAllVideos };
};
