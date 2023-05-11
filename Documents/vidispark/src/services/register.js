// services/todo.js

import { useState, useContext } from "react";
import { AuthContext } from "../../pages/authContext";

export const useUserRegister = () => {
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
    console.log(value);
    // let res = await db.add(
    //   {
    //     task,
    //     date: db.ts(),
    //     user_address: db.signer(),
    //     done: false,
    //   },
    //   "tasks",
    //   user
    // );
    console.log(userObj);
  };

  return { addUser };
};
