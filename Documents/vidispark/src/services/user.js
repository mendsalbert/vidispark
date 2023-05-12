// services/todo.js

import { useState, useContext } from "react";
import { AuthContext } from "../../pages/authContext";
import { useRouter } from "next/router";
const bcrypt = require("bcryptjs");

export const useUser = () => {
  const { db, user } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState("");
  const router = useRouter();
  const isUserNameExist = async (username) => {
    let res = await db.cget(
      "user",
      ["username", "==", username],
      ["date", "desc"]
    );
    return res;
  };

  const getUserInformation = async () => {
    let res = await db.cget(
      "user",
      ["user_address", "==", user?.wallet?.toLowerCase()],
      ["date", "desc"]
    );
    setUserInfo(res);
    console.log(res);
    return res;
  };

  getUserInformation();

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
        date: db.ts(),
        user_address: db.signer(),
      },
      "user",
      user
    );

    console.log(value.length);
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

  return { addUser, loginUser, userInfo };
};
