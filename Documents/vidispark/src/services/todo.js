// services/todo.js

import { useState, useContext } from "react";
import { AuthContext } from "../../pages/authContext";

export const useTodo = () => {
  const { db } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    setTasks(await db.cget("tasks", ["date", "desc"]));
  };

  const getMyTasks = async (user) => {
    setTasks(
      await db.cget(
        "tasks",
        ["user_address", "==", user.wallet.toLowerCase()],
        ["date", "desc"]
      )
    );
  };

  const addTask = async (task, user) => {
    let res = await db.add(
      {
        task,
        date: db.ts(),
        user_address: db.signer(),
        done: false,
      },
      "tasks",
      user
    );

    await getTasks();
  };

  const completeTask = async (id, user) => {
    await db.update(
      {
        done: true,
      },
      "tasks",
      id,
      user
    );
    await getTasks();
  };

  const deleteTask = async (id, user) => {
    await db.delete("tasks", id, user);
    await getTasks();
  };

  return { tasks, getTasks, getMyTasks, addTask, completeTask, deleteTask };
};
