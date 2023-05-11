// services/todo.js

import { useState, useContext } from "react";
import { AuthContext } from "../../pages/authContext";

export const useUserRegister = () => {
  const { db, user } = useContext(AuthContext);

  const isUserNameExist = async (username) => {
    setTasks(
      await db.cget("user", ["username", "==", username], ["date", "desc"])
    );
  };

  const addUser = async (userObj) => {
    let value = isUserNameExist(userObj.username);
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
