// services/todo.js

import { useState, useContext } from "react";
import { AuthContext } from "../../pages/authContext";

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

    console.log(user_);
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

  return { addUser };
};
