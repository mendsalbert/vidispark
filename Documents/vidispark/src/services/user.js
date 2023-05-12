// services/todo.js

import { useState, useContext } from "react";
import { AuthContext } from "../../pages/authContext";
const bcrypt = require("bcryptjs");

export const useUser = () => {
  const { db, user } = useContext(AuthContext);

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
    const enteredPasswordHash = bcrypt.hashSync(
      userObj.password,
      user_[0].salt
    );

    console.log(user_[0]);
    if (enteredPasswordHash === user.password) {
      // Passwords match, authentication successful
      console.log("Login successful!");
    } else {
      // Passwords don't match, authentication failed
      console.log("Incorrect username or password.");
    }
    // console.log(user_[0].);
    // let res = await db.add(
    //   {
    //     username: userObj.username,
    //     salt: userObj.salt,
    //     password: userObj.hash,
    //     date: db.ts(),
    //     user_address: db.signer(),
    //   },
    //   "user",
    //   user
    // );

    // console.log(value.length);
  };

  return { addUser, loginUser };
};
