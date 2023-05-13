// services/todo.js

import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../pages/authContext";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";

const bcrypt = require("bcryptjs");

export const useUser = () => {
  const { db, user, userInfo } = useContext(AuthContext);
  const router = useRouter();

  const addVideo = async (videoObj) => {
    console.log(videoObj);
    // let res = await db.add(
    //   {
    //     id: uuidv4(),
    //     title: videoObj.title,
    //     description: videoObj.description,
    //     category: videoObj.category,
    //     thumbnailUrl: videoObj.thumbnailUrl,
    //     uploaderId: videoObj.uploaderId,
    //     uploaderAddress: db.signer(),
    //     tags:userObj.tags,
    //     date: db.ts(),
    //   },
    //   "video",
    //   user
    // );
  };

  return { addVideo };
};
