// services/todo.js

import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../pages/authContext";
import { useRouter } from "next/router";
const bcrypt = require("bcryptjs");

export const useUser = () => {
  const { db, user, userInfo, logout } = useContext(AuthContext);
  const router = useRouter();

  const isUserNameExist = async (username) => {
    let res = await db.cget(
      "user",
      ["username", "==", username],
      ["date", "desc"]
    );
    return res;
  };

  const addUser = async (userObj) => {
    let value = await isUserNameExist(userObj.username);
    if (value.length > 1) {
      alert("username exist");
      return;
    }
    let res = await db.add(
      {
        username: userObj.username,
        salt: userObj.salt,
        password: userObj.hash,
        email: "",
        fullname: "",
        bio: "",
        avatarUrlL: "",
        avatarCover: "",
        acceptPolicy: false,
        followers: [],
        following: [],
        date: db.ts(),
        user_address: db.signer(),
      },
      "user",
      user
    );
  };

  const updateUser = async (userObj) => {
    console.log("userInfo", userObj);
    let res = await db.update(
      {
        username: userObj.username,
        email: userObj.email,
        fullname: userObj.fullname,
        contact: userObj.contact,
        bio: userObj.bio,
        avatarUrlL: userObj.url,
        avatarCover: userObj.cover,
        followers: [],
        following: [],
        date: db.ts(),
        user_address: db.signer(),
      },
      "user",
      userInfo[0]?.id,
      user
    );
    // console.log(res);
  };

  const loginUser = async (userObj) => {
    let user_ = await isUserNameExist(userObj.username);
    const enteredPasswordHash = await bcrypt.hashSync(
      userObj.password,
      user_[0]?.data?.salt
    );

    if (enteredPasswordHash === user_[0]?.data?.password) {
      // Passwords match, authentication successful
      console.log("Login successful!");
      /*
  TODO: 1. redirect user to homepage 
  TODO: 2. After some few minute show a sweet alert to tell user complete his profile
      */
      router.push("/23-profile-info");
    } else {
      // Passwords don't match, authentication failed
      console.log("Incorrect username or password.");
    }
    // console.log(user_[0].);
  };

  const followUser = async (followerId) => {
    // if (userInfo[0]?.id === followerId) {
    //   alert("Cannot follow yourself.");
    //   return;
    // }
    // Fetch the existing user data
    const user = await db.get("user", userInfo[0]?.id);

    // Check if the followerId is already in the user's followers array
    if (!user?.followers?.includes(followerId)) {
      // Add the followerId to the user's followers array
      user?.followers?.push(followerId);

      // Update only the followers field in the user data
      await db.update({ followers: user.followers }, "user", userInfo[0]?.id);

      // Fetch the existing follower data
      const follower = await db.get("user", followerId);

      // Add the userId to the follower's following array
      follower?.following?.push(userInfo[0]?.id);

      // Update only the following field in the follower's data
      await db.update({ following: follower.following }, "user", followerId);
    } else {
      // User is already following
      alert("User is already following.");
    }
  };

  const unfollowUser = async (followerId) => {
    // Fetch the existing user data
    const user = await db.get("user", userInfo[0]?.id);

    // Check if the followerId is in the user's followers array
    const followerIndex = user.followers.indexOf(followerId);

    if (followerIndex !== -1) {
      // Remove the followerId from the user's followers array
      user.followers.splice(followerIndex, 1);

      // Update only the followers field in the user data
      await db.update({ followers: user.followers }, "user", userInfo[0]?.id);

      // Fetch the existing follower data
      const follower = await db.get("user", followerId);

      // Check if the userId is in the follower's following array
      const followingIndex = follower.following.indexOf(userInfo[0]?.id);
      if (followingIndex !== -1) {
        // Remove the userId from the follower's following array
        follower.following.splice(followingIndex, 1);

        // Update only the following field in the follower's data
        await db.update({ following: follower.following }, "user", followerId);
      }
    } else {
      // User is not following
      alert("User is not following.");
    }
  };
  return {
    addUser,
    loginUser,
    userInfo,
    updateUser,
    followUser,
    unfollowUser,
    logout,
  };
};
