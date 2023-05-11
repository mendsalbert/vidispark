// services/todo.js

import { useState, useContext } from "react";
import { AuthContext } from "../../pages/authContext";

export const useUserRegister = () => {
  const { db, user } = useContext(AuthContext);

  const addUser = async (userObj) => {
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
